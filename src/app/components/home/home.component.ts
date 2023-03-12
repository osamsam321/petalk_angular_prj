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

  petalk_user!: User;

  // carousel!: ElementRef;

  // @ViewChild('pRef', {static: false}) pRef: ElementRef;



  constructor(private homeService:homeservice)
 { 

  }
  ngOnInit(): void {
    this.getUser();
  }
  
  ngOnChanges(): void{
  }
 
  ngAfterViewInit()
  {
      
  }
  handleError(error: any) {
    // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
    // if (myParagraphRef) {
    //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
    // }
    console.log('inside of hangle error');

        return throwError(error);
  }
  
  public getUser()
  {
    let url = "http://localhost/petalk/pet/name/{id}";
    
    this.homeService.getPetsWithId(1)
 
        .pipe(
          catchError((error) => this.handleError(error)) 
        )
        
        .subscribe(
            (userData: User) => {
              this.petalk_user= userData;
            
              console.log("response details in home " + userData.first_name+ " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
            },
          )    
         
    }
  
}



