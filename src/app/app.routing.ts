import { Route } from "@angular/compiler/src/core";
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';

const routes: Routes = [
    {path: 'register', component: RegisterComponent}, 
    {path: 'login', component: LoginComponent},

    // otherwise redirected to home
];

export const appRoutingModule = RouterModule.forRoot(routes);