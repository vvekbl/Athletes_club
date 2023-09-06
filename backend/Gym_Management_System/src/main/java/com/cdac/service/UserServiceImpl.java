package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.UserDao;
import com.cdac.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;
	
	@Override
	public List<User> findAll() {
		List<User> users = userdao.findAll();
		return users;
	}

	@Override
	public User createUser(User user) {
		User newUser = userdao.save(user);
		return newUser;
	}

	@Override
	public User findById(int user_id) {
		Optional<User> user = userdao.findById(user_id);
		return user.orElse(null);
	}

	@Override
	public User authenticate(String email, String password) {
		User user = userdao.findByEmailAndPassword(email,password).get(0);
		return user;
	}


	@Override
	public User findByEmail(String email) {
		User user = userdao.findByEmail(email).get(0);
		return user;
	}


	@Override
	public User update(User user) {
		User newUser = userdao.save(user);
		return newUser;
	}

	@Override
	public String delete(User user) {
		userdao.delete(user);
		return "User deleted";
	}

}
