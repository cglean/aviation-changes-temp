package com.aviation.repository;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;


import com.aviation.entity.ComponentHistory;

public interface ComponentHistoryRepository extends CrudRepository<ComponentHistory, Serializable>{

}
