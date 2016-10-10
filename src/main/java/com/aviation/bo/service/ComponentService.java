package com.aviation.bo.service;


import java.util.List;

import com.aviation.vo.ComponentVO;

public interface ComponentService {

	public  List<ComponentVO> getComponent(final String fromDate , final String toDate);
}
