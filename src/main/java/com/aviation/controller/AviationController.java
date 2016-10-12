package com.aviation.controller;



import java.text.ParseException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.bo.service.ComponentService;
import com.aviation.entity.Component;
import com.aviation.entity.Filter;
import com.aviation.vo.FilterVO;






@RestController
public class AviationController {
	
	
	@Autowired
	private ComponentService componentService;
	
	/*
	public void getFilter(){
		
	}

	public void loadFilter(){
			
		}
	
	public void saveFilter(){
		
	}
	
	public void saveAsDefaultFilter(){
		
	}*/
	
	@RequestMapping(value = "/check", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void check(){
		System.out.println("abc");
	}
	
	
	@RequestMapping(value = "/loadComponent/{startDate}/{endDate}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Component> loadComponentData(@PathVariable final String startDate,@PathVariable final String endDate)throws ParseException {
		
		List<Component> comp=	componentService.getComponent(startDate, endDate);
		System.out.println("abc");
		return comp;
	}

	
	@RequestMapping(value = "/saveFilter", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveFilter(@RequestBody   Filter filter )throws ParseException {
		
		
		
		//System.out.println("saveFiltter");
		
		
		componentService.saveFilter(filter);
		
	}

}
