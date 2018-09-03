import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingRoutes } from './home-routing.routing';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatStepperModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { OrderComponent } from './menu/order/order.component';
import { ServeComponent } from './menu/serve/serve.component';
import { PaymentComponent } from './menu/payment/payment.component';
import { OrderHistoryComponent } from './menu/order-history/order-history.component';
import { FoodMenuComponent } from './menu/food-menu/food-menu.component';
import { RawMaterialComponent } from './menu/raw-material/raw-material.component';
import { ResInfoComponent } from './menu/res-info/res-info.component';
import { SummaryComponent } from './menu/summary/summary.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingRoutes,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    OrderComponent,
    ServeComponent,
    PaymentComponent,
    OrderHistoryComponent,
    FoodMenuComponent,
    RawMaterialComponent,
    ResInfoComponent,
    SummaryComponent
  ]
})
export class HomeModule { }
