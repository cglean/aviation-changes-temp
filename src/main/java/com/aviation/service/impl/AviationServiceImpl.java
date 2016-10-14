package com.aviation.service.impl;


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
		final List<Component> component = compRepository.getComponent(fromDate, toDate);
		
		return component;
	}
	
	
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public void saveFilter(Filter filter) {
		filterRepository.save(filter);	
	}
	
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public void saveAsDefaultFilter(Filter filter) {
		Filter defaultFilter = getDefaultFilter();
		if(defaultFilter!=null){
			defaultFilter.setDefaultFilter(false);
			filterRepository.save(defaultFilter);
			
		}
		
			filter.setDefaultFilter(true);
			filterRepository.save(filter);	
		
		
	}
	
	
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public List<Filter> getFilters() {
		return filterRepository.getFilters();	
	}
	
	
	@Transactional(isolation=Isolation.READ_COMMITTED, propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
	public Filter getDefaultFilter() {
		return filterRepository.getDefaultFilter();	
	}
	
	
	
}
