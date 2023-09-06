package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.WorkoutExercise;

public interface WorkoutExerciseDao extends JpaRepository<WorkoutExercise, Integer> {

}
