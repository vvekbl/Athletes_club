package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.WorkoutExerciseDao;
import com.cdac.pojos.WorkoutExercise;

@Service
@Transactional
public class WorkoutExerciseServiceImpl implements WorkoutExerciseService {

	@Autowired
	WorkoutExerciseDao workout_exercise_dao;
	
	@Override
	public List<WorkoutExercise> findAll() {
		
		return workout_exercise_dao.findAll();
		}

	@Override
	public WorkoutExercise findById(int exc_id) {
		Optional<WorkoutExercise> e = workout_exercise_dao.findById(exc_id);
		return e.orElse(null);
	}

	@Override
	public WorkoutExercise update(WorkoutExercise exc) {
		
		return workout_exercise_dao.save(exc);
	}

	@Override
	public void deleteById(int workout_exercise_id) {
		System.out.println("Exercise Deleted");
		workout_exercise_dao.deleteById(workout_exercise_id);
	}

	@Override
	public WorkoutExercise save(WorkoutExercise workout_exercise) {
		return workout_exercise_dao.save(workout_exercise);
	}

}
