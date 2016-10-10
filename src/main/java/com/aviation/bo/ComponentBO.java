package com.aviation.bo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aviation.bo.service.ComponentService;
import com.aviation.service.AviationService;
import com.aviation.vo.ComponentVO;

@Service
public class ComponentBO implements ComponentService{
	
	@Autowired
	private AviationService aviationService;
	
	@Override
	public  List<ComponentVO> getComponent(final String fromDate , final String toDate){
		
		//String string = "2011-03-09T03:02:10.823Z";
		String pattern = "YYYY-MM-DD";
	//	Date date = new SimpleDateFormat(pattern).parse(string);
		
		Date startDate=null;
		Date endDate=null;
		try {
			startDate = new SimpleDateFormat(pattern).parse(fromDate);
			 endDate =  new SimpleDateFormat(pattern).parse(toDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
			return aviationService.getComponent(startDate,endDate);
		
		
	}

}
