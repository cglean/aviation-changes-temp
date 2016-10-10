package com.aviation.bo;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalField;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aviation.bo.service.ComponentService;
import com.aviation.entity.Component;
import com.aviation.service.AviationService;


@Service
public class ComponentBO implements ComponentService{
	
	@Autowired
	private AviationService aviationService;
	
	@Override
	public  List<Component> getComponent(final String fromDate , final String toDate){
		
		//String string = "2011-03-09T03:02:10.823Z";
		String pattern = "YYYY-MM-DD";
	//	Date date = new SimpleDateFormat(pattern).parse(string);
		
		
		
		Date startDate=null;
		Date endDate=null;
		try {
			startDate =  new SimpleDateFormat(pattern).parse(fromDate);
			 endDate =  new SimpleDateFormat(pattern).parse(toDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return aviationService.getComponent(startDate,endDate);
		
		/*1990-07-10/2016-10-10
		
		LocalDate startDate = 
				  LocalDate.parse(
						  fromDate, 
				    DateTimeFormatter.ofPattern(pattern, Locale.ENGLISH));
				
		ZonedDateTime zdtStartDate=
		LocalDate endDate = 
				  LocalDate.parse(
						  toDate, 
				    DateTimeFormatter.ofPattern(pattern, Locale.ENGLISH));
		ZonedDateTime zdtEndDate = endDate.atStartOfDay(ZoneOffset.UTC);	
			return aviationService.getComponent(zdtStartDate,zdtEndDate);*/
		
		
	//	String source = fromDate;
		
		/*ZonedDateTime zdtStartDate=null;
		 ZonedDateTime zdtEndDate=null;
		String pattern = "YYYY-MM-DD";
		DateFormat sdf = new SimpleDateFormat(pattern);
		try {
		    Date startDate = sdf.parse(fromDate);
		     zdtStartDate = ZonedDateTime.ofInstant(startDate.toInstant(), ZoneId.of("UTC"));
		   // System.out.println(zdtStartDate.format(DateTimeFormatter.ofPattern(pattern)));
		  
		    Date endDate = sdf.parse(toDate);
		     zdtEndDate = ZonedDateTime.ofInstant(endDate.toInstant(), ZoneId.of("UTC"));
		 //   System.out.println(zdtEndDate.format(DateTimeFormatter.ofPattern(pattern)));
		  
		   
		} catch (ParseException e) {
		    e.printStackTrace();
		}*/
		
		// return aviationService.getComponent(zdtStartDate,zdtEndDate);
	}

}
