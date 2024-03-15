import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanFormComponent } from './loan/containers/loan-form/loan-form.component';
import { ClientComponent } from './client/container/client/client.component';
import { ClientFormComponent } from './client/container/client-form/client-form.component';
import { ClientResolver } from './client/guards/client.resolver';
import { LoanComponent } from './loan/containers/loan/loan.component';

const routes: Routes = [

  { path: 'loan', component: LoanComponent },
  { path: 'loan/new', component: LoanFormComponent },
  { path: 'loan/edit/:id', component: LoanFormComponent },

  { path: 'client', component: ClientComponent },
  { path: 'client/new', component: ClientFormComponent, resolve: { client: ClientResolver }},
  { path: 'client/edit/:id', component: ClientFormComponent, resolve: { client: ClientResolver }},

  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: '**', redirectTo: '/client' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
