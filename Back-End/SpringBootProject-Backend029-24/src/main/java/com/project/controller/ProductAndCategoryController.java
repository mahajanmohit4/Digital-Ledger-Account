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
import com.project.model.Category;
import com.project.model.Product;
import com.project.repository.CategoryRepository;
import com.project.repository.ProductRepository;




@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class ProductAndCategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ProductRepository productRepository;
	 
	@GetMapping("/categorys")
	public List<Category> getAllCategory(){
		return categoryRepository.findAll();
	}
	
	@PostMapping("/categorys")
	public Category createCategory(@RequestBody Category category) {
		return categoryRepository.save(category);
	}
	
	@PutMapping("/categorys/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category categoryDetails){
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category is not exist with id : "+id));
			
		category.setCategoryName(categoryDetails.getCategoryName());
		category.setId(categoryDetails.getId());
		
		Category updateCategory = categoryRepository.save(category);
		return ResponseEntity.ok(updateCategory);
	}
	
	@DeleteMapping("/categorys/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Integer id){
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category is not exist with id : "+id));
			
		categoryRepository.delete(category);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/categorys/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Integer id) {
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category is not exist with id : "+id));
			
		return ResponseEntity.ok(category);
	}
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	@PostMapping("/products")
	public Product createProducts(@RequestBody Product product) {
		return productRepository.save(product);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable Integer id, @RequestBody Product productDetails){
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product is not exist with id : "+id));
			
		product.setProductName(productDetails.getProductName());
		product.setProductDescription(productDetails.getProductDescription());
		product.setProductQuantity(productDetails.getProductQuantity());
		product.setProductCostPrice(productDetails.getProductCostPrice());
		product.setProductSellingPrice(productDetails.getProductSellingPrice());
		product.setCategoryId(productDetails.getCategoryId());
		
		
		Product updateProduct = productRepository.save(product);
		return ResponseEntity.ok(updateProduct);
	}
	
	@PutMapping("/products1/{id}")
	public ResponseEntity<Product> updateProduct1(@PathVariable Integer id, @RequestBody Product productDetails){
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product is not exist with id : "+id));
			
//		product.setProductName(productDetails.getProductName());
//		product.setProductDescription(productDetails.getProductDescription());
		product.setProductQuantity(productDetails.getProductQuantity());
//		product.setProductCostPrice(productDetails.getProductCostPrice());
//		product.setProductSellingPrice(productDetails.getProductSellingPrice());
//		product.setCategoryId(productDetails.getCategoryId());
		
		
		Product updateProduct = productRepository.save(product);
		return ResponseEntity.ok(updateProduct);
	}
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Integer id){
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product is not exist with id : "+id));
			
		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("product not exist with id :" + id));
		return ResponseEntity.ok(product);
	}
}
