import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersCUComponent } from './components/suppliers-c-u/suppliers-c-u.component';
import { SuppliersRComponent } from './components/suppliers-r/suppliers-r.component';
import { SuppliersService } from './suppliers.service';



@NgModule({
  declarations: [SuppliersRComponent, SuppliersCUComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    // SuppliersService
  ],
  // exports:[SuppliersRComponent, SuppliersCUComponent]
})
export class SuppliersModule { }
