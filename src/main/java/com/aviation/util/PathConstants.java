package com.aviation.util;

/**
 * 
 * @author ambansal
 *
 */
public class PathConstants {

	private PathConstants() {
		super();
	}

	public static final String LOAD_COMPONENT_BY_START_END_DATE = "/loadComponent/{startDate}/{endDate}";
	
	public static final String DATEFORMAT = "YYYY-MM-DD";
	
	public static final String SAVEFILTER = "/saveFilter";
	
	public static final String SAVE_DEFUALT_FILTER = "/saveAsDefaultFilter";
	
	public static final String GET_FILTERS = "/getFilters";
	
	public static final String GET_DEFAULT_FILTER = "/getDefaultFilter";
}
