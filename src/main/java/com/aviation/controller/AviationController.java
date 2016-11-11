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
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.entity.Component;
import com.aviation.entity.Filter;
import com.aviation.entity.Login;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentReport;
import com.aviation.vo.PostComponentRequestVO;

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
	public List<Component> loadComponentData(@RequestParam(required = false) @DateTimeFormat(pattern = DATEFORMAT) Date start,@RequestParam(required = false) @DateTimeFormat(pattern = DATEFORMAT) Date end)
			throws ParseException {
		
		return aviationService.getComponent(start, end);
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
	public List<Object> splashScreenCPNSerial() {
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
	
    
	@RequestMapping(value = "/postComponentIds", method = RequestMethod.POST)
	public void getComponentsIds(@RequestBody final PostComponentRequestVO requestVO) throws ParseException {
		componentsIds = new ArrayList<Long>();
		for (Component component : requestVO.getComponents()) {
			componentsIds.add(component.getComponentID());
		}
		 DateFormat df = new SimpleDateFormat("yyyy-MM-dd"); 
	     System.out.println("fromdate "+requestVO.getFromDate()+" to date "+requestVO.getToDate());
	     optionEnd=requestVO.getToDate();
	     optionStart=requestVO.getFromDate();
	     Date frmDate= df.parse(requestVO.getFromDate());
         Date tDate= df.parse(requestVO.getToDate());
		 SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		 String  startDate=formatter.format(frmDate);
		 String  endDate=formatter.format(tDate);
		
      removalFromDate=startDate.replaceAll("-", "/");
      removalToDate=endDate.replaceAll("-", "/");
	}

	@RequestMapping(value = "/paginationStatus", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<String> paginationStatus() {
		List<String> status =  new ArrayList<String>();
		status.add(removalFromDate);
		status.add(removalToDate);
		status.add(optionEnd);
		status.add(optionStart);
		return status;
	}
}
