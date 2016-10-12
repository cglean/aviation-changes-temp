package com.aviation.vo;

public class FilterByVO {
	
private boolean filterID;
	
	private Boolean installedUnit;
	
	private Boolean newUnit;
	
	private Boolean nonActive;
	
	private Boolean problemUnit;
	
	private Boolean overhauledUnit;

	public boolean isFilterID() {
		return filterID;
	}

	public void setFilterID(boolean filterID) {
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
