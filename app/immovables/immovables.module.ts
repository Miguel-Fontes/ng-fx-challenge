import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';

import { ImmovablesComponent }     from './immovables.component'
import { ImmovableService }        from './shared/immovable.service'

import { ImmovablesRoutingModule, routedComponents } from './immovables.routing.module'

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ImmovablesRoutingModule ],
  exports:      [ routedComponents ],
  declarations: [ routedComponents ],
  providers:    [ ImmovableService ]
})

export class ImmovablesModule { }