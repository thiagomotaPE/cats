import { Injectable } from '@angular/core';
import { User } from '../../users/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Jwt } from './jwt';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtToken!: string | null;
  constructor(private http: HttpClient) {}

  authorizeUser(user: User): Observable<Jwt> {
    return this.http.post<Jwt>(`${environment.api}/api/auth/login`, {
      name: user.user_name,
      email: user.user_email,
      password: user.user_password
    }).pipe(tap((jwt: Jwt) => {
      this.setToken(jwt.token);
    }));
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }
  
  private setToken(token: string): void {
    this.jwtToken = token;
    localStorage.setItem('jwtToken', token);
  }

  private getToken(): string | null {
    if (!this.jwtToken) {
      this.jwtToken = localStorage.getItem('jwtToken');
    }
    return this.jwtToken;
  }
}
