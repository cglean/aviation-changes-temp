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
import com.aviation.repository.LoginRepository;
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
	@Autowired
	private LoginRepository loginRepository;

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



	public ComponentReport getComponents(List<Long> componentIds) {
		
		 List<ComponentHistory> componentHisList = compHisRepository.getComponents(componentIds);
		
		 List<HisotryComponenItemVO> itemList = new ArrayList<HisotryComponenItemVO>();
		 Map<String, List<String>> serialNumberMap = new HashMap<String, List<String>> ();
		 
		 ComponentReport componentList = new ComponentReport();
		 Set<ComponentHistoryGroupVO> groupSet = new HashSet<ComponentHistoryGroupVO>();
		 ////system.out.println("length of report"+componentHisList.size());
		 int count=0;
		 SimpleDateFormat  outputFormatter = new SimpleDateFormat(DATEFORMAT);
		 String startDate = null;
		 String endDate = null;
		 String popup = null;
		 //boolean flag= true;
		
		 for(ComponentHistory componentHistory : componentHisList){
			 ComponentHistoryGroupVO group = new ComponentHistoryGroupVO();
			 HisotryComponenItemVO item = new HisotryComponenItemVO();
			////system.out.println(componentHistory.getStatus() + " "+componentHistory.getComponent().getComponentID());
			 
			 group.setId(componentHistory.getComponent().getComponentID().toString());
			 group.setContent(componentHistory.getComponent().getCmpySerialNo());
//			 group.setTitle("I will show details");
			 groupSet.add(group);
			
			 
			 
			 item.setId(String.valueOf(count++));
			 item.setContent("");
			 startDate = outputFormatter.format(componentHistory.getFromDate());
			 if(componentHistory.getTodate()!=null){
				 endDate = outputFormatter.format(componentHistory.getTodate()) ;
			 }else{
				 endDate = outputFormatter.format(new Date());
			 }
			 if(componentHistory.getStatus().toString().equalsIgnoreCase("Removed")){
				 item.setClassName("negative");
				// item.setType("background");
				 item.setType("range");
				 popup = "Classification : "+componentHistory.getComponent().getClassification().toString();
				 popup = popup +"<br/>Description : "+ componentHistory.getComponent().getDescription().toString();
				 popup = popup +"<br/>Tail No : "+ componentHistory.getComponent().getTailNo().toString();
//				 popup = popup +"<br/>HI_DTE : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HI_STA : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HI_DEPT : "+ componentHistory.getComponent().getDescription().toString();
				 popup = popup +"<br/>Removal Date : "+ componentHistory.getFromDate().toString();
				 popup = popup +"<br/>Removal Station : "+ componentHistory.getMaint_stn().toString();
				 popup = popup +"<br/>Removal Department : "+ componentHistory.getDept().toString();
				 String removalreason = null;
				 if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("01")){
					 removalreason = "SCHEDULED REMOVAL / INSTALLATION";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("02")){
					 removalreason = "PREMATURE REMOVAL / INSTALLATION";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("03")){
					 removalreason = "PART REMOVED FOR CONVENIENCE";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("04")){
					 removalreason = "CANNED PART TO INST ON ANOTHER A/C";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("05")){
					 removalreason = "INSTALLATION ONLY   ** NO PART REMOVED **";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("06")){
					 removalreason = "REMOVAL ONLY    ** NO PART INSTALLED **";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("07")){
					 removalreason = "SWAP COMPONENT POSITIONS";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("08")){
					 removalreason = "REPLACEMENT OF CANNIBALIZED PART";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("09")){
					 removalreason = "EO, AD, FCD, INSP \"P\" PREFACED CPNS ONLY";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("10")){
					 removalreason = "SUB-ASSY REMOVED WITH ASSY";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("12")){
					 removalreason = "FOUND AT LINE / HANGAR";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("13")){
					 removalreason = "FAILED OPS CK & REPLACED WITH SERVICEABLE";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("14")){
					 removalreason = "FAILED OPS CK & ORIGINAL UNIT REINSTALLED";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("17")){
					 removalreason = "MISCELLANEOUS";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("18")){
					 removalreason = "SUB COMP REMOVED FROM AN UNINST MAJOR ASSY";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("23")){
					 removalreason = "INSTALL BORROWED PART AND REMOVED FEDEX PART";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("24")){
					 removalreason = "REMOVE BORROWED PART AND INSTALL FEDEX PART";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("25")){
					 removalreason = "BORROWED PART   ** INSTALLATION ONLY **";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("26")){
					 removalreason = "BORROWED PART   ** REMOVAL ONLY **";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("27")){
					 removalreason = "INSTALL ONLY FOR LOG CORRECTION";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("28")){
					 removalreason = "REMOVAL ONLY FOR LOG CORRECTION";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("29")){
					 removalreason = "CANNIBALIZED SUB-ASSY FOR ANOTHER A/C OR ASSY";
				 }else if(componentHistory.getStatus_reason().toString().equalsIgnoreCase("70")){
					 removalreason = "DAMAGED DURING INSTALLATION";
				 }else{
					 removalreason = "NO REASON";
				 }
				 popup = popup +"<br/>Removal Reason : "+ removalreason;
//				 popup = popup +"<br/>HS_STA : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_DEPT : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_REPAIR_TYPE : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_REPAIR_ODR_NBR : "+ componentHistory.getComponent().getDescription().toString();
				 
				 item.setContent("<div style=\"height: 15px;\"><img class='triangleImage' title=\""+popup+"\" src=\"img/triangle.png\" style=\"width: 15px; height: 15px;\"></div>");
//				 item.setContent("<div style=\"height: 15px;\"><img title=\"<span style='color:blue'>That's what this widget is<br/> test</span>\" src=\"img/triangle.png\" style=\"width: 15px; height: 15px;\"></div>");
//				 item.setTitle("this is test title");
			 }else if(componentHistory.getStatus().toString().equalsIgnoreCase("Installed Unit")){
				 item.setClassName("positive");
				 //item.setType("background");
				 popup = "Classification : "+componentHistory.getComponent().getClassification().toString();
				 popup = popup +"<br/>Description : "+ componentHistory.getComponent().getDescription().toString();
				 popup = popup +"<br/>Sub Fleet No : "+ componentHistory.getComponent().getSubfleetNo().toString();
				 if(componentHistory.getComponent().getMfgPartNo() != null){
				 popup = popup +"<br/>Manufacturing Part No : "+ componentHistory.getComponent().getMfgPartNo().toString();
				 }
				 popup = popup +"<br/>Tail No : "+ componentHistory.getComponent().getTailNo().toString();
				 popup = popup +"<br/>Installation Date : "+ componentHistory.getFromDate().toString();
				 popup = popup +"<br/>Installation Station : "+ componentHistory.getMaint_stn().toString();
				 popup = popup +"<br/>Installation Department : "+ componentHistory.getDept().toString();
//				 popup = popup +"<br/>HR_DTE : "+ componentHistory.getFromDate().toString();
//				 popup = popup +"<br/>HR_STA : "+ componentHistory.getMaint_stn().toString();
//				 popup = popup +"<br/>HR_DEPT : "+ componentHistory.getDept().toString();
//				 popup = popup +"<br/>HR_REASON : "+ componentHistory.getStatus_reason().toString();
//				 popup = popup +"<br/>HS_STA : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_DEPT : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_REPAIR_TYPE : "+ componentHistory.getComponent().getDescription().toString();
//				 popup = popup +"<br/>HS_REPAIR_ODR_NBR : "+ componentHistory.getComponent().getDescription().toString();
				 item.setTitle(popup);;
			 }
			 
			 item.setStart(startDate);
			 item.setEnd(endDate);
			 item.setGroup(componentHistory.getComponent().getComponentID().toString());
			 if(!componentHistory.getStatus().toString().contains("Repair")){
				 itemList.add(item);
			 }
		 }
		 
		 List<ComponentHistoryGroupVO> groupList = new ArrayList<ComponentHistoryGroupVO>(groupSet);
		 componentList.setGroupList(groupList);
		 componentList.setItemList(itemList);
		 return componentList;
		 
		
		
		
	}
	
	
	public List<Object> getRemovedComponents(Date fromDate, Date toDate){
		String status = "Removed";
		String ataValAsNull ="null";
		
		List<Object>  compHis = compHisRepository.getRemovedComponents(fromDate, toDate,status,ataValAsNull);
		
		List<Object>  compHisATA = new ArrayList<Object>();
		int i=0;
		for(Object temp:compHis){
			if(i == 10){
				break;
			}
			compHisATA.add(temp);
			i++;
	
		}
		//system.out.println("From date"+fromDate+"to date "+toDate);
		
		
		return compHisATA;
	}
	
	
	
	

	public List<Object> getRemovedComponentsMFG(Date fromDate, Date toDate){
		String status = "Removed";
		String mfgValAsNull ="null";
			
		List<Object>  compHis = compHisRepository.getRemovedComponentsMFG(fromDate, toDate,status,mfgValAsNull);
		
		List<Object>  compHisCPN = new ArrayList<Object>();
		int i=0;
		for(Object temp:compHis){
			if(i == 10){
				break;
			}
			compHisCPN.add(temp);
			i++;
	
		}
		//system.out.println("value"+compHisCPN.size());
		
		
		
		
		
		return compHisCPN;
	}

	

	
	public List<Object> getRemovedComponentsCPNSerial(Date fromDate, Date toDate){
		String status = "Removed";
		String cpnSerialValAsNull ="null";
			
		List<Object>  compHis = compHisRepository.getRemovedComponentsCPNSerial(fromDate, toDate,status,cpnSerialValAsNull);
		List<Object>  compHisCPNSerial = new ArrayList<Object>();
		int i=0;
		for(Object temp:compHis){
			if(i == 10){
				break;
			}
			

			compHisCPNSerial.add(temp);
			i++;
	
		}
		//system.out.println("value"+compHisCPNSerial.size());
		return compHisCPNSerial;
	}
	
	
	
	
	public List<Object> getRemovedComponentsTailNoOfRemoval(Date fromDate, Date toDate){
		String status = "Removed";
		String tailRemovalValAsNull ="null";
			
		List<Object>  compHis = compHisRepository.getRemovedComponentstailRemoval(fromDate, toDate,status,tailRemovalValAsNull);
		List<Object>  compHisCPNSerial = new ArrayList<Object>();
		int i=0;
		for(Object temp:compHis){
			if(i == 10){
				break;
			}
			

			compHisCPNSerial.add(temp);
			i++;
	
		}
		//system.out.println("value"+compHisCPNSerial.size());
		return compHisCPNSerial;
	}
	
	
	public List<Object> getRemovedComponentsTail(Date fromDate, Date toDate){
		String status = "Installed Unit";
		String tailValAsNull ="null";
			
		//system.out.println("From Date "+fromDate+" To Date"+toDate);
		
		List<Object>  compHis = compHisRepository.getRemovedComponentsTail(fromDate, toDate,status,tailValAsNull);
		
		//system.out.println("in service"+compHis);
		for(int i=0;i<compHis.size();i++){
			//system.out.println("single object"+compHis.getClass());
			
			
		}
/*		for(ComponentHistory emp:compHis){
			//system.out.println("single object"+emp);
		}
	*/
		List<Object>  compHisTail = new ArrayList<Object>();
		int i=0;
		for(Object temp:compHis){
			if(i == 10){
				break;
			}
			compHisTail.add(temp);
			
			
			//system.out.println("in service"+temp);
			i++;
	
		}
		//system.out.println("value"+compHisTail.size());
		
		
		return compHisTail;
	}
	public boolean isValidLogin(final String userName, String password){
		
		//system.out.println("username "+userName+" password "+password);
		int  loginCount = loginRepository.getLoginVerified(userName, password);
		//system.out.println("login resulty"+loginCount);
		if(loginCount == 1){
			return true;	
		}
		return false;	
	}
	
	public int updateFilter(Filter filter) {
		filterRepository.updateFilter(filter.getFromDate(),filter.getToDate(),filter.getSelectedFleets(),filter.getSelectedSubfleets(),
				filter.getSelectedTails(),filter.getSelectedCPNs(),filter.getSelectedMFGs(),filter.getSelectedATAs(), filter.getFilterName());
   //system.out.println("Update Filter "+filter.getFilterID());
		
		return filterRepository.updateFilterBy(filter.getFilterBy().isInstalledUnit(),filter.getFilterBy().isNewUnit(),filter.getFilterBy().isRemovedUnit(),filter.getFilterID());

		
	}

}
