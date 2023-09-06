package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.DietPlan;

public interface DietPlanDao extends JpaRepository<DietPlan, Integer>{

}
