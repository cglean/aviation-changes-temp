package com.aviation.bo;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aviation.bo.service.ComponentService;
import com.aviation.entity.Component;
import com.aviation.entity.Filter;
import com.aviation.service.AviationService;
import com.aviation.vo.FilterVO;


@Service
public class ComponentBO implements ComponentService{
	
	@Autowired
	private AviationService aviationService;
	
	@Override
	public  List<Component> getComponent(final String fromDate , final String toDate){
		
		String pattern = "YYYY-MM-DD";
		Date startDate=null;
		Date endDate=null;
		try {
			startDate =  new SimpleDateFormat(pattern).parse(fromDate);
			 endDate =  new SimpleDateFormat(pattern).parse(toDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return aviationService.getComponent(startDate,endDate);
		
		
	}
	
	
	public void saveFilter(Filter filter){
		aviationService.saveFilter(filter);
		
		System.out.println("ComponentBo-- SaveFilter");
	}
	
	public List<Filter> getFilters() {
		return aviationService.getFilters();
	}

}
