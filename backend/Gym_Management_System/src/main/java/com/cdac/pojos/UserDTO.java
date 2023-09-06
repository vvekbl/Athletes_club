
package com.cdac.pojos;

public class UserDTO {
	
	private int user_id;
	  private String name;
	  private String contact;
	  private String address;
	  private String email;
	  private String role;
	  
	  
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
	public UserDTO() {
		
	}
	
	public UserDTO(int user_id, String name, String contact, String address, String email, String role) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.contact = contact;
		this.address = address;
		this.email = email;
		this.role = role;
		
	}
	@Override
	public String toString() {
		return "UserDTO [user_id=" + user_id + ", name=" + name + ", contact=" + contact + ", address=" + address
				+ ", email=" + email + ", role=" + role + "]";
	}
	
	
	public static UserDTO usertoDTO(User user) {
		UserDTO userDTO = new UserDTO();
		userDTO.address=user.getAddress();
		userDTO.contact=user.getContact();
		userDTO.email=user.getEmail();
		userDTO.name=user.getName();
		userDTO.role=user.getRole();
		userDTO.user_id=user.getUser_id();
		
		return userDTO;
	}
	

}



