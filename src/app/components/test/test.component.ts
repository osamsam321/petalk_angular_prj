import { Component, OnInit } from '@angular/core';
import { TestInterface } from './TestInterface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // url = "http://localhost:8002/petalk/saveUser";
  url = "http://Odi-Room-Desktop:8002/petalk/saveUser";

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
 
  }

  sendTestAnimalNotification(){
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
          "petalkDeviceTrigger":[]
      }
      ],
      "petsOwnedByUsers": [],
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
