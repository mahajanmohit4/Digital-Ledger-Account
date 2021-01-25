package com.project.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String username;
    private String password;
    private String email;
    private String phoneNo;
    private String address;
    private String shopName;
    private String rol;

    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn( name = "id", referencedColumnName = "id")
	List<Category> Categorys = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn( name = "id", referencedColumnName = "id")
	List<Cart> Carts = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL)
   	@JoinColumn( name = "id", referencedColumnName = "id")
   	List<Customer> cutomers = new ArrayList<>();

    
    public List<Cart> getCarts() {
		return Carts;
	}


	public void setCarts(List<Cart> carts) {
		Carts = carts;
	}


	public List<Customer> getCutomers() {
		return cutomers;
	}


	public void setCutomers(List<Customer> cutomers) {
		this.cutomers = cutomers;
	}


	public User() {
    }
 

	public List<Category> getCategorys() {
		return Categorys;
	}


	public void setCategorys(List<Category> categorys) {
		Categorys = categorys;
	}


	public User(int id, String username, String password, String email, String phoneNo, String address, String shopName,
			String rol) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phoneNo = phoneNo;
		this.address = address;
		this.shopName = shopName;
		this.rol = rol;
	}






	public String getRol() {
		return rol;
	}






	public void setRol(String rol) {
		this.rol = rol;
	}






	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPhoneNo() {
		return phoneNo;
	}



	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getShopName() {
		return shopName;
	}



	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

   
}
