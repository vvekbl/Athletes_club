package com.cdac.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Activity {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private int activity_id;
	  private String activity_name;
	  private String description;
	  
	  
	public Activity(int activity_id, String activity_name, String description) {
		this.activity_id = activity_id;
		this.activity_name = activity_name;
		this.description = description;
	}


	public int getActivity_id() {
		return activity_id;
	}


	public void setActivity_id(int activity_id) {
		this.activity_id = activity_id;
	}


	public String getActivity_name() {
		return activity_name;
	}


	public void setActivity_name(String activity_name) {
		this.activity_name = activity_name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Activity() {
		
	}
	
	
	  
	  
	  
}