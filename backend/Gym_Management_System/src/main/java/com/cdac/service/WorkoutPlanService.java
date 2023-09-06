package com.cdac.service;

import java.util.List;

import com.cdac.pojos.WorkoutPlan;

public interface WorkoutPlanService {

	WorkoutPlan findById(int workoutid);
    List<WorkoutPlan>findAll();
    WorkoutPlan save(WorkoutPlan wp);
    WorkoutPlan  update(WorkoutPlan wp);
    void deleteById(int workoutid );
}
