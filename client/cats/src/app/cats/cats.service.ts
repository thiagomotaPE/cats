import { Injectable } from "@angular/core";
import { Cat } from "./cat";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CatsService {
    constructor( private http: HttpClient) {}

    getAllCats() {
        return this.http.get<Cat[]>(`${environment.api}/cats`);   
    }

    saveNewCat(newCat: Cat) {
        return this.http.post<Cat>(`${environment.api}/cats`, {
            name: newCat.cat_name,
            age: newCat.cat_age,
            breed: newCat.cat_breed
        });
    }

    deleteCat(id:String) {
        return this.http.delete<Cat[]>(`${environment.api}/cats/${id}`); 
    }
}