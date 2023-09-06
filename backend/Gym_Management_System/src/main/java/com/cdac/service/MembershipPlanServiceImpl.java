package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.MembershipPlanDao;
import com.cdac.dao.UserDao;
import com.cdac.pojos.MembershipPlan;
import com.cdac.pojos.User;

@Transactional
@Service
public class MembershipPlanServiceImpl  implements MembershipPlanService{
     
	@Autowired 
	private MembershipPlanDao planDao;
	
	@Override
	public MembershipPlan findById(int subplanId) {
		Optional<MembershipPlan> b = planDao.findById(subplanId);
		return b.orElse(null);
	}
	
	@Override
	public List<MembershipPlan> findAll() {
		return planDao.findAll();
	}
	
	@Override
	public MembershipPlan save(MembershipPlan pl) {
		return planDao.save(pl);
	}
	
	@Override
	public MembershipPlan update(MembershipPlan pl) {
		return planDao.save(pl);
	}

	@Override
	public void deleteById(int subplanId) {
		planDao.deleteById(subplanId);

	}

	
	
}
