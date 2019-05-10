import { SuppliersRComponent } from './components/suppliers-r/suppliers-r.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersCUComponent } from './components/suppliers-c-u/suppliers-c-u.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersRComponent
  },
  {
    path: 'create_update',
    component: SuppliersCUComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
