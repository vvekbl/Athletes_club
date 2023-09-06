package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.WorkoutPlanDao;

import com.cdac.pojos.WorkoutPlan;


@Transactional
@Service
public class WorkoutPlanServiceImpl implements WorkoutPlanService{

	@Autowired 
	private WorkoutPlanDao  workoutplanDao;
	
	@Override
	public WorkoutPlan findById(int workoutid) {
		Optional<WorkoutPlan> b = workoutplanDao.findById(workoutid);
		return b.orElse(null);
	}
	
	@Override
	public List<WorkoutPlan> findAll() {
		return workoutplanDao.findAll();
	}
	
	@Override
	public WorkoutPlan save(WorkoutPlan wp) {
		return workoutplanDao.save(wp);
	}
 

	@Override
	public WorkoutPlan update(WorkoutPlan wp) {
		return workoutplanDao.save(wp);
	}

	@Override
	public void deleteById(int workoutid) {
		workoutplanDao.deleteById(workoutid);

	}
		
}
