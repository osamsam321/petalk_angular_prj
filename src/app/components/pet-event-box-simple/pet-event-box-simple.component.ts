import { AfterViewInit, Component, ElementRef, Inject, Injectable, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Pet, PetalkDevice, PetalkDeviceTrigger, User} from './PetEventBoxSimpleInterface'
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
export class PetEventBoxSimpleComponent implements OnInit, AfterViewInit{
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  http: any;
  @Input() petalk_user!: User;
  pet_names = [''];
   public petEventAuditList: PetEventAudit[] = [];
  public user_data: User | undefined;
  public petalk_triggers: PetalkDeviceTrigger[] | undefined;
  @ViewChild('animalName', {static : true}) pet_name_el: ElementRef<HTMLHeadingElement>;
  renderer2: Renderer2;
  @ViewChild('petalk_board_nothing') petalk_board_nothing_el!: ElementRef;
  @ViewChild('ngb_carousel_wrap') ngb_carousel_wrap_el!: ElementRef;

  // carousel!: ElementRef;

  // @ViewChild('pRef', {static: false}) pRef: ElementRef;



  constructor(private PetEventBoxSimpleService:PetEventBoxSimpleService, pet_name: ElementRef<HTMLHeadingElement>, carousel: ElementRef, 
  renderer2: Renderer2) { 
    this.renderer2 = renderer2;
    this.pet_name_el= pet_name;

  }
  
  ngOnChanges(): void{
    this.updatePetEventAuditList();
  }
  ngOnInit(): void {

  }
  ngAfterViewInit()
  {
     this.updatePetalkEventDisplayController(); 
  }
  updatePetalkEventDisplayController()
  {
      if(this.petEventAuditList.length <= 0)
          this.display_petalk_event_empty_board;
      else
          this.display_petalk_event_board();

  }
  handleError(error: any) {
    // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
    // if (myParagraphRef) {
    //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
    // }
    console.log('inside of hangle error');

        return throwError(error);
  }
  
  public updatePetEventAuditList()
  {
      let petalk_devices  = Array.from(this.petalk_user.petalkDevices);

      for(let i = 0; i < petalk_devices.length; i++)
      {
        let tmp_triggers = Array.from(petalk_devices[i].petalkDeviceTriggers);
        for(let j = 0; j < tmp_triggers.length;j++)
        {
          console.log(tmp_triggers[j].pet_name + " " +  tmp_triggers[j].triggerType);
          this.petEventAuditList.push(new PetEventAudit(tmp_triggers[j].pet_name,tmp_triggers[j].triggerType));
        }
      }
      this.display_petalk_event_board();
    // console.log("response details " + userData.first_name+ " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
    console.log("userdate from the home obj " + this.petalk_user.first_name+ " " + this.petalk_user.petalkDevices.values + this.petalk_user.petsOwnedByUsers.values);
    }

    
    public display_petalk_event_empty_board()
    {
      this.renderer2.setStyle(this.ngb_carousel_wrap_el.nativeElement, 'display', 'none' );
      this.renderer2.setStyle(this.petalk_board_nothing_el.nativeElement, 'display', 'flex' );
    }
    public display_petalk_event_board()
    {
      this.renderer2.setStyle(this.ngb_carousel_wrap_el.nativeElement, 'display', 'flex' );
      this.renderer2.setStyle(this.petalk_board_nothing_el.nativeElement, 'display', 'none' );
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
