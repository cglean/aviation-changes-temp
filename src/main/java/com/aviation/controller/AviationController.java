package com.aviation.controller;



import java.text.ParseException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.bo.service.ComponentService;






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
	public void loadComponentData(@PathVariable final String startDate,@PathVariable final String endDate, HttpSession session)throws ParseException {
		
		componentService.getComponent(startDate, endDate);
		System.out.println("abc");
	}


}
