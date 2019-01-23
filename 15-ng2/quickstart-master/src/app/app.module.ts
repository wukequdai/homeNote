import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { AppComponent }  from './app.component';
import { demo01Component } from './demo01/app.demo01'
import { demo02Component } from './demo02/app.demo02'
import {AppRoutingModule} from './app.route'

@NgModule({
  imports:      [AppRoutingModule, BrowserModule,FormsModule ],
  declarations: [ AppComponent,demo01Component,demo02Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
