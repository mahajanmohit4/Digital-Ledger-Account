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
import com.project.model.Category;
import com.project.model.Product;
import com.project.repository.CartRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class CartController {

	@Autowired
	private CartRepository cartRepository;
	
	@GetMapping("/cart")	
	public List<Cart> getAllCategory(){
		return cartRepository.findAll();
	}	
	
	@PostMapping("/cart")
	public Cart createCart(@RequestBody Cart cart) {
		return cartRepository.save(cart);
	}
	

	
	@DeleteMapping("/cart/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCart(@PathVariable Integer id){
		Cart cart = cartRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cart is not exist with id : "+id));
			
		cartRepository.delete(cart);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/cart/{id}")
	public ResponseEntity<Cart> updateCart(@PathVariable Integer id, @RequestBody Cart cartDetails){
		Cart cart = cartRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cart is not exist with id : "+id));
			
		cart.setItemsQuantity(cartDetails.getItemsQuantity());
		

		Cart updateCart = cartRepository.save(cart);
		return ResponseEntity.ok(updateCart);
	}
	
	@PutMapping("/cartdisount/{id}")
	public ResponseEntity<Cart> updateCart1(@PathVariable Integer id, @RequestBody Cart cartDetails){
		Cart cart = cartRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cart is not exist with id : "+id));
			
		cart.setDiscount(cartDetails.getDiscount());

		Cart updateCart = cartRepository.save(cart);
		return ResponseEntity.ok(updateCart);
	}
}


