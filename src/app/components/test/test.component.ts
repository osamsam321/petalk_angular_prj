import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestInterface } from './TestInterface';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // url = "http://localhost:8002/petalk/saveUser";
  host = 'deeshub1';
  url = "http://" + this.host + ":8002/petalk/saveUser";
  url2 = "http://" + this.host + ":8002/petalk/savePet/";

  @ViewChild('testdiv', {static : true}) nav_route_selection_el: ElementRef<HTMLDivElement>;

  
  constructor(private http: HttpClient, private renderer: Renderer2, nav_route_selection_el: ElementRef<HTMLDivElement>  ) { 
    // this.nav_route_selection_el = {} as ElementRef;
     this.nav_route_selection_el = nav_route_selection_el;

  }

  ngOnInit(): void {

  }
  ngAfterViewInit()
  {


  }
  sentPetAnimalNotifcation()
  {
    let body = new FormData;
    let fullBodyData = {
     

  "id": 10,
  "pet_name": "Fluffy",
  "pet_weight": 5.5,
  "weight_uom_abbr": "kg",
  "pet_height": 20.0,
  "pet_width": 15.0,
  "pet_length": 30.0,
  "lwh_uom_abbr": "cm",
  "species": "Cat"
 
  
}
  console.log("body: " + body);

  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'http://localhost:4200/test'

  });

 
  this.http.post<TestInterface>(this.url2 + "1", fullBodyData,  { headers: headers}).subscribe(
    () => {
        console.log("send test animal notification data");
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    } 
  );;

}
  
sendTestUserNotification(){

    let body = new FormData();
    let fullBodyData = {

      "first_name": "tim",
      "last_name": "Smith",
      "email": "Js@example.com",
      "username": "js123",
      "roles": [{
              "role_type":"user"},
               {"role_type":"admin"
              
      }],
      "locations": [
      {
              "address": "5000 south grove",
              "address2": "",
              "apartment_room_value": "",
              "country": "United States",
              "home_type": "House",
               "petalkDeviceTrigger":"",
               "state": "Nevada",
               "zip_code": 99999,
               "users": []
      }
      
      ],
      "petalkDevices": [
      {
          "device_name": "generic_petalk_device",
          "purchased_ts": "",
          "first_used_ts": "",
          "sku_value": "5asg134",
          "upc_value": "999999999999923",
          "users":[],
          "pets": [],
          "petalkDeviceTriggers":[
            {
  
              "trigger_ts": "2023-02-19T12:34:56",
              "device_name": "Animal_Wants_Water",
              "petalkTriggerLocation": {
                "location_name": "5050 test grove"
              }

            

            }

          ]
      }
      ],
      "petsOwnedByUsers": [
        {
          "pet_name": "Max",
          "pet_weight": 20.5,
          "weight_uom_abbr": "lb",
          "pet_height": 20.2,
          "pet_width": 20.1,
          "pet_length": 20.3,
          "lwh_uom_abbr": "in",
          "species": "yellow lab",
           
      }
      ],
      "purchaseAudit": []
      }
    body.append("email", "Js@example.com");
    // body.append("username", "js123");
    // body.append("first_name", "john");
    // body.append("last_name", "smith");
    console.log("body: " + body);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200/test'
    
    });

    this.http.post<TestInterface>(this.url, fullBodyData, { headers: headers}).subscribe(
      () => {
          console.log("send test animal notification data");
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
      } 
  );;
     
  }


}