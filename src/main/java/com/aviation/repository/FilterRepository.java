package com.aviation.repository;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;


import com.aviation.entity.Filter;

public interface FilterRepository extends CrudRepository<Filter, Serializable>{

}
