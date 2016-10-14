package com.aviation.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name="component")
public class Component {

	
	@Id
	@Column(name="componentID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long componentID;
	
	@Column(unique=true)
	private String name;
	
	
	
	@Column(name="serialNo",unique=true)
	private String serialNo;
	
	@Column(name="fleetNo")
	private String fleetNo;
	
	@Column(name="subfleetNo")
	private String subfleetNo;
	
	@Column(name="ataSystemNo")
	private String ataSystemNo;
	
	@Column(name="tailNo")
	private String tailNo;
	
	@Column(name="companyPartNo")
	private String companyPartNo;
	
	@Column(name="mfgPartNo")
	private String mfgPartNo;
	
	
	@Column(name="statusUpdatedDate")
	@Temporal(TemporalType.DATE)
	private Date statusUpdatedDate;
	
	@Column(name="status")
	private String status;

	public Long getComponentID() {
		return componentID;
	}

	public void setComponentID(Long componentID) {
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

	public String getSubfleetNo() {
		return subfleetNo;
	}

	public void setSubfleetNo(String subfleetNo) {
		this.subfleetNo = subfleetNo;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
	
	

/*
	@Override
	public String toString() {
		return "Usage [id=" + usageId + ", cpu=" + cpu + ", memory=" + memory + ", disk=" + disk + ", time=" + createdTime
				+ ", orgName=" + orgName + ", appname=" + appname + ", spaceName=" + spaceName + ", instanceIndex="
				+ instanceIndex + "]";
	}
	@PrePersist	
	public void populateCreatedDate(){
		createdTime =new Date();
	}
}*/