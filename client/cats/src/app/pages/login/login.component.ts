import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../security/login/auth.service';
import { User } from '../../users/user';
import { FormsModule } from '@angular/forms';
import { Jwt } from '../../security/login/jwt';
import { AuthInterceptor } from '../../security/auth-interceptor.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    id: '',
    user_name: '',
    user_email: '',
    user_password: '',
  }

  constructor(private authService: AuthService, private router: Router, private authInterceptor: AuthInterceptor) {
  }

  login() {
    return this.authService.authorizeUser(this.user).subscribe(
      (data: Jwt) => {
        console.log(data);
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error(error);
        window.alert('Usuario não cadastrado!')
      }
    );
  }
}
