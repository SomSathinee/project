import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component';
//import { HomeComponent } from './main/home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { FogotPasswordComponent } from './login/fogot-password/fogot-password.component';
import { SelectRestaurantComponent } from './main/select-restaurant/select-restaurant.component';
import { AddRestaurantComponent } from './main/add-restaurant/add-restaurant.component';

const routes: Routes = [
{path : 'signin' , component : SignInComponent},
{path : 'register',component : RegisterComponent},
{path : 'forgot-password',component : FogotPasswordComponent},
{path : 'select-restaurant',component : SelectRestaurantComponent},
{path : 'add-restaurant',component : AddRestaurantComponent},
{ path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
//{path: 'home',component : HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
