package com.aviation.service;

import java.util.Date;
import java.util.List;


import com.aviation.vo.ComponentVO;


public interface AviationService {

	public  List<ComponentVO> getComponent(final Date fromDate , final Date toDate);
}
