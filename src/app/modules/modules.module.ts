import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { SharedModule } from '../shared/shared.module';
import { ModulesRoutingModule } from './modules-routing.module';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulesRoutingModule
  ],
  exports : [

  ],
})
export class ModulesModule { }