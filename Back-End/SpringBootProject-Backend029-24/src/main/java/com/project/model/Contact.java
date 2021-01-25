package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Contact {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="contact_id")
	private int contactId;
	
	@Column(name="contact_name")
	private String contactName;
	
	@Column(name="contact_email")
	private String contactEmail;
	
	@Column(name="contact_subject")
	private String contactSubject;
	
	@Column(name="contact_massage")
	private String contactMassage;

	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactEmail() {
		return contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getContactSubject() {
		return contactSubject;
	}

	public void setContactSubject(String contactSubject) {
		this.contactSubject = contactSubject;
	}

	public String getContactMassage() {
		return contactMassage;
	}

	public void setContactMassage(String contactMassage) {
		this.contactMassage = contactMassage;
	}

	public Contact(int contactId, String contactName, String contactEmail, String contactSubject,
			String contactMassage) {
		super();
		this.contactId = contactId;
		this.contactName = contactName;
		this.contactEmail = contactEmail;
		this.contactSubject = contactSubject;
		this.contactMassage = contactMassage;
	}

	public Contact() {
		super();
	}
	
	
	
	
}
