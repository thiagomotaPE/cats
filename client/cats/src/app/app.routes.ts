import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login'}
];
