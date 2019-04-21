import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboarMainComponent } from './components/dashboar-main/dashboar-main.component';

const routes: Routes = [{
  path: '',
  component: DashboarMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
