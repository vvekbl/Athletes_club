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

import com.cdac.pojos.WorkoutExercise;
import com.cdac.service.WorkoutExerciseService;

@RestController
@CrossOrigin
public class WorkoutExerciseController {

	@Autowired(required = true)
	private WorkoutExerciseService workoutExcerciseService;

//**********************************************************************************************************************
	// get all exercise
	@GetMapping("/exercises")
	public ResponseEntity<List<WorkoutExercise>> findAll() {

		List<WorkoutExercise> list = workoutExcerciseService.findAll();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

//***********************************************************************************************************************

	// get Workout_Exercise by Id
	@GetMapping("/exercise/{workout_exercise_id}")
	public ResponseEntity<?> findById(@PathVariable("workout_exercise_id") int act_id) {
		Map<String, Object> map = new HashMap<>();
		WorkoutExercise workout_exercise = workoutExcerciseService.findById(act_id);
		map.put("status", "success");
		map.put("data", workout_exercise);
		return ResponseEntity.ok(map);
	}

//***********************************************************************************************************************
	// save or update Workout_Exercise
	@PostMapping("/exercise/save")
	public ResponseEntity<WorkoutExercise> save(@RequestBody WorkoutExercise workout_exercise) {
		WorkoutExercise act = workoutExcerciseService.save(workout_exercise);
		return ResponseEntity.ok(act);
	}

//***********************************************************************************************************************		

	// update Workout_Exercise
	@PutMapping("/exercise/update/{exc_id}")
	public ResponseEntity<WorkoutExercise> update(@PathVariable("exc_id") int workout_exercise_id, @RequestBody WorkoutExercise exc) {
		exc.setWorkout_exercise_id(workout_exercise_id);
		WorkoutExercise newExc = workoutExcerciseService.update(exc);
		return ResponseEntity.ok(newExc);
	}

//***********************************************************************************************************************		

	// delete Workout_Exercise
	@DeleteMapping("/exercise/delete/{exc_id}")
	public void delete(@PathVariable("exc_id") int workout_exercise_id) {
		workoutExcerciseService.deleteById(workout_exercise_id);
	}

	
}
