package com.cdac.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="dietplan")
public class DietPlan {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int planId;
	 
	 private String planname;
	 private String breakfast;
	 private String lunch;
	 private String preworkout;
	 private String dinner;
	 
	
	 
	 public DietPlan(){
		
	}

	

	



	public DietPlan(int planId, String planname, String breakfast, String lunch, String preworkout, String dinner) {
		super();
		this.planId = planId;
		this.planname = planname;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.preworkout = preworkout;
		this.dinner = dinner;
	}







	public int getplanId() {
		return planId;
	}

	public void setplanId(int planId) {
		this.planId = planId;
	}

	public String getPlanname() {
		return planname;
	}

	public void setPlanname(String planname) {
		this.planname = planname;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getPreworkout() {
		return preworkout;
	}

	public void setPreworkout(String preworkout) {
		this.preworkout = preworkout;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}







	@Override
	public String toString() {
		return "DietPlan [planId=" + planId + ", planname=" + planname + ", breakfast=" + breakfast + ", lunch=" + lunch
				+ ", preworkout=" + preworkout + ", dinner=" + dinner + "]";
	}

	


	
	
	
	 	
	
	 
}
