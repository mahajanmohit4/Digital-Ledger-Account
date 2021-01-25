package com.project.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;



@Repository
public class UserPasswordRepository {

	@PersistenceContext
	private EntityManager entityManager;
	
	public String getPassword(String email) {
		
		Query q = entityManager.createQuery("select user.password from user where user.email = :email");
		q.setParameter("email", email);
		
		String pass = (String) q.getSingleResult();
		return pass;
		
		
//		return(String)
//				
//				entityManager
//				.createQuery("select u.password from user u where u.email = :email")
//				.setParameter("email", email)
//				.getSingleResult();
	}
}
