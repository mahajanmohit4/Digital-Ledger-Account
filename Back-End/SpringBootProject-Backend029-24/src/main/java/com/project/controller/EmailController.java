package com.project.controller;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Customer;
import com.project.model.User;
import com.project.repository.UserPasswordRepository;
import com.project.service.UserPasswordService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class EmailController {

	@Autowired
	private UserPasswordService userPasswordService;
	
	
	
	 
	 	@PostMapping("/email")
		public String mailUser(@RequestBody User user) {
	 		String email = user.getEmail();	
			
//	 		String password1 =  userPasswordService.userPassword(email);
//	 		System.out.println(password1);
	 		String password = user.getPassword();
	 		System.out.println("preparing to send message");
			String message="Your Password is : " + password;
			String subject="Confirmation of mail";
			String to= user.getEmail();
			String from="dp3111148@gmail.com";
			
			
			
			sendEmail(message,subject,to,from);
	 		
			return user.getEmail()+" Password is : "+ password;
			
		}
	 	
	 	@PostMapping("/customeremail")
		public String mailCustomer(@RequestBody Customer customer) {
	 		

	 		//String message = "Name: Mohit Mahajan \n Address: Shahpur \nBill Amount: 1000 ";
	 		String msg = "Name: "+customer.getCustomerName()+""
	 				+ "\nEmail: "+customer.getCustomerEmail()+""
	 				+ "\nAddress: "+customer.getCustomerAddress()+""
	 				+ "\nPayment Status: "+customer.getPaymentStatus()+""
	 				+ "\nDate: "+customer.getPurchaseDate()+""
	 				+ "\nTotal Amount: "+customer.getTotalPrice();
	 				
	 		String subject="Invoice";
			String to= customer.getCustomerEmail();
			String from="dp3111148@gmail.com";
			
			
			
			sendEmail(msg,subject,to,from);
	 		return msg;
	 	}
	 	
	 	@PostMapping("/reminderemail")
		public String reminderMail(@RequestBody Customer customer) {
	 		

	 		
	 		String msg = " Your payment is not done "+""
	 				+ "\nName: "+customer.getCustomerName()+""
	 				+ "\nPayment Status: "+customer.getPaymentStatus()+""
	 				+ "\nDate: "+customer.getPurchaseDate()+""
	 				+ "\nTotal Amount: "+customer.getTotalPrice();
	 				
	 		String subject="Reminder for payment";
			String to= customer.getCustomerEmail();
			String from="dp3111148@gmail.com";
			
			
			
			sendEmail(msg,subject,to,from);
	 		return msg;
	 	}
	 	
	 
	 private static void sendEmail(String message, String subject, String to, String from) {
			
			String host="smtp.gmail.com";
			
			Properties properties= System.getProperties();
			
			System.out.println("PROPERTIES "+properties);
			properties.put("mail.smtp.host", host);
			properties.put("mail.smtp.port", "465");
			properties.put("mail.smtp.ssl.enable","true");
			properties.put("mail.smtp.auth","true");
			
			//step 1
			Session session = Session.getInstance(properties,new Authenticator() {

				@Override
				protected PasswordAuthentication getPasswordAuthentication() {
					
					return new PasswordAuthentication("dp3111148@gmail.com","*deepak#");
				}
				
			});
			
			session.setDebug(true);
		//step 2
			
			MimeMessage m= new MimeMessage(session);
			try {
				//from mail
				m.setFrom(from);
				
				//adding recipent to mail
				m.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
				
				//adding subject to message
				m.setSubject(subject);
				
				//send
				m.setText(message);
				
				Transport.send(m);
				
				System.out.println("sent success...");
				
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	 
}
