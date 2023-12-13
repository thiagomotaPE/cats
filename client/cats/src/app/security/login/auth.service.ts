import { Injectable } from '@angular/core';
import { User } from '../../users/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuth: boolean = false;
  constructor(private http: HttpClient , private router: Router) {}

  authorizeUser(user: User) {
    //return this.http.post<User>(`${environment.api}/api/auth/login`, user);
    if(user.user_email == 'thiago@gmail.com' && user.user_password == '1234') {
      this.userAuth = true;
      this.router.navigate(['/menu']);
    } else if(user.user_email == 'damazio@gmail.com' && user.user_password == '1234') {
      this.userAuth = true;
      this.router.navigate(['/menu']);
    } else {
      this.userAuth = false;
      window.alert('Usuario não cadastrado');
    }
  }
}
