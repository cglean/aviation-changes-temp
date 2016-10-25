package com.aviation.service;

import java.util.Date;
import java.util.List;

import com.aviation.entity.Component;
import com.aviation.entity.ComponentHistory;
import com.aviation.entity.Filter;

public interface AviationService {

	public List<Component> getComponent(final Date fromDate, final Date toDate);

	public void saveFilter(Filter filter);

	public void saveAsDefaultFilter(Filter filter);

	public List<Filter> getFilters();

	public Filter getDefaultFilter();

	public Filter loadRecentSavedFilter();
	
	public List<ComponentHistory> getRemovedComponents(Date fromDate, Date toDate);
	
	public List<ComponentHistory> getComponents(List<Long> componentIds);
}
