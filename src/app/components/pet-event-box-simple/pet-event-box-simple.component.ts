import { Component, ElementRef, Inject, Injectable, OnInit, Renderer2, ViewChild } from '@angular/core';
import {PetalkDeviceTrigger, User} from './PetEventBoxSimpleInterface'
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {PetEventBoxSimpleService} from "./PetEventBoxSimpleService"
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import { NgIf } from '@angular/common';
import { each } from 'chart.js/dist/helpers/helpers.core';
import { catchError, throwError } from 'rxjs';



@Component({
  selector: 'app-pet-event-box-simple',
  templateUrl: './pet-event-box-simple.component.html',
  styleUrls: ['./pet-event-box-simple.component.css', './swiper-bundle.min.css']
})
export class PetEventBoxSimpleComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  http: any;
  pet_names = [''];
   public petEventAuditList: PetEventAudit[] = [];
  public user_data: User | undefined;
  public petalk_triggers: PetalkDeviceTrigger[] | undefined;
  test = 'hello'
  @ViewChild('animalName', {static : true}) pet_name_el: ElementRef<HTMLHeadingElement>;
  renderer2: Renderer2;
  @ViewChild('petalk_board_nothing', {static : false}) petalk_board_nothing: ElementRef;
  @ViewChild('carousel', {static : false}) carousel: ElementRef;
  // @ViewChild('pRef', {static: false}) pRef: ElementRef;



  constructor(private PetEventBoxSimpleService:PetEventBoxSimpleService, pet_name: ElementRef<HTMLHeadingElement>, 
    petalk_board_nothing: ElementRef<HTMLDivElement>, carousel: ElementRef<HTMLDivElement>,renderer2: Renderer2) { 
    this.renderer2 = renderer2;
    this.pet_name_el= pet_name;
    this.petalk_board_nothing = petalk_board_nothing;
    this.carousel = carousel;

  }
  ngOnChanges(): void{
  }
  ngOnInit(): void {
     console.log('Hello ', this.carousel.nativeElement.innerHTML); 
    
     this.getPet();
  }
  
  ngAfterViewInit()
  {
    // this.getPet();
  }
  handleError(error: any) {
    // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
    // if (myParagraphRef) {
    //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
    // }
    console.log('inside of hangle error');

        return throwError(error);
  }
  
  public getPet()
  {
    console.log('start ', this.carousel.nativeElement.innerHTML); 
    
    let should_petalk_event_display = true;
    let url = "http://localhost/petalk/pet/name/{id}";
    
    this.PetEventBoxSimpleService.getPetWithId(1)

    
    .pipe(
      catchError((error) => this.handleError(error)) 
    )
    
    .subscribe(
        (userData: User) => {
           this.user_data= userData;
           console.log("userdata info {}", userData.email);
           let petalk_devices = Array.from(this.user_data.petalkDevices);
           console.log("test" + Array.from(petalk_devices[0].device_name));

              for(let i = 0; i < petalk_devices.length; i++)
              {
                let tmp_triggers = Array.from(petalk_devices[i].petalkDeviceTriggers);
                for(let j = 0; j < tmp_triggers.length;j++)
                {
                  console.log(tmp_triggers[j].pet_name + " " +  tmp_triggers[j].triggerType);
                  this.petEventAuditList.push(new PetEventAudit(tmp_triggers[j].pet_name,tmp_triggers[j].triggerType));
                }
              }
              this.renderer2.setStyle(this.carousel.nativeElement, 'display', 'block' );
              this.renderer2.setStyle(this.petalk_board_nothing.nativeElement, 'display', 'none' );
          console.log("response details " + userData.first_name+ " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
          // this.renderer2.appendChild(this.pet_name_el.nativeElement, this.renderer2.createText(pet_name_str));
        },
        
        
        // (error: HttpErrorResponse) => {
        //   console.log("url has a issue");
        //   should_petalk_event_display = false;
        //   display_petalk_event_empty_board();
        // }

        
      )
      // this.renderer2.setStyle(this.petalk_board_nothing.nativeElement, 'display', 'none' );
      // this.renderer2.setStyle(this.petalk_board.nativeElement, 'display', 'block' );
      // this.renderer2.setStyle(this.petalk_board.nativeElement, 'display', 'none' );
      // this.renderer2.setStyle(this.petalk_board_nothing.nativeElement, 'display', 'block' );
      console.log("done");
  
     
         
    }
    
    public display_petalk_event_empty_board()
    {
      this.renderer2.setStyle(this.carousel.nativeElement, 'display', 'none' );
      this.renderer2.setStyle(this.petalk_board_nothing.nativeElement, 'display', 'block' );
    }
    public display_petalk_event_board()
    {
      this.renderer2.setStyle(this.carousel.nativeElement, 'display', 'block' );
      this.renderer2.setStyle(this.petalk_board_nothing.nativeElement, 'display', 'none' );
    }

}


export class PetEventAudit
{
    pet_name!: string;
    event_name:string;
  
  constructor(pet_name: string, event_name: string)
  {
    this.pet_name = pet_name;
    this.event_name = event_name;
  }
}
