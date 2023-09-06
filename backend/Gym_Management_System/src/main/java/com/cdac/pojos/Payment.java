package com.cdac.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Payment {

	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int paymentId;
	private String description;
	
	@ManyToOne
	@JoinColumn(name="memberId")
	private GymMember member;

	
	
	public Payment() {
		super();
	}

	
	
	public Payment(int paymentId, String description, GymMember member) {
		super();
		this.paymentId = paymentId;
		this.description = description;
		this.member = member;
	}



	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public GymMember getMember() {
		return member;
	}

	public void setMember(GymMember member) {
		this.member = member;
	}



	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", description=" + description + ", member=" + member + "]";
	}
	
	
	
}
