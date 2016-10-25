package com.aviation.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "filter")
public class Filter implements Serializable {

	private static final long serialVersionUID = 334665167725503216L;

	@Id
	@Column(name = "filterID")
	private Long filterID;

	@NotNull
	@Column(name = "filterName", unique = true)
	private String filterName;

	@NotNull
	@Column(name = "toDate")
	@Temporal(TemporalType.DATE)
	private Date toDate;

	@NotNull
	@Column(name = "fromDate")
	@Temporal(TemporalType.DATE)
	private Date fromDate;

	@Column(name = "sortBy")
	private String sortBy;

	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean defaultFilter;

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

	public boolean isDefaultFilter() {
		return defaultFilter;
	}

	public void setDefaultFilter(boolean defaultFilter) {
		this.defaultFilter = defaultFilter;
	}

}
