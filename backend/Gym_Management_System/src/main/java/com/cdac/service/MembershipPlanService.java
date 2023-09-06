package com.cdac.service;

import java.util.List;

import com.cdac.pojos.MembershipPlan;

public interface MembershipPlanService {

	MembershipPlan findById(int membershipPlanId);
    List<MembershipPlan>findAll();
    MembershipPlan save(MembershipPlan pl);
    MembershipPlan update(MembershipPlan pl);
    void deleteById(int membershipPlanId);
}
