package com.aviation.repository;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.aviation.entity.Component;
import com.aviation.vo.ComponentVO;



public interface ComponentRepository extends CrudRepository<Component, Serializable>{

	@Query("SELECT  comp FROM Component comp where comp.statusUpdatedDate between :fromDate and :toDate")
	public List<ComponentVO> getComponent(@Param("fromDate")final Date fromDate, @Param("toDate")final Date toDate);
	
}
