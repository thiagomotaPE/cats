import { Injectable } from "@angular/core";
import { Cat } from "./cat";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CatsService {
    constructor( private http: HttpClient) {}

    
    cats: Cat[] = [];

    getAllCats() {
        return this.http.get<Cat[]>(`${environment.api}/cats`);   
    }

    saveNewCat(newCat: Cat) {
        this.cats.push(newCat);
    }

    deleteCat(name:String) {
        const catIndex = this.cats.findIndex((value) => value.cat_name == name);
        this.cats.splice(catIndex, 1);
    }
}