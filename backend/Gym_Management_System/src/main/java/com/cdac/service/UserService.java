package com.cdac.service;

import java.util.List;

import com.cdac.pojos.User;

public interface UserService {

	List<User> findAll();
	User createUser(User user);
	User findById(int user_id);
	User authenticate(String email,String password);
	User findByEmail(String email);
	User update(User user);
	String delete(User user);
}
