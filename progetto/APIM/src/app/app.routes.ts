import { HomeComponent } from './page/home.component';
import { ProfileComponent } from './page/profile.component';


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

