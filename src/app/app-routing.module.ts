import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'order', loadChildren: './page/order/order.module#OrderPageModule' },
  { path: 'confirm', loadChildren: './page/confirm/confirm.module#ConfirmPageModule' },
  { path: 'coffee', loadChildren: './page/coffee/coffee.module#CoffeePageModule' },
  { path: 'payment', loadChildren: './page/payment/payment.module#PaymentPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
