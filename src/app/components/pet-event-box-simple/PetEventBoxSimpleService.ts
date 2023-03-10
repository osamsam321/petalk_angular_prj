import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import {User} from "./PetEventBoxSimpleInterface"

@Injectable({ providedIn: 'root' })
export class PetEventBoxSimpleService
{
    constructor(private http: HttpClient){}

    // private petWithIdURLTEST = "http://localhost:8002/petalk/pet/name/";
    private pet2WithIdURLTEST = "http://localhost:8002/petalk/user/getInfo/";

    getPetWithId(id: number)
    {
        return this.http.get<User>(this.pet2WithIdURLTEST + id.toString());
    }
    
}