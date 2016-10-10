package com.aviation.service.impl;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.aviation.entity.Component;
import com.aviation.entity.Filter;
import com.aviation.repository.ComponentHistoryRepository;
import com.aviation.repository.ComponentRepository;
import com.aviation.repository.FilterRepository;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentVO;


@Service
public class AviationServiceImpl implements AviationService{

	@Autowired
	private ComponentRepository compRepository;
	
	@Autowired
	private ComponentHistoryRepository compHisRepository;
	
	@Autowired
	private FilterRepository filterRepository;
	
	
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public void persistFillter(Filter filter) {
		filterRepository.save(filter);	
	}


	@Override
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public List<Component> getComponent(Date fromDate, Date toDate) {
		// TODO Auto-generated method stub
		final List<Component> component = compRepository.getComponent(fromDate, toDate);
		
		return component;
	}

	
}
