package com.cdac.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.User;

public interface UserDao extends JpaRepository<User, Integer> {

	List<User> findByEmailAndPassword(String email, String password);

	List<User> findByEmail(String email);
	
	
}
