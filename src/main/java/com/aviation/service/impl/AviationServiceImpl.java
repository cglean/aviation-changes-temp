package com.aviation.service.impl;

import static com.aviation.util.PathConstants.SUBGROUPORDER;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.aviation.entity.Component;
import com.aviation.entity.ComponentHistory;
import com.aviation.entity.Filter;
import com.aviation.repository.ComponentHistoryRepository;
import com.aviation.repository.ComponentRepository;
import com.aviation.repository.FilterRepository;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentHistoryGroupVO;
import com.aviation.vo.ComponentReport;
import com.aviation.vo.HisotryComponenItemVO;

import static com.aviation.util.PathConstants.DATEFORMAT;

@Service
public class AviationServiceImpl implements AviationService {

	@Autowired
	private ComponentRepository compRepository;

	@Autowired
	private FilterRepository filterRepository;

	@Autowired
	private ComponentHistoryRepository compHisRepository;

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public void persistFillter(Filter filter) {
		filterRepository.save(filter);
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public List<Component> getComponent(Date fromDate, Date toDate) {

		final List<Component> component = compRepository.getComponent(fromDate, toDate);
		return component;
	}

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public void saveFilter(Filter filter) {
		filterRepository.save(filter);
	}

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public void saveAsDefaultFilter(Filter filter) {
		Filter defaultFilter = getDefaultFilter();
		if (defaultFilter != null) {
			defaultFilter.setDefaultFilter(false);
			filterRepository.save(defaultFilter);

		}

		filter.setDefaultFilter(true);
		filterRepository.save(filter);

	}

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public List<Filter> getFilters() {
		return filterRepository.getFilters();
	}

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public Filter getDefaultFilter() {
		return filterRepository.getDefaultFilter();
	}

	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public Filter loadRecentSavedFilter() {

		Long maxVal = filterRepository.loadRecentSavedFilter();
		return null;
	}

	public List<ComponentHistory> getRemovedComponents(Date fromDate, Date toDate) {
		String status = "Removed";
		String ataValAsNull = "null";
		List<Object> compHis = compHisRepository.getRemovedComponents(fromDate, toDate, status, ataValAsNull);
		return null;
	}

	public ComponentReport getComponents(List<Long> componentIds) {
		
		 List<ComponentHistory> componentHisList = compHisRepository.getComponents(componentIds);
		
		 List<HisotryComponenItemVO> itemList = new ArrayList<HisotryComponenItemVO>();
		 Map<String, List<String>> serialNumberMap = new HashMap<String, List<String>> ();
		 
		 ComponentReport componentList = new ComponentReport();
		 Set<ComponentHistoryGroupVO> groupSet = new HashSet<ComponentHistoryGroupVO>();
		 int count=0;
		 SimpleDateFormat  outputFormatter = new SimpleDateFormat(DATEFORMAT);
		 String startDate = null;
		 String endDate = null;
		 boolean flag= true;
		 for(ComponentHistory componentHistory : componentHisList){
			 ComponentHistoryGroupVO group = new ComponentHistoryGroupVO();
			 HisotryComponenItemVO item = new HisotryComponenItemVO();
			
			 group.setId(componentHistory.getComponent().getComponentID().toString());
			 group.setContent(componentHistory.getComponent().getCmpySerialNo());
			 flag= groupSet.add(group);
			
			 
			 
			 item.setId(String.valueOf(count++));
			 item.setContent("");
			 startDate = outputFormatter.format(componentHistory.getFromDate());
			 if(componentHistory.getTodate()!=null){
				 endDate = outputFormatter.format(componentHistory.getTodate()) ;
			 }else{
				 endDate = outputFormatter.format(new Date());
			 }
			 if(!flag){
				 item.setClassName("negative");
				// item.setType("background");
			 }
			 
			 item.setStart(startDate);
			 item.setEnd(endDate);
			 item.setGroup(componentHistory.getComponent().getComponentID().toString());
			 itemList.add(item);
			 
		 }
		 
		 List<ComponentHistoryGroupVO> groupList = new ArrayList<ComponentHistoryGroupVO>(groupSet);
		 componentList.setGroupList(groupList);
		 componentList.setItemList(itemList);
		 return componentList;
		 
		
		
		
	}

}
