package com.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.exception.ResourceNotFoundException;
import com.project.model.Cart;
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
	
	
	@PostMapping("/customers")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}

	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getEmployeeById(@PathVariable Integer id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer is not exist with id : "+id));
		
		
		return ResponseEntity.ok(customer);
	}
	
	
	
	@PutMapping("/customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id, @RequestBody Customer customerDetails){
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer is not exist with id : "+id));
		
		customer.setPaymentStatus(customerDetails.getPaymentStatus());
		

		Customer customerUpdate = customerRepository.save(customer);
		return ResponseEntity.ok(customerUpdate);
	}
	
//	@PostMapping("/customers")
//	public Customer createCustomer1(@RequestBody Customer customer) {
//		return customerRepository.save(customer);
//	}
	
}
