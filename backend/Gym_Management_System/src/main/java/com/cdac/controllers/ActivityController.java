
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

import com.cdac.pojos.Activity;
import com.cdac.service.ActivityService;




@CrossOrigin
@RestController
public class ActivityController {

	@Autowired
	private ActivityService activityService;

//**********************************************************************************************************************
	// get all activities
	@GetMapping("/activities")
	public ResponseEntity<List<Activity>> findAll() {

		List<Activity> list = activityService.findAll();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

//***********************************************************************************************************************

	// get activity by Id
	@GetMapping("/activities/{activity_id}")
	public ResponseEntity<?> findById(@PathVariable("activity_id") int act_id) {
		Map<String, Object> map = new HashMap<>();
		Activity activity = activityService.findById(act_id);
		map.put("status", "success");
		map.put("data", activity);
		return ResponseEntity.ok(map);
	}

//***********************************************************************************************************************
	// save or update activity
	@PostMapping("/activities/save")
	public ResponseEntity<Activity> save(@RequestBody Activity activity) {
		Activity act = activityService.save(activity);
		return ResponseEntity.ok(act);
	}

//***********************************************************************************************************************		

	// update Activity
	@PutMapping("/activities/update/{act_id}")
	public ResponseEntity<Activity> update(@PathVariable("act_id") int activity_id, @RequestBody Activity act) {
		act.setActivity_id(activity_id);
		Activity newAct = activityService.update(act);
		return ResponseEntity.ok(newAct);
	}

//***********************************************************************************************************************		

	// delete Activity
	@DeleteMapping("/activities/delete/{act_id}")
	public void delete(@PathVariable("act_id") int activity_id) {
		activityService.deleteById(activity_id);
	}

}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

