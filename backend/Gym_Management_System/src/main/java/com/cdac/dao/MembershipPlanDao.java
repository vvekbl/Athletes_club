package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.MembershipPlan;

public interface MembershipPlanDao extends JpaRepository<MembershipPlan, Integer>{

}
