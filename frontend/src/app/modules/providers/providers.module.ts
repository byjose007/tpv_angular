import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';

import { ProvidersCUComponent } from './components/providers-c-u/providers-c-u.component';
import { ProvidersRComponent } from './components/providers-r/providers-r.component';

@NgModule({
  declarations: [ProvidersRComponent, ProvidersCUComponent],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
