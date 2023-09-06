package com.cdac.service;

import java.util.List;

import com.cdac.pojos.WorkoutExercise;

public interface WorkoutExerciseService {
	
	List<WorkoutExercise> findAll();

	WorkoutExercise findById(int act_id);

	WorkoutExercise update(WorkoutExercise exc);

	void deleteById(int workout_exercise_id);

	WorkoutExercise save(WorkoutExercise workout_exercise);
}
