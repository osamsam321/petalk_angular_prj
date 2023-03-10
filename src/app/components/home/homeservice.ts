import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import {User} from "./homeInterface"

@Injectable({ providedIn: 'root' })
export class homeservice
{
    constructor(private http: HttpClient){}

    // private petWithIdURLTEST = "http://localhost:8002/petalk/pet/name/";
    private pet2WithIdURLTEST = "http://localhost:8002/petalk/user/getInfo/";

    getPetsWithId(id: number)
    {
        return this.http.get<User>(this.pet2WithIdURLTEST + id.toString());
    }
    
}