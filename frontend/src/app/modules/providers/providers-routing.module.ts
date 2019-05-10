import { ProvidersCUComponent } from './components/providers-c-u/providers-c-u.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersRComponent } from './components/providers-r/providers-r.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersRComponent
  },
  {
    path: 'create_update',
    component: ProvidersCUComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
