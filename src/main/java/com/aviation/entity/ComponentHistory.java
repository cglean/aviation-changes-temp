package com.aviation.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="component_history")
public class ComponentHistory {
	
	@Id
	@Column(name="historyid")
	private Long historyID;
	
	@ManyToOne
	//@Column(name="componentid")
	@JoinColumn(name="componentid")
	private Component component;
	
	@Column(name="from_date")
	private Date  fromDate;
	
	@Column(name="to_date")
	private Date  to_date;
	
	@Column(name="status")
	private String  status;

	@Column(name="maint_stn")
	private String maint_stn;
	
	@Column(name="dept")
	private String dept;
	
	@Column(name="status_reason")
	private String status_reason;
	
	@Column(name="discrepency_no")
	private String discrepency_no;
	
	@Column(name="position_component_removal")
	private String positionComponentRemoval;

	public Long getHistoryID() {
		return historyID;
	}

	public void setHistoryID(Long historyID) {
		this.historyID = historyID;
	}

	public Component getComponent() {
		return component;
	}

	public void setComponent(Component component) {
		this.component = component;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Date getTo_date() {
		return to_date;
	}

	public void setTo_date(Date to_date) {
		this.to_date = to_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMaint_stn() {
		return maint_stn;
	}

	public void setMaint_stn(String maint_stn) {
		this.maint_stn = maint_stn;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getStatus_reason() {
		return status_reason;
	}

	public void setStatus_reason(String status_reason) {
		this.status_reason = status_reason;
	}

	public String getDiscrepency_no() {
		return discrepency_no;
	}

	public void setDiscrepency_no(String discrepency_no) {
		this.discrepency_no = discrepency_no;
	}

	public String getPositionComponentRemoval() {
		return positionComponentRemoval;
	}

	public void setPositionComponentRemoval(String positionComponentRemoval) {
		this.positionComponentRemoval = positionComponentRemoval;
	}



		
}
