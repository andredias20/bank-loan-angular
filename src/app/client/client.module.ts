import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './container/client/client.component';
import { AppMaterialModule } from 'src/shared/app-material/app-material.module';
import { ClientFormComponent } from './container/client-form/client-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ClientListComponent } from './component/client-list/client-list.component';


@NgModule({
  declarations: [ClientComponent, ClientFormComponent, ClientListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
})
export class ClientModule {}
