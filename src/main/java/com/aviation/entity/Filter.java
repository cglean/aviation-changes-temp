package com.aviation.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.aviation.vo.FilterByVO;

@Entity
@Table(name="filter")
public class Filter implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 334665167725503216L;

	@Id
	@Column(name="filterID")
	private Long filterID;
	
	@Column(name="filterName",unique=true)
	private String filterName;
	
	@Column(name="toDate")
	private Date toDate;
	
	@Column(name="fromDate")
	private Date fromDate;
	
	@Column(name="sortBy")
	private String sortBy;
	
	@MapsId
	 @JoinColumn(name = "filterID")
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private FilterBy filterBy;

	public Long getFilterID() {
		return filterID;
	}

	public void setFilterID(Long filterID) {
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

	public FilterBy getFilterBy() {
		return filterBy;
	}

	public void setFilterBy(FilterBy filterBy) {
		this.filterBy = filterBy;
	}
	
	

}
