import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuItems } from './menu-items/menu-items';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,

  ],
  providers: [MenuItems]
})
export class SharedModule { }
