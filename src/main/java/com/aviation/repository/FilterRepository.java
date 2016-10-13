package com.aviation.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import com.aviation.entity.Filter;

public interface FilterRepository extends CrudRepository<Filter, Serializable>{
	
	@Query("SELECT  filter as filter FROM Filter filter")
	public List<Filter> getFilters();

}
