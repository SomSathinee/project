import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { FoodMenuComponent } from './menu/food-menu/food-menu.component';
import { OrderComponent } from './menu/order/order.component';
import { OrderHistoryComponent } from './menu/order-history/order-history.component';
import { PaymentComponent } from './menu/payment/payment.component';
import { RawMaterialComponent } from './menu/raw-material/raw-material.component';
import { ResInfoComponent } from './menu/res-info/res-info.component';
import { ServeComponent } from './menu/serve/serve.component';
import { SummaryComponent } from './menu/summary/summary.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashbord', component: DashboardComponent },
      { path: 'menu', component: FoodMenuComponent },
      { path: 'order', component: OrderComponent },
      { path: 'order-history', component: OrderHistoryComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'raw-material', component: RawMaterialComponent },
      { path: 'restaurant-info', component: ResInfoComponent },
      { path: 'serve', component: ServeComponent },
      { path: 'summary', component: SummaryComponent },

    ]
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

export const HomeRoutingRoutes = RouterModule.forChild(routes);
