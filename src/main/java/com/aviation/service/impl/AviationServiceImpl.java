package com.aviation.service.impl;

import static com.aviation.util.PathConstants.SUBGROUPORDER;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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
import com.aviation.vo.HisotryComponenItemVO;

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

	public List<List> getComponents(List<Long> componentIds) {
		
		 List<ComponentHistory> componentHisList = compHisRepository.getComponents(componentIds);
		 List<ComponentHistoryGroupVO> groupList = new ArrayList<ComponentHistoryGroupVO>();
		 List<HisotryComponenItemVO> itemList = new ArrayList<HisotryComponenItemVO>();
		 Map<String, List<String>> serialNumberMap = new HashMap<String, List<String>> ();
		 
		 List<List> componentList = new ArrayList<List>();
		 
		 int count=0;
		 
		 
		 for(ComponentHistory componentHistory : componentHisList){
			 ComponentHistoryGroupVO group = new ComponentHistoryGroupVO();
			 HisotryComponenItemVO item = new HisotryComponenItemVO();
			 group.setId(componentHistory.getComponent().getComponentID());
			 group.setContent(componentHistory.getComponent().getCmpySerialNo());
			// group.setSubgroupOrder(SUBGROUPORDER);
			 groupList.add(group);
			 
			 
			 item.setId(String.valueOf(count++));
			 item.setContent("");
			 item.setStart(componentHistory.getFromDate().toString());
			 item.setEnd((componentHistory.getTodate()!=null)? componentHistory.getTodate().toString() :( new Date()).toString() );
			 item.setGroup(componentHistory.getComponent().getCmpySerialNo());
			 itemList.add(item);
			/* serialNumberMap.put(componentHistory.getComponent().getCmpySerialNo(), componentHistory.getStatus());
			 serialNumberMap.put(componentHistory.getComponent().getCmpySerialNo(), componentHistory.getStatus());*/
			 
		 }
		 componentList.add(groupList);
		 componentList.add(itemList);
		 return componentList;
		 
		
		
		
	}

}
