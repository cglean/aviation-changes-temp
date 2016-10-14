package com.aviation.controller;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
import com.aviation.service.AviationService;






@RestController
public class AviationController {
	
	
	@Autowired
	private AviationService aviationService;
	
	
	
	
	
	
	@RequestMapping(value = "/loadComponent/{startDate}/{endDate}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Component> loadComponentData(@PathVariable final String startDate,@PathVariable final String endDate)throws ParseException {
		
		String pattern = "YYYY-MM-DD";
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse(startDate);
			 eDate =  new SimpleDateFormat(pattern).parse(endDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		System.out.println(AviationController.class + "loadComponentData");
		
		return aviationService.getComponent(sDate, eDate);
		
		
	}

	
	@RequestMapping(value = "/saveFilter", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveFilter(@RequestBody   Filter filter )throws ParseException {
		aviationService.saveFilter(filter);
		
		System.out.println(AviationController.class + "saveFilter");
		
	}
	
	
	@RequestMapping(value = "/saveAsDefaultFilter", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveAsDefaultFilter(@RequestBody   Filter filter )throws ParseException {
		aviationService.saveAsDefaultFilter(filter);
		
		System.out.println(AviationController.class + "saveAsDefaultFilter");
		
	}
	
	
	@RequestMapping(value = "/getFilters", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody 
	public List<Filter> getFilters()  {
		
		System.out.println(AviationController.class + "getFilters"); 
		return aviationService.getFilters();
		
	}
	

}
