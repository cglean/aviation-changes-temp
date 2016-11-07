package com.aviation.controller;

import static com.aviation.util.PathConstants.DATEFORMAT;
import static com.aviation.util.PathConstants.DATEFORMATNEW;
import static com.aviation.util.PathConstants.GET_DEFAULT_FILTER;
import static com.aviation.util.PathConstants.GET_FILTERS;
import static com.aviation.util.PathConstants.LOAD_COMPONENT_BY_START_END_DATE;
import static com.aviation.util.PathConstants.LOGIN_VERIFICATON;
import static com.aviation.util.PathConstants.SAVEFILTER;
import static com.aviation.util.PathConstants.SAVE_DEFUALT_FILTER;
import static com.aviation.util.PathConstants.UPDATE_FILTER;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.entity.Component;
import com.aviation.entity.Filter;
import com.aviation.entity.Login;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentReport;
//import com.mysql.fabric.xmlrpc.base.Array;

@RestController
public class AviationController {
	
	private List<Long> componentsIds;
	private String removalFromDate;
	private String removalToDate;
	private String optionEnd;
	private String optionStart;

	@Autowired
	private AviationService aviationService;

	@RequestMapping(value = LOAD_COMPONENT_BY_START_END_DATE, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Component> loadComponentData(@PathVariable final String startDate, @PathVariable final String endDate)
			throws ParseException {
		final String pattern = DATEFORMAT;
		Date sDate = null;
		Date eDate = null;
		try {
			sDate = new SimpleDateFormat(pattern).parse(startDate);
			eDate = new SimpleDateFormat(pattern).parse(endDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return aviationService.getComponent(sDate, eDate);
	}

	@RequestMapping(value = SAVEFILTER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveFilter(@RequestBody final Filter filter) throws ParseException {
		aviationService.saveFilter(filter);
	}
	
	@RequestMapping(value = UPDATE_FILTER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void updateFilter(@RequestBody final Filter filter) throws ParseException {
		aviationService.updateFilter(filter);
	}

	@RequestMapping(value = SAVE_DEFUALT_FILTER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveAsDefaultFilter(@RequestBody Filter filter) throws ParseException {
		aviationService.saveAsDefaultFilter(filter);
	}

	@RequestMapping(value = GET_FILTERS, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Filter> getFilters() {
		return aviationService.getFilters();
	}

	@RequestMapping(value = GET_DEFAULT_FILTER, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Filter getDefaultFilter() {
		return aviationService.getDefaultFilter();
	}
	
	@RequestMapping(value = "/removalReport/{step}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ComponentReport removalReport(@PathVariable final int step) {
		 return aviationService.getComponents(componentsIds);
	}
	
	@RequestMapping(value = "/splashScreen", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> showSplashScreen() {
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		List<Object> componentRemovalRept =  aviationService.getRemovedComponents(sDate, eDate);
		return componentRemovalRept;
	}
	
	@RequestMapping(value = "/splashScreenMFG", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> showSplashScreenCPN() {
	
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		 
		List<Object> componentRemovalRept =  aviationService.getRemovedComponentsMFG(sDate, eDate);
		return componentRemovalRept;
	}
	
	
	@RequestMapping(value = "/splashScreenCPNSerial", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> splashScreenCPNSerial(/*@RequestBody   List<Long> componentIds*/) {
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		 
		List<Object> componentRemovalRept =  aviationService.getRemovedComponentsCPNSerial(sDate, eDate);
		return componentRemovalRept;
	}
	

	@RequestMapping(value = "/splashScreenTail", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> splashScreenTail() {
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		List<Object> componentRemovalRept =  aviationService.getRemovedComponentsTailNoOfRemoval(sDate, eDate);
		return componentRemovalRept;
		
	}
	
    public static String getDate(Calendar cal){
        return "" + cal.get(Calendar.DATE) +"/" +
                (cal.get(Calendar.MONTH)+1) + "/" + cal.get(Calendar.YEAR);
    }
  

    public  List<String> dateInterval()
    {
    	 Calendar cal = Calendar.getInstance();
         cal.setTimeZone(TimeZone.getTimeZone("GMT"));
         String toDate=getDate(cal);
         cal.add(Calendar.DATE, -30);
         
         String fromDate=getDate(cal);
         toDate=toDate.replaceAll("/", "-");
         fromDate=fromDate.replaceAll("/", "-");
         DateFormat df = new SimpleDateFormat("dd-MM-yyyy"); 
         List<String> dateRange=new ArrayList<String>();
     	try {
     		Date frmDate= df.parse(fromDate);
             Date tDate= df.parse(toDate);
             SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
             fromDate=formatter.format(frmDate);
             toDate=formatter.format(tDate);
             dateRange.add(fromDate);
             dateRange.add(toDate);
 	} catch (ParseException e) {
 		e.printStackTrace();
 	}
		return dateRange;
    }
    

	@RequestMapping(value = LOGIN_VERIFICATON, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Login LoginVerification(@PathVariable final String username, @PathVariable final String password){
		boolean loginValidRes =  aviationService.isValidLogin(username, password);
		Login sample=new Login();
		sample.setResult(loginValidRes);
		return sample;
	}
	
    
	@RequestMapping(value = "/postComponentIds/{components}/{fromDate}/{toDate}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void getComponentsIds(@RequestBody final List<Component> components,@PathVariable final String fromDate, @PathVariable final String toDate) throws ParseException {
		componentsIds = new ArrayList<Long>();
		for (Component component : components) {
			componentsIds.add(component.getComponentID());
		}
		 DateFormat df = new SimpleDateFormat("yyyy-MM-dd"); 
	     System.out.println("fromdate "+fromDate+" to date "+toDate);
	     optionEnd=toDate;
	     optionStart=fromDate;
	     Date frmDate= df.parse(fromDate);
         Date tDate= df.parse(toDate);
		 SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		 String  startDate=formatter.format(frmDate);
		 String  endDate=formatter.format(tDate);
		
      removalFromDate=startDate.replaceAll("-", "/");
      removalToDate=endDate.replaceAll("-", "/");
	}

	@RequestMapping(value = "/paginationStatus", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<String> paginationStatus(/*@RequestBody   List<Long> componentIds*/) {
		List<String> status =  new ArrayList<String>();
		status.add(removalFromDate);
		status.add(removalToDate);
		status.add(optionEnd);
		status.add(optionStart);
		return status;
	}
}
