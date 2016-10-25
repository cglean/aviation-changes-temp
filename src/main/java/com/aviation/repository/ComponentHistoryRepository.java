package com.aviation.repository;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.aviation.entity.ComponentHistory;

public interface ComponentHistoryRepository extends CrudRepository<ComponentHistory, Serializable>{

	
	@Query("SELECT  history as history FROM ComponentHistory history JOIN history.component as comp where comp.componentID in :componentIdList")
	//@Query("SELECT  history as history FROM ComponentHistory history JOIN history.component as comp where comp.componentID =:componentIdList")
	public List<ComponentHistory> getComponents(@Param("componentIdList")final List<Long> componentIdList);	

	
	//@Query("SELECT  history.component  FROM ComponentHistory history where history.component.componentID in :componentIdList")
	//@Query("SELECT  comp as comp FROM Component comp where comp.componentID in :componentIdList")
	//@Query("SELECT  comp as comp FROM Component comp where comp.statusUpdatedDate between :fromDate and :toDate")
	
	//and  history.fromDate between :fromDate and :toDate"
	//public List<ComponentHistory> getRemovedComponents(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status );
	
	//@Query("SELECT  distinct(comp.ataSystemNo) as history FROM ComponentHistory  history JOIN history.component comp where history.status= :status and  history.fromDate between :fromDate and :toDate")
	
	
	@Query("SELECT  distinct(comp.ataSystemNo) as history FROM ComponentHistory  history JOIN history.component comp where history.status= :status and  history.fromDate between :fromDate and :toDate")
	public List<ComponentHistory> getRemovedComponents(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status );
}
