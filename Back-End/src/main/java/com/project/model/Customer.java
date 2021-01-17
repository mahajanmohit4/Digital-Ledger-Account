package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="customer_id")
	private int customerId;
	
	@Column(name="customer_name")
	private String customerName;
	
	@Column(name="customer_email")
	private String customerEmail;
	
	@Column(name="customer_phone_no")
	private String customerPhoneNo;
	
	@Column(name="customer_address")
	private String customerAddress;
	
	@Column(name="purchase_date")
	private String purchaseDate;
	
	@Column(name="items_quantity")
	private int itemsQuantity;
	
	@Column(name = "product_id")
	private int productId;
	
	@Column(name="id")
	private int id;
	
	@Column(name="discount")
	private int discount; 

	@Column(name = "payment_status")
	private String paymentStatus;
	
	@Column(name = "reminder_date")
	private String reminderDate;
	

	public String getReminderDate() {
		return reminderDate;
	}



	public void setReminderDate(String reminderDate) {
		this.reminderDate = reminderDate;
	}



	public Customer(int customerId, String customerName, String customerEmail, String customerPhoneNo,
			String customerAddress, String purchaseDate, int itemsQuantity, int productId, int id, int discount,
			String paymentStatus) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhoneNo = customerPhoneNo;
		this.customerAddress = customerAddress;
		this.purchaseDate = purchaseDate;
		this.itemsQuantity = itemsQuantity;
		this.productId = productId;
		this.id = id;
		this.discount = discount;
		this.paymentStatus = paymentStatus;
		
	}



	public int getCustomerId() {
		return customerId;
	}



	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}



	public String getCustomerName() {
		return customerName;
	}



	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}



	public String getCustomerEmail() {
		return customerEmail;
	}



	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}



	public String getCustomerPhoneNo() {
		return customerPhoneNo;
	}



	public void setCustomerPhoneNo(String customerPhoneNo) {
		this.customerPhoneNo = customerPhoneNo;
	}



	public String getCustomerAddress() {
		return customerAddress;
	}



	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}



	public String getPurchaseDate() {
		return purchaseDate;
	}



	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}



	public int getItemsQuantity() {
		return itemsQuantity;
	}



	public void setItemsQuantity(int itemsQuantity) {
		this.itemsQuantity = itemsQuantity;
	}



	public int getProductId() {
		return productId;
	}



	public void setProductId(int productId) {
		this.productId = productId;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getDiscount() {
		return discount;
	}



	public void setDiscount(int discount) {
		this.discount = discount;
	}



	public String getPaymentStatus() {
		return paymentStatus;
	}



	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}



	public Customer() {
		super();
	}
	
	
	
	
}
