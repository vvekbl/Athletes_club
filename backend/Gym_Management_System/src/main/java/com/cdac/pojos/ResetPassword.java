package com.cdac.pojos;

public class ResetPassword {

	String checkEmail;
	String contact;
	String newPassword;
	
	public String getCheckEmail() {
		return checkEmail;
	}
	public void setCheckEmail(String checkEmail) {
		this.checkEmail = checkEmail;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public ResetPassword(String checkEmail, String contact, String newPassword) {
		
		this.checkEmail = checkEmail;
		this.contact = contact;
		this.newPassword = newPassword;
	}
	
	public ResetPassword() {
		
	}
	@Override
	public String toString() {
		return "ResetPassword [checkEmail=" + checkEmail + ", contact=" + contact + ", newPassword=" + newPassword
				+ "]";
	}

	
}
