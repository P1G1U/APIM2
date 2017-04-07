import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppMenu } from './app.menu';

import { JumbotronComponent } from './jumbotron.component';

import { HomeComponent } from './page/home.component';
import { ProfileComponent } from './page/profile.component';

import { AppRoutingModule } from './app.routes';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
