package com.aviation.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
import com.aviation.entity.ComponentHistory;
import com.aviation.entity.Filter;
import com.aviation.service.AviationService;
import static com.aviation.util.PathConstants.*;

@RestController
public class AviationController {

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
		return aviationService.getFilters();
	}

	@RequestMapping(value = GET_DEFAULT_FILTER, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Filter getDefaultFilter() {
		return aviationService.getDefaultFilter();
	}
	
	
	
	@RequestMapping(value = "/removalReport", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ComponentHistory> removalReport(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		long[] components = {3};
		List<Long> compos = new ArrayList<Long>();
		
		for (Long component : components){
			compos.add(component);
		}
		
		List<ComponentHistory> componentRemovalRept =  aviationService.getComponents(compos);
		
		 
		 return null;
	}
	
	@RequestMapping(value = "/splashScreen", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ComponentHistory> showSplashScreen(/*@RequestBody   List<Long> componentIds*/) {
		// TODOD:: Remove Hard coding 
		
		
		
		
		String pattern = DATEFORMAT;
		Date sDate=null;
		Date eDate=null;
		try {
			sDate =  new SimpleDateFormat(pattern).parse("2014-10-08");
			 eDate =  new SimpleDateFormat(pattern).parse("2016-10-08");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		 
		List<ComponentHistory> componentRemovalRept =  aviationService.getRemovedComponents(sDate, eDate);
		 return null;
	}
	
	
	
}
