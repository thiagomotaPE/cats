import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: LayoutComponent},
    
];
