package com.project.controller;

import java.util.List;
import java.util.Base64;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllUser()
	{
		return userRepository.findAll();
	}
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
//		String encrypString = getEncodedString(user.getPassword());
//		user.setPassword(encrypString);
//		System.out.println(user.getPassword());
//		String encrypString = getEncodedString(user.getPassword());
//		user.setPassword(encrypString);
//		System.out.println(user.getPassword());
		return userRepository.save(user);
	}
	
	


	private static String getEncodedString(String pswd) {
		
		return Base64.getEncoder().encodeToString(pswd.getBytes());
	}
	
}
