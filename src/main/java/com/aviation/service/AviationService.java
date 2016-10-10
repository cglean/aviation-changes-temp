package com.aviation.service;


import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

import com.aviation.entity.Component;
import com.aviation.vo.ComponentVO;


public interface AviationService {

	public  List<Component> getComponent(final Date fromDate , final Date toDate);
}
