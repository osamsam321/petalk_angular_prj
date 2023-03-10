import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from './homeInterface';
import { homeservice } from './homeservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user_data: User | undefined;

  constructor(private home_service: homeservice) { }

  ngOnInit(): void {
   
  }
  public getPets()
  {
    let should_petalk_event_display = true;
    //tmp
    let url = "http://localhost/petalk/pet/name/{id}";
    this.home_service.getPetsWithId(1)
    
    .pipe(
      catchError((error) => this.handleError(error)) 
    )
    
    .subscribe(
        (userData: User) => {
           this.user_data= userData;

          console.log("home response details " + userData.first_name+ " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
        },
        
  
        
      )
           
         
    }

    handleError(error: any) {
      // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
      // if (myParagraphRef) {
      //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
      // }
      console.log('inside of hangle error');
  
          return throwError(error);
    }
   
  
  }


