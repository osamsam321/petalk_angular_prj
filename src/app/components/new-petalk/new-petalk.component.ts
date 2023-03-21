import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../pet-event-box-simple/PetEventBoxSimpleInterface';

@Component({
  selector: 'app-new-petalk',
  templateUrl: './new-petalk.component.html',
  styleUrls: ['./new-petalk.component.css']
})
export class NewPetalkComponent implements OnInit {
@ViewChild('tstButton', {static: true}) tst_btn_el: ElementRef<HTMLInputElement>;
  constructor(Render: Renderer2, tst_btn_el: ElementRef<HTMLInputElement>, private http: HttpClient) { 

    this.tst_btn_el = tst_btn_el;
  }

  ngOnInit(): void {
  }

   tstBtnClick()
  {
    // this.http
  }

  submitNewPetalkPet(newPetForm: NgForm)
  {

      let temp_url = "http://localhost:8002/petalk/new/petalk_pet";
      this.http.post<Pet>(temp_url, newPetForm.value).subscribe(
  
        () => {
          console.log("data sent over");
          newPetForm.reset();
          alert("your message was succesfully sent over");
  
  
          (error: HttpErrorResponse) => {
            alert("there was an error with the request");
          }
        }
      );
    }
  
  }
  


