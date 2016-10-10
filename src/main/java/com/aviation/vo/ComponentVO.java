package com.aviation.vo;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ComponentVO {
	
	
	private long componentID;
	
	private String serialNo;
	
	private String fleetNo;
	
	private String subFleetNo;
	
	private String ataSystemNo;
	
	private String tailNo;
	
	private String companyPartNo;
	
	private String mfgPartNo;
	
	
	private Date statusUpdatedDate;
	
	private String status;
	
	
	List<ComponentVO> components;


	public long getComponentID() {
		return componentID;
	}


	public void setComponentID(long componentID) {
		this.componentID = componentID;
	}


	public String getSerialNo() {
		return serialNo;
	}


	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}


	public String getFleetNo() {
		return fleetNo;
	}


	public void setFleetNo(String fleetNo) {
		this.fleetNo = fleetNo;
	}


	public String getSubFleetNo() {
		return subFleetNo;
	}


	public void setSubFleetNo(String subFleetNo) {
		this.subFleetNo = subFleetNo;
	}


	public String getAtaSystemNo() {
		return ataSystemNo;
	}


	public void setAtaSystemNo(String ataSystemNo) {
		this.ataSystemNo = ataSystemNo;
	}


	public String getTailNo() {
		return tailNo;
	}


	public void setTailNo(String tailNo) {
		this.tailNo = tailNo;
	}


	public String getCompanyPartNo() {
		return companyPartNo;
	}


	public void setCompanyPartNo(String companyPartNo) {
		this.companyPartNo = companyPartNo;
	}


	public String getMfgPartNo() {
		return mfgPartNo;
	}


	public void setMfgPartNo(String mfgPartNo) {
		this.mfgPartNo = mfgPartNo;
	}


	public Date getStatusUpdatedDate() {
		return statusUpdatedDate;
	}


	public void setStatusUpdatedDate(Date statusUpdatedDate) {
		this.statusUpdatedDate = statusUpdatedDate;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public List<ComponentVO> getComponents() {
		return components;
	}


	public void setComponents(List<ComponentVO> components) {
		this.components = components;
	}
	
}
