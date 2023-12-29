import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor( private http: HttpClient) {}

    saveNewUser(newUser: User) {
        return this.http.post<User>(`${environment.api}/users`, {
            name: newUser.user_name,
            email: newUser.user_email,
            password: newUser.user_password
        });
    }
}