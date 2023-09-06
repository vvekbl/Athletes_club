package com.cdac.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "workout_exercise")
public class WorkoutExercise {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int workout_exercise_id;
	  private String workout_exercise_name;
	  private String description;
	
	  public int getWorkout_exercise_id() {
		return workout_exercise_id;
	}
	public void setWorkout_exercise_id(int workout_exercise_id) {
		this.workout_exercise_id = workout_exercise_id;
	}
	public String getWorkout_exercise_name() {
		return workout_exercise_name;
	}
	public void setWorkout_exercise_name(String workout_exercise_name) {
		this.workout_exercise_name = workout_exercise_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public WorkoutExercise(int workout_exercise_id, String workout_exercise_name, String description) {
		
		this.workout_exercise_id = workout_exercise_id;
		this.workout_exercise_name = workout_exercise_name;
		this.description = description;
	}
	
	public WorkoutExercise() {
		
	}
	
	@Override
	public String toString() {
		return "Workout_Exercise [workout_exercise_id=" + workout_exercise_id + ", workout_exercise_name="
				+ workout_exercise_name + ", description=" + description + "]";
	}
	
}
