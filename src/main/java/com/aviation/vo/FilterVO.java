package com.aviation.vo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;

public class FilterVO {
	
	@Id
	private long filterID;
	
	private String filterName;
	
	private Date toDate;
	
	private Date fromDate;
	
	private String sortBy;
	
	private FilterByVO filterBy;

	public long getFilterID() {
		return filterID;
	}

	public void setFilterID(long filterID) {
		this.filterID = filterID;
	}

	public String getFilterName() {
		return filterName;
	}

	public void setFilterName(String filterName) {
		this.filterName = filterName;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public String getSortBy() {
		return sortBy;
	}

	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}

	public FilterByVO getFilterBy() {
		return filterBy;
	}

	public void setFilterBy(FilterByVO filterBy) {
		this.filterBy = filterBy;
	} 


}
