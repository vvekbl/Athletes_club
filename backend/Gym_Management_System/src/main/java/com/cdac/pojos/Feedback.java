package com.cdac.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer feedback_id ;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User trainer;
	
	@ManyToOne
	@JoinColumn(name="memberId")
	private GymMember gymMember;
	
	@Column(columnDefinition = "VARCHAR(500)")
	String description;
	
	Integer rating;

	public Feedback(Integer feedback_id, User trainer, GymMember gymMember, String description, Integer rating) {
		super();
		this.feedback_id = feedback_id;
		this.trainer = trainer;
		this.gymMember = gymMember;
		this.description = description;
		this.rating = rating;
	}

	public Integer getFeedback_id() {
		return feedback_id;
	}

	public void setFeedback_id(Integer feedback_id) {
		this.feedback_id = feedback_id;
	}

	public User getTrainer() {
		return trainer;
	}

	public void setTrainer(User trainer) {
		this.trainer = trainer;
	}

	public GymMember getGymMember() {
		return gymMember;
	}

	public void setGymMember(GymMember gymMember) {
		this.gymMember = gymMember;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Feedback() {
	
	}

}
