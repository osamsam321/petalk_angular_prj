import { NgFor } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactUs} from './ContactUs'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  submitContactInfo(contactUsForm: NgForm)
  {
    let temp_url = "http://localhost:8002/petalk/new/contact_us_message";
    this.http.post<ContactUs>(temp_url, contactUsForm.value).subscribe(

      () => {
        console.log("data sent over");
        contactUsForm.reset();
        alert("your message was succesfully sent over");


        (error: HttpErrorResponse) => {
          alert("there was an error with the request");
        }
      }
    );
  }

}
