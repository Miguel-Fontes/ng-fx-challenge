import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImmovableFormComponent } from './immovable-form/immovable-form.component'
import { ImmovableListComponent } from './immovable-list/immovable-list.component'
import { ImmovablesComponent } from './immovables.component'

const routes: Routes = [
    { path: 'novo', component: ImmovableFormComponent },
    { path: '*', component: ImmovablesComponent },
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class ImmovablesRoutingModule { }

export const routedComponents = [ ImmovableListComponent,
                                  ImmovableFormComponent]
