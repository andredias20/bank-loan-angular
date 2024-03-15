import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './container/client/client.component';
import {ClientFormComponent} from "./container/client-form/client-form.component";
import {ClientResolver} from "./guards/client.resolver";

const routes: Routes = [
  { path: '', component: ClientComponent},
  { path: 'new', component: ClientFormComponent,  resolve: { client : ClientResolver}},
  { path: 'edit/:id', component: ClientFormComponent, resolve: { client : ClientResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
