import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent
  ]
})
export class SharedModule { }
