package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.GymMember;

public interface GymMemberDao extends JpaRepository<GymMember, Integer>{

}
