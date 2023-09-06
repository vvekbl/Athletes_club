package com.cdac.service;

import java.util.List;

import com.cdac.pojos.DietPlan;

public interface DietPlanService {

	DietPlan findById(int planId);
    List<DietPlan>findAll();
    DietPlan save(DietPlan dp);
    DietPlan  update(DietPlan dp);
    void deleteById(int planId);
}
