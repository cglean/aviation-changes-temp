package com.aviation.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="filter")
public class Filter implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 334665167725503216L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="filterID")
	private long filterID;
	
	@Column(name="filterName",unique=true)
	private String filterName;
	
	@Column(name="toDate")
	private Date toDate;
	
	@Column(name="fromDate")
	private Date fromDate;
	
	@Column(name="sortBy")
	private String sortBy;

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
	

	
}
