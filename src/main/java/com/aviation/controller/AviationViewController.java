package com.aviation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AviationViewController {

	@RequestMapping("/")
	public String viewDetails() {
		// TODO:: Add suffix in application.properties file so that .html need not be added 
	    // Move the constants to Constant file 
		return "index.html";
	}
}
