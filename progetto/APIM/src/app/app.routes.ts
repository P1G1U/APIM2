import { HomeComponent } from './page/home.component';
import { ProfileComponent } from './page/profile.component';


import { NgModule }             from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    //{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);

