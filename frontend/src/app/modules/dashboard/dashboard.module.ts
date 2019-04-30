import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboarMainComponent } from './components/dashboar-main/dashboar-main.component';
import { ModulesComponent } from '../modules.component';


@NgModule({
  declarations: [DashboarMainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
