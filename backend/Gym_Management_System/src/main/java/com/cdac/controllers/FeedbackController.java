package com.cdac.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.pojos.Feedback;
import com.cdac.service.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	
	@GetMapping
	 List<Feedback> getAllFeedbacks() {
		return feedbackService.getAllFeedback();
	}
	
//**********************************************************************************************************************//
	
	@PostMapping
	public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
		return new ResponseEntity<Feedback>(feedbackService.addFeedback(feedback), HttpStatus.CREATED);
		 
	 }
//**********************************************************************************************************************//
	
	@GetMapping("{id}")
	public ResponseEntity<Feedback> getFeedbackById(@PathVariable(value = "id") Integer id){
		return new ResponseEntity<Feedback>(feedbackService.getFeedbackById(id), HttpStatus.OK);
		 
	}

//**********************************************************************************************************************//

	@PutMapping("{id}")
	public ResponseEntity<Feedback> updateFeedback(@PathVariable Integer id,@RequestBody Feedback feedback){
		return new ResponseEntity<Feedback>(feedbackService.updateFeedback(id,feedback), HttpStatus.OK);

	}
	
	
//**********************************************************************************************************************//

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteFeedback(@PathVariable(value = "id") Integer id){
		feedbackService.deleteFeedback(id);
		return new ResponseEntity<String>("feedback deleted", HttpStatus.OK);
	
	}	
}