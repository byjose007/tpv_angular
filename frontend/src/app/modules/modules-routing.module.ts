
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children : [
      {
        path: 'dashboard', loadChildren : './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'products', loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'customers', loadChildren: './customers/customers.module#CustomersModule'
      },
      {
        path: 'suppliers', loadChildren: './providers/providers.module#ProvidersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
