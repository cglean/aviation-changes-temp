package com.aviation.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import org.hibernate.annotations.Type;





@Entity
@Table(name="filter_by")
public class FilterBy implements Serializable{
	
	
	private static final long serialVersionUID = 8962186185912836733L;

	
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
    private Long filterID;
	
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean installedUnit;
	
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean newUnit;
	
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean nonActive;
	
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean problemUnit;
	
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean overhauledUnit;
	
	
	public Long getFilterID() {
		return filterID;
	}

	public void setFilterID(Long filterID) {
		this.filterID = filterID;
	}

	public Boolean getInstalledUnit() {
		return installedUnit;
	}

	public void setInstalledUnit(Boolean installedUnit) {
		this.installedUnit = installedUnit;
	}

	public Boolean getNewUnit() {
		return newUnit;
	}

	public void setNewUnit(Boolean newUnit) {
		this.newUnit = newUnit;
	}

	public Boolean getNonActive() {
		return nonActive;
	}

	public void setNonActive(Boolean nonActive) {
		this.nonActive = nonActive;
	}

	public Boolean getProblemUnit() {
		return problemUnit;
	}

	public void setProblemUnit(Boolean problemUnit) {
		this.problemUnit = problemUnit;
	}

	public Boolean getOverhauledUnit() {
		return overhauledUnit;
	}

	public void setOverhauledUnit(Boolean overhauledUnit) {
		this.overhauledUnit = overhauledUnit;
	}



}
