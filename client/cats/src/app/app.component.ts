import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor, Interceptor } from './security/auth-interceptor.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterOutlet, RouterModule, Interceptor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
})
export class AppComponent {
}
