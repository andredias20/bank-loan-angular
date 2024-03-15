import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import {ClientFormComponent} from "./client-form/client-form.component";

const routes: Routes = [
  { path: '', component: ClientComponent},
  { path: 'new', component: ClientFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
