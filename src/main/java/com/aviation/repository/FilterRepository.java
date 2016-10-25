package com.aviation.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.aviation.entity.Filter;

public interface FilterRepository extends CrudRepository<Filter, Serializable> {

	@Query("SELECT  filter as filter FROM Filter filter where filter.filterID=:filterID")
	public Filter findOne(Long filterID);

	@Query("SELECT  filter as filter FROM Filter filter")
	public List<Filter> getFilters();

	/*
	 * where usage.createdTime between :fromDate and :toDate and usage.orgName=
	 * :orgName")
	 */ @Query("SELECT  filter as filter FROM Filter filter where filter.defaultFilter=1")
	public Filter getDefaultFilter();

	@Query("SELECT   max(filter.filterID) as maxval  FROM Filter filter")
	public Long loadRecentSavedFilter();

}
