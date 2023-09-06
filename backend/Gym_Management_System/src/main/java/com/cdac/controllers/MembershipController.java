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

import com.cdac.pojos.MembershipPlan;
import com.cdac.pojos.User;
import com.cdac.service.MembershipPlanService;


@CrossOrigin
@RestController
public class MembershipController {

	@Autowired
	private MembershipPlanService planService;
	
	   //get plans by Id
		@GetMapping("/MembershipPlans/{membershipPlanId}")
		public ResponseEntity<?>findById(@PathVariable("membershipPlanId") int id) {
			Map<String,Object>map= new HashMap<>();
			MembershipPlan pl = planService.findById(id);
			 map.put("status", "success");
			 map.put("data", pl);
			return ResponseEntity.ok(map);
		}
		
		//get all plans
		@GetMapping("/MembershipPlans")
		public ResponseEntity<List<MembershipPlan>> findAll() {
			List<MembershipPlan> list = planService.findAll();
			return new ResponseEntity<>(list, HttpStatus.OK);
		}
		
	    //save or update plans
		@PostMapping("/MembershipPlans/save")
		public ResponseEntity<MembershipPlan> save(@RequestBody MembershipPlan pl){
			MembershipPlan newPlan = planService.save(pl);
		   return ResponseEntity.ok(newPlan);
	   }
		
	  	//update plans
		@PutMapping("/MembershipPlans/update/{membershipPlanId}")
		public ResponseEntity<MembershipPlan> update(@PathVariable("membershipPlanId") int id,@RequestBody MembershipPlan pl){
		   pl.setMembershipPlanId(id);
		   MembershipPlan newPlan = planService.update(pl);
		   return ResponseEntity.ok(newPlan);
	   }
		
		 //delete plan
		  @DeleteMapping("/MembershipPlans/delete/{membershipPlanId}")
		public void delete(@PathVariable("membershipPlanId") int id){
			  planService.deleteById(id);
		  }
		
		
}
