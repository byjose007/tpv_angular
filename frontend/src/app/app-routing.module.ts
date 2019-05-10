import { DashboarMainComponent } from './modules/dashboard/components/dashboar-main/dashboar-main.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },



  {
    path: '',
    component: DashboarMainComponent,
    children : [
      // {
      //   path: 'dashboard', loadChildren : './dashboard/dashboard.module#DashboardModule'
      // },
      {
        path: 'products', loadChildren: './modules/products/products.module#ProductsModule'
      },
      {
        path: 'customers', loadChildren: './modules/./customers/customers.module#CustomersModule'
      },
      {
        path: 'suppliers', loadChildren: './modules/./suppliers/suppliers.module#SuppliersModule'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
