package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.WorkoutPlan;

public interface WorkoutPlanDao extends JpaRepository<WorkoutPlan, Integer>{

}
