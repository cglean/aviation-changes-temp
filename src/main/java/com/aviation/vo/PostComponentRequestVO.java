package com.aviation.vo;

import java.util.List;

import com.aviation.entity.Component;

public class PostComponentRequestVO {

	private String toDate;
	
	private String fromDate;
	
	private List<Component> components;

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public List<Component> getComponents() {
		return components;
	}

	public void setComponents(List<Component> components) {
		this.components = components;
	}

	
	
	
}
