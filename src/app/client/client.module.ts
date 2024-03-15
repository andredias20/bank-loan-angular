import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { AppMaterialModule } from 'src/shared/app-material/app-material.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [ClientComponent, ClientFormComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
})
export class ClientModule {}
