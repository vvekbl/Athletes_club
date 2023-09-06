package com.cdac.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.pojos.Login;
import com.cdac.pojos.ResetPassword;
import com.cdac.pojos.User;
import com.cdac.pojos.UserDTO;
import com.cdac.service.UserService;

@CrossOrigin
@RestController

public class LoginController {

	@Autowired
	UserService userService;

	@PostMapping("/login")
	public UserDTO login(@RequestBody Login login) {
		
		System.out.println(login.getEmail() + " " + login.getPassword());
		User user = userService.authenticate(login.getEmail(), login.getPassword());
		UserDTO userDTO = UserDTO.usertoDTO(user);
		
		return userDTO;
		
	}

//***************************************************************************************************************************

	@PostMapping("/forgetPassword")
	public User forgetPassword(@RequestBody ResetPassword resetPassword){
		
		
		User user = userService.findByEmail(resetPassword.getCheckEmail());
		System.out.println(user);
		System.out.println(resetPassword);
		
		if(user!=null) {
			
			if(user.getContact().equals(resetPassword.getContact())){
				
				System.out.println("after contact check");
				user.setPassword(resetPassword.getNewPassword());
				
				return userService.update(user);
			}
			
			
		}
		return null;
	}
}
