package com.aviation.repository;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.aviation.entity.ComponentHistory;

public interface ComponentHistoryRepository extends CrudRepository<ComponentHistory, Serializable>{

	
	@Query("SELECT  history as history FROM ComponentHistory history JOIN history.component as comp where comp.componentID in :componentIdList ORDER BY history.fromDate ASC ")
	//@Query("SELECT  history as history FROM ComponentHistory history JOIN history.component as comp where comp.componentID =:componentIdList")
	public List<ComponentHistory> getComponents(@Param("componentIdList")final List<Long> componentIdList);	
	
	
	
	//@Query("SELECT  history.component  FROM ComponentHistory history where history.component.componentID in :componentIdList")
	//@Query("SELECT  comp as comp FROM Component comp where comp.componentID in :componentIdList")
	//@Query("SELECT  comp as comp FROM Component comp where comp.statusUpdatedDate between :fromDate and :toDate")
	
	//and  history.fromDate between :fromDate and :toDate"
	//public List<ComponentHistory> getRemovedComponents(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status );
	
	//@Query("SELECT  distinct(comp.ataSystemNo) as history FROM ComponentHistory  history JOIN history.component comp where history.status= :status and  history.fromDate between :fromDate and :toDate")
	
	//select distinct(comp.ata_system_no), count(*) from component_history history join component comp  on history.componentid=comp.componentid and  history.status='Removed' and history.from_date between "2014-10-08" and "2016-10-08" group by comp.ata_system_no;
	
	   @Query("SELECT  distinct(comp.ataSystemNo) as ATANumber, count(comp.ataSystemNo) as count_val FROM ComponentHistory  history JOIN history.component comp where   history.status= :status and  comp.ataSystemNo <> :ataValAsNull  and  history.fromDate between :fromDate and :toDate GROUP BY comp.ataSystemNo ORDER BY count_val DESC")
       public List<Object> getRemovedComponents(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status, @Param("ataValAsNull")final String ataValAsNull );
       
       
       
       @Query("SELECT  distinct(comp.companyPartNo) as CPNNumber, count(comp.companyPartNo) as count_val FROM ComponentHistory  history JOIN history.component comp where   history.status= :status and  comp.companyPartNo <> :cpnValAsNull  and  history.fromDate between :fromDate and :toDate GROUP BY comp.companyPartNo ORDER BY count_val DESC")
       public List<Object> getRemovedComponentsCPN(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status, @Param("cpnValAsNull")final String cpnValAsNull );
       
       @Query("SELECT  distinct(comp.cmpySerialNo) as CPNSerialNumber, count(comp.cmpySerialNo) as count_val FROM ComponentHistory  history JOIN history.component comp where   history.status= :status and  comp.cmpySerialNo <> :cpnSerialValAsNull  and  history.fromDate between :fromDate and :toDate GROUP BY comp.cmpySerialNo ORDER BY count_val DESC ")
       public List<Object> getRemovedComponentsCPNSerial(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status, @Param("cpnSerialValAsNull")final String cpnSerialValAsNull );
       
       @Query("SELECT  distinct(comp.tailNo) as TailNumber, count(comp.tailNo) as count_val FROM ComponentHistory  history JOIN history.component comp where   history.status= :status and  comp.tailNo <> :tailValAsNull  and  history.fromDate between :fromDate and :toDate GROUP BY comp.tailNo ORDER BY count_val DESC")
       public List<Object> getRemovedComponentsTail(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate, @Param("status")final String status, @Param("tailValAsNull")final String tailValAsNull );
      
}
