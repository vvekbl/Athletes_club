package com.cdac.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.Activity;
import com.cdac.pojos.User;

public interface ActivityDao extends JpaRepository<Activity, Integer>{

	

}
