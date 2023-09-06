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

import com.cdac.pojos.DietPlan;
import com.cdac.pojos.GymMember;
import com.cdac.service.DietPlanService;
import com.cdac.service.GymMemberService;


@RestController
@CrossOrigin
public class DietPlanController {

	@Autowired
	private GymMemberService gymMemberService;
	
	@Autowired
	private DietPlanService dietplanService;
	
	  //get Dietplan by planId
	@GetMapping("/dietplans/{planId}")
		public ResponseEntity<?>findById(@PathVariable("planId") int id) {
			Map<String,Object>map= new HashMap<>();
			DietPlan dietplan = dietplanService.findById(id);
			 map.put("status", "success");
			 map.put("data", dietplan);
			return ResponseEntity.ok(map);
		}
		
		//get all plan
		@GetMapping("/dietplans")
		public ResponseEntity<List<DietPlan>> findAll() {
			List<DietPlan> list = dietplanService.findAll();
			return new ResponseEntity<>(list, HttpStatus.OK);
		}
		
		//save or update plan
		@PostMapping("/dietplans/save")
		public ResponseEntity<DietPlan> save(@RequestBody DietPlan dietplan){
			
			
			DietPlan dp = dietplanService.save(dietplan);
		   return ResponseEntity.ok(dp);
	   }
		
		//update plan
		@PutMapping("/dietplans/update/{planId}")
		public ResponseEntity<DietPlan> update(@PathVariable("planId") int id,@RequestBody DietPlan dp){
		   dp.setplanId(id);
		   DietPlan newDp = dietplanService.update(dp);
		   return ResponseEntity.ok(newDp);
	   }
		
		  //delete plan
		   @DeleteMapping("/dietplans/delete/{planId}")
			public void delete(@PathVariable("planId") int id){
			   dietplanService.deleteById(id);
		   }
	
}
