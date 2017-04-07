import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule }  from '@angular/router';


import { AppMenu } from './app.menu';

import { JumbotronComponent } from './jumbotron.component';

import { HomeComponent } from './page/home.component';
import { ProfileComponent } from './page/profile.component';

import { routing } from './app.routes';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMenu,
    JumbotronComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
