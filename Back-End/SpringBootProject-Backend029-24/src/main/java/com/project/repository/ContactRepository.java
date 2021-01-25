package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer>  {

}
