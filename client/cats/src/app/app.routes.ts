import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AddCatComponent } from './pages/add-cat/add-cat.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'addcat', component: AddCatComponent},
    {path: 'adduser', component: AddUserComponent},
    
];
