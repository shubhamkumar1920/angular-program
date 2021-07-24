import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component'
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';

const routes: Routes = [
  { path:'account',component:AccountComponent},
  { path:'login',component:LoginComponent},
  { path:'order',component:OrderComponent},
  { path:'cart',component:CartComponent},
  { path:'menu',component:MenuComponent},
  { path:'home',component:HomeComponent},
  { path:'restaurant',component:RestaurantComponent},
  { path:'specialoffer',component:SpecialofferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
