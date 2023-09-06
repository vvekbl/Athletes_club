package com.cdac.service;

import java.util.List;

import com.cdac.pojos.Feedback;

public interface FeedbackService {

	List<Feedback> getAllFeedback();

	Feedback addFeedback(Feedback feedback);

	Feedback getFeedbackById(Integer id);

	Feedback updateFeedback(Integer id, Feedback feedback);

	void deleteFeedback(Integer id);

	
}
