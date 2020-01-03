import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent, // Para que cualquier ruta redirecciona PagesComponent
        children: [ // Arreglo de rutas hijas
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NoPageFoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
