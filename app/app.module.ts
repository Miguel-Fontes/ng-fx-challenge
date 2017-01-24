import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';

import { AppRoutingModule, routedComponents } from './app.routing';

import { ImmovableService } from './immovables/shared/immovable.service'

import { ImmovableListComponent } from './immovables/immovable-list/immovable-list.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, routedComponents, ImmovableListComponent ],
  providers:    [ ImmovableService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
