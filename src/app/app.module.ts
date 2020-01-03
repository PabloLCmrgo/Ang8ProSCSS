import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbsComponent,
    HeaderComponent,
    NoPageFoundComponent,
    SidebarComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
