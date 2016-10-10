package com.aviation.bo.service;


import java.util.List;

import com.aviation.entity.Component;
import com.aviation.vo.ComponentVO;

public interface ComponentService {

	public  List<Component> getComponent(final String fromDate , final String toDate);
}
