package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.repository.UserPasswordRepository;

@Service
@Transactional
public class UserPasswordService {

	@Autowired
	private UserPasswordRepository userPasswordRepostory;
	
	public String userPassword(String email) {
		return userPasswordRepostory.getPassword(email);
	}
}
