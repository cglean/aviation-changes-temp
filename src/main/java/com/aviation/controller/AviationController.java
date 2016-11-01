package com.aviation.controller;

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
import com.aviation.entity.ComponentHistory;
import com.aviation.entity.Filter;
import com.aviation.entity.Login;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentReport;
import com.mysql.fabric.xmlrpc.base.Array;

import static com.aviation.util.PathConstants.*;

@RestController
public class AviationController {
	
	private List<Long> componentsIds;
	private int currentcount;
	private int forStart;
	private int forEnd;

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

	@RequestMapping(value = SAVE_DEFUALT_FILTER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveAsDefaultFilter(@RequestBody Filter filter) throws ParseException {
		aviationService.saveAsDefaultFilter(filter);
	}

	@RequestMapping(value = GET_FILTERS, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Filter> getFilters() {
		List<Filter> test=aviationService.getFilters();
		for(Filter i:test){
			System.out.println("hi test"+i);
		}
		currentcount=0;
		forStart=0;
		forEnd=0;
		System.out.println("hi in load filter"+aviationService.getFilters());
		return aviationService.getFilters();
	}

	@RequestMapping(value = GET_DEFAULT_FILTER, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Filter getDefaultFilter() {
		return aviationService.getDefaultFilter();
	}
	
	
	
	@RequestMapping(value = "/removalReport/{step}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ComponentReport removalReport(@PathVariable final int step/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
	//	long[] components = {2312,2302,1642};
		System.out.println("step value"+step);
		long [] component= new long[componentsIds.size()];
		int i;
		
		int length=componentsIds.size();
		
		if(forEnd==length){
			forEnd=forStart;
			forStart=forStart-25;
			currentcount=currentcount-1;
		}else if(step==1){
			forStart=forStart+25;
			forEnd=forEnd+25;
			currentcount=currentcount+1;
		}else if(step==-1){
			forStart=forStart-25;
			forEnd=forEnd-25;
			currentcount=currentcount-1;
		}else if(step==0){
			forStart=0;
			forEnd=25;
			currentcount=1;
		}
		
		if(forEnd>length){
			forEnd=length;
		}
		System.out.println("for values start"+forStart);
		System.out.println("for values end"+forEnd);
		
		System.out.println(componentsIds);
	
		
	
		
		System.out.println("id length"+componentsIds.size());
		for(i=0; i<componentsIds.size(); i++)
		{
			component[i]=componentsIds.get(i);
			
			System.out.println("component[i]="+component[i]);
		}
		System.out.println("component id length actuall"+componentsIds.size());
	//	long[] components = componentsIds.toArray();
		//List<Long> compos = new ArrayList<Long>();
		List<Long> temp=new ArrayList<Long>();
		System.out.println("length before "+temp.size());
		for(int j=forStart;j<forEnd;j++){
			temp.add(componentsIds.get(j));
		}
		System.out.println("length after "+temp.size());
		System.out.println("temp value "+temp);
		System.out.println("componentsIds value "+componentsIds);
		//List<Long> compos1=componentsIds;
		//System.out.println(compos);
		List<Long> compos1=temp;
		ComponentReport componentRemovalRept =  aviationService.getComponents(compos1);
		
		/*List<Object> abc = new ArrayList<Object>();
		abc.add("suman");
		abc.add("manwar");*/
		
		
		 
		 return componentRemovalRept;
	}
	
	@RequestMapping(value = "/splashScreen", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> showSplashScreen(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		
		
		
		List<String> dateRange=new ArrayList<String>();
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		/*dateRange=dateInterval();
		System.out.println("date Range"+dateRange);*/

		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
			 
		} catch (ParseException e) {
			e.printStackTrace();
			
		}

		List<Object> componentRemovalRept =  aviationService.getRemovedComponents(sDate, eDate);
		//List<Object> componentRemovalRept =  aviationService.getRemovedComponents(new Date("2014-08-10"), new Date("2016-08-10"));
		System.out.println(componentRemovalRept);
		
		return componentRemovalRept;
	}
	
	
	@RequestMapping(value = "/splashScreenCPN", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> showSplashScreenCPN(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		
		
		
		
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		 
		List<Object> componentRemovalRept =  aviationService.getRemovedComponentsCPN(sDate, eDate);
		//List<Object> componentRemovalRept =  aviationService.getRemovedComponentsCPN(new Date("2014-08-10"), new Date("2016-08-10"));
		System.out.println("in cpn"+componentRemovalRept);
		
		return componentRemovalRept;
	}
	
	
	@RequestMapping(value = "/splashScreenCPNSerial", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> splashScreenCPNSerial(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		
		
		
		
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
		System.out.println("in cpn"+componentRemovalRept);
		
		return componentRemovalRept;
	}
	

	@RequestMapping(value = "/splashScreenTail", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> splashScreenTail(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		
		
		
		
		String pattern = DATEFORMATNEW;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-08-10");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-08-10");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		/*long diff = sDate.getTime() - eDate.getTime();
		long diffDays = diff / (24 * 60 * 60 * 1000);

		System.out.println(diffDays + " days, ");
	*/
		
		List<Object> sent=new ArrayList<Object>();
		
		List<Object> componentRemovalRept =  aviationService.getRemovedComponentsTail(sDate, eDate);
		System.out.println("tail length"+componentRemovalRept.size());
		for(Object i:componentRemovalRept){
			
			System.out.println("hello data tail number"+i.toString());
			ComponentHistory temp=new ComponentHistory();
			Array temp1=new Array();
			//Object sampleObject=new Object();
			temp=(ComponentHistory) i;
			
			Date fromDate=temp.getFromDate();
			Date toDate=temp.getTodate();
			System.out.println("before if"+toDate);
			if(toDate == null){
				System.out.println("in if"+toDate);
				toDate=eDate;
				System.out.println("after if"+toDate);
			}
			System.out.println("after if"+toDate);
			long diff = toDate.getTime()-fromDate.getTime();
			long diffDays = (diff / ( 60 * 60 * 1000))+1;
			List<Object> tempArr= new ArrayList<Object>();
			tempArr.add(temp.getTailNo());
			tempArr.add(diffDays);
			sent.add(tempArr);
		
			System.out.println(diffDays + " days, ");
		}
		
		System.out.println("in tail");
		System.out.println("in cpn"+componentRemovalRept);
		
		return sent;
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
             
             System.out.println("Current date"+toDate+ "30 days back"+fromDate);
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
	public Login LoginVerification(@PathVariable final String username, @PathVariable final String password)
			{

		System.out.println("username "+username+" pass "+password);
	
		boolean loginValidRes =  aviationService.isValidLogin(username, password);
		Login sample=new Login();
		sample.setResult(loginValidRes);
		return sample;
	}
	
    
    
    
	@RequestMapping(value = "/postComponentIds/{components}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void getComponentsIds(@RequestBody final List<Component> components) throws ParseException {
		
//		/componentIds
		System.out.println("Hi I am in component  dfcd ids");
		componentsIds = new ArrayList<Long>();
		System.out.println("in component"+components.toString());
		for (Component component : components) {
			componentsIds.add(component.getComponentID());
			System.out.println(component.getComponentID());
		}
		//System.out.println(components.size());		
	}

    
    
    
    
	
	@RequestMapping(value = "/paginationStatus", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<String> paginationStatus(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		int actualLength=(int) Math.ceil((componentsIds.size())/25.0);
		System.out.println("actualLength value"+actualLength);
		System.out.println("total value"+currentcount);
		List<String> status =  new ArrayList<String>();
	if(currentcount == actualLength){
		status.add("true");
		status.add("false");
		
	}else if(currentcount==1){
		status.add("false");
		status.add("true");
	}else{
		status.add("false");
		status.add("false");
	}
		 
		
		
		System.out.println("in status"+status);
		
		return status;
	}
	
    
    
    
	
    
    
    
    
    
    
	
}
