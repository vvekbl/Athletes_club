package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.FeedbackDao;
import com.cdac.pojos.Feedback;

@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	FeedbackDao feedbackDao;
	
	public List<Feedback> getAllFeedback(){
		return feedbackDao.findAll();
		
	}
	
	@Override
	public Feedback addFeedback(Feedback feedback) {
		// TODO Auto-generated method stub
		return feedbackDao.save(feedback);
	}

	@Override
	public Feedback getFeedbackById(Integer id) {
		return feedbackDao.findById(id).orElseThrow(() -> new RuntimeException("Invalid feedback id : updation failed!!"));
	}
	
	@Override
	public Feedback updateFeedback(Integer id, Feedback feedback) {
		Feedback existingFeedback = feedbackDao.findById(id).orElseThrow(() -> new RuntimeException("Invalid feedback id : updation failed!!"));
		existingFeedback.setGymMember(feedback.getGymMember());
		existingFeedback.setTrainer(feedback.getTrainer());
		existingFeedback.setRating(feedback.getRating());
		existingFeedback.setDescription(feedback.getDescription());
		
		return feedbackDao.save(existingFeedback);
	}

	@Override
	public void deleteFeedback(Integer id) {
		feedbackDao.deleteById(id);

	}


}
