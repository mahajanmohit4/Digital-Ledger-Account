import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact: Contact = new Contact();

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe( data =>{
      console.log(data);
      alert("Your request is submitted ");
      this.router.navigate(['']);
    });
  }

  onSubmit(){
    
    console.log(this.contact);
    this.saveContact();
    
  }
}
