import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { AppRoutingModule, routedComponents } from './app.routing.module';

import { ImmovablesRoutingModule } from './immovables/immovables.routing.module';
import { ImmovablesModule } from './immovables/immovables.module';
import { ImmovableService } from './immovables/shared/immovable.service'

@NgModule({
  imports:      [ HttpModule,
                  BrowserModule,
                  ImmovablesModule,
                  AppRoutingModule ],
  declarations: [ AppComponent,
                  routedComponents ],
  providers:    [ ImmovableService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
