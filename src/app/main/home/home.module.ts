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
  MatSidenavModule,
  MatBadgeModule,
  MatMenuModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatGridListModule
  
} from '@angular/material';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { OrderComponent, DialogOrder } from './menu/order/order.component';
import { ServeComponent } from './menu/serve/serve.component';
import { PaymentComponent,DialogPayment } from './menu/payment/payment.component';
import { OrderHistoryComponent } from './menu/order-history/order-history.component';
import { FoodMenuComponent, Fooddialog } from './menu/food-menu/food-menu.component';
import { RawMaterialComponent } from './menu/raw-material/raw-material.component';
import { ResInfoComponent, Aboutdialog } from './menu/res-info/res-info.component';
import { SummaryComponent } from './menu/summary/summary.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatGridListModule
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
    SummaryComponent,
    DialogOrder,
    Fooddialog,
    DialogPayment,
    PaymentComponent,
    Aboutdialog
    
    
  ],
  entryComponents:[
    OrderComponent,
    DialogOrder,
    FoodMenuComponent,
    Fooddialog,
    PaymentComponent,
    DialogPayment,
    ResInfoComponent,
    Aboutdialog

  ]
})
export class HomeModule { }
