import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AddCatComponent } from './pages/add-cat/add-cat.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'addcat', component: AddCatComponent},
    
];
