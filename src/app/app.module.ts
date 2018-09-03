import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './shared/services/auth.service';

import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component';



import { MatInputModule, MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatStepperModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FogotPasswordComponent } from './login/fogot-password/fogot-password.component';
import { SelectRestaurantComponent } from './main/select-restaurant/select-restaurant.component';
import { AddRestaurantComponent } from './main/add-restaurant/add-restaurant.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeModule } from './main/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    FogotPasswordComponent,
    SelectRestaurantComponent,
    AddRestaurantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule, 
    HomeModule

  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
