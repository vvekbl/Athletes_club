package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.DietPlanDao;
import com.cdac.pojos.DietPlan;


@Transactional
@Service
public class DietPlanServiceImpl implements DietPlanService  {

	@Autowired 
	private DietPlanDao  dietplanDao;
	
	@Override
	public DietPlan findById(int planId) {
		Optional<DietPlan> b = dietplanDao.findById(planId);
		return b.orElse(null);
	}

	@Override
	public List<DietPlan> findAll() {
		return dietplanDao.findAll();
	}

	@Override
	public DietPlan save(DietPlan dp) {
		return dietplanDao.save(dp);
		
	}

	@Override
	public DietPlan update(DietPlan dp) {
		return dietplanDao.save(dp);
	}

	@Override
	public void deleteById(int planId) {
		dietplanDao.deleteById(planId);

	}
	
}	

