package com.aviation.service;

import java.util.Date;
import java.util.List;

import com.aviation.entity.Component;
import com.aviation.entity.ComponentHistory;
import com.aviation.entity.Filter;
import com.aviation.vo.ComponentReport;

public interface AviationService {

	public List<Component> getComponent(final Date fromDate, final Date toDate);

	public void saveFilter(final Filter filter);

	public void saveAsDefaultFilter(final Filter filter);

	public List<Filter> getFilters();

	public Filter getDefaultFilter();

	public Filter loadRecentSavedFilter();
	
	
	
	public List<Object> getRemovedComponents(Date fromDate, Date toDate);
	
	public ComponentReport getComponents(List<Long> componentIds);
	
	public List<Object> getRemovedComponentsCPN(Date fromDate, Date toDate);
	
	public List<Object> getRemovedComponentsCPNSerial(Date fromDate, Date toDate);
	 
	public List<Object> getRemovedComponentsTail(Date fromDate, Date toDate);
	
	public boolean isValidLogin(String userName, String password);
}
