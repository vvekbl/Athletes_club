package com.cdac.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.cdac.pojos.GymMember;
import com.cdac.pojos.WorkoutPlan;
import com.cdac.service.GymMemberService;
import com.cdac.service.WorkoutPlanService;

@RestController
@CrossOrigin
public class WorkoutPlanController {

	@Autowired
	private GymMemberService gymMemberService;
	
	@Autowired
	private WorkoutPlanService workoutplanService;
	
	        //get Workoutplan by workoutId
			@GetMapping("/workouts/{workoutid}")
			public ResponseEntity<?>findById(@PathVariable("workoutid") int id) {
				Map<String,Object>map= new HashMap<>();
				WorkoutPlan workoutplan = workoutplanService.findById(id);
				 map.put("status", "success");
				 map.put("data", workoutplan);
				return ResponseEntity.ok(map);
			}
			
			//get all workouts
			@GetMapping("/workouts")
			public ResponseEntity<List<WorkoutPlan>> findAll() {
				List<WorkoutPlan> list = workoutplanService.findAll();
				return new ResponseEntity<>(list, HttpStatus.OK);
			}
		
			
			//save or update workouts
			@PostMapping("/workouts/save")
			public ResponseEntity<WorkoutPlan> save(@RequestBody WorkoutPlan workoutplan){
				
				WorkoutPlan dp = workoutplanService.save(workoutplan);
			   return ResponseEntity.ok(dp);
		   }
			
			
			//update workout
			@PutMapping("/workouts/update/{workoutid}")
			public ResponseEntity<WorkoutPlan> update(@PathVariable("workoutid") int id,@RequestBody WorkoutPlan dp){
			   dp.setWorkoutid(id);
			   WorkoutPlan newDp = workoutplanService.update(dp);
			   return ResponseEntity.ok(newDp);
		   }
			
			  //delete workout
			   @DeleteMapping("/workouts/delete/{workoutid}")
				public void delete(@PathVariable("workoutid") int id){
				   workoutplanService.deleteById(id);
			   }
			
			
			
}
