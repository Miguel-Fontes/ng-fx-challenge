import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmovablesComponent } from './immovables/immovables.component';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ImmovablesComponent}, // Default route
  { path: 'imoveis', component: ImmovablesComponent},
  { path: 'sobre', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routedComponents = [ ImmovablesComponent,
                                  AboutComponent ];