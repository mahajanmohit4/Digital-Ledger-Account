package com.project.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "product_id")
	private int productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "product_description")
	private String productDescription;
	
	@Column(name = "product_quantity")
	private int productQuantity;
	
	@Column(name = "product_cost_price")
	private double productCostPrice;
	
	@Column(name = "product_selling_price")
	private double productSellingPrice;
	
	@Column(name = "category_id")
	private int categoryId;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn( name = "product_id", referencedColumnName = "product_id")
	List<Cart> carts = new ArrayList<>(); 
	
//	@ManyToMany(cascade = CascadeType.ALL)
//	@JoinColumn( name = "product_id", referencedColumnName = "product_id")
//	List<Customer> customers = new ArrayList<>(); 
	

//	public List<Customer> getCustomers() {
//		return customers;
//	}
//
//	public void setCustomers(List<Customer> customers) {
//		this.customers = customers;
//	} 

	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}

	public Product(int productId, String productName, String productDescription, int productQuantity,
			double productCostPrice, double productSellingPrice, int categoryId) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.productCostPrice = productCostPrice;
		this.productSellingPrice = productSellingPrice;
		this.categoryId = categoryId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public double getProductCostPrice() {
		return productCostPrice;
	}

	public void setProductCostPrice(double productCostPrice) {
		this.productCostPrice = productCostPrice;
	}

	public double getProductSellingPrice() {
		return productSellingPrice;
	}

	public void setProductSellingPrice(double productSellingPrice) {
		this.productSellingPrice = productSellingPrice;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public Product() {
		super();
	}
	
	
}
