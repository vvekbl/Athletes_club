package com.cdac.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.Feedback;

@Transactional
public interface FeedbackDao extends JpaRepository<Feedback, Integer> {

	
}
