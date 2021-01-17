package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Customer;
import com.project.repository.CustomerRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@GetMapping("/customers")
	private List<Customer> getCustomerList(){
		return customerRepository.findAll();		
	}
	
	
//	@PostMapping("/customers")
//	public Customer createCustomer(@RequestBody Customer customer) {
//		return customerRepository.save(customer);
//	}
//	
	@PostMapping("/customers")
	public Customer createCustomer1(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}
	
}
