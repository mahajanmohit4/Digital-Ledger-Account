package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "cart_id")
	private int cartId;
	@Column(name = "product_id")
	private int productId;
	private int itemsQuantity;
	private String cartDate;
	private double discount;
	private int id;
	private double totalAmount;

	public Cart() {
		super();
	}
	public Cart(int cartId, int productId, int itemsQuantity, String cartDate, double discount, int id,
			double totalAmount) {
		super();
		this.cartId = cartId;
		this.productId = productId;
		this.itemsQuantity = itemsQuantity;
		this.cartDate = cartDate;
		this.discount = discount;
		this.id = id;
		this.totalAmount = totalAmount;
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getItemsQuantity() {
		return itemsQuantity;
	}
	public void setItemsQuantity(int itemsQuantity) {
		this.itemsQuantity = itemsQuantity;
	}
	public String getCartDate() {
		return cartDate;
	}
	public void setCartDate(String cartDate) {
		this.cartDate = cartDate;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	
	
}
