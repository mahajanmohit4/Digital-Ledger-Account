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
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "category_id")
	private int categoryId;
	
	@Column(name = "category_name")
	private String categoryName;
	
	@Column(name = "id")
	private int id;

	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn( name = "category_id", referencedColumnName = "category_id")
	List<Product> products = new ArrayList<>();
	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn( name = "category_id", referencedColumnName = "category_id")
//	List<Cart> Carts = new ArrayList<>();
//	 
//	
//	public List<Cart> getCarts() {
//		return Carts;
//	}
//
//	public void setCarts(List<Cart> carts) {
//		Carts = carts;
//	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Category(int categoryId, String categoryName, int id) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.id = id;
	}

	public Category() {
		super();
	}
	
}
