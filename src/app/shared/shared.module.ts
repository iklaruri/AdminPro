import { NgModule } from '@angular/core';

import { NoPageComponent } from './no-page/no-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    NoPageComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NoPageComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
