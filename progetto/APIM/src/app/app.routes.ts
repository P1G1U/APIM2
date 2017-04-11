import { HomeComponent } from './page/home.component';
import { ProfileComponent } from './page/profile.component';
import { CategoryComponent } from './page/category.component';
import { UploadComponent } from './page/upload.component';
import { IssuesComponent } from './page/issues.component';

import { NgModule }             from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'issues', component: IssuesComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);

