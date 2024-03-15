import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from 'src/shared/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientComponent } from './container/client/client.component';
import { ClientFormComponent } from './container/client-form/client-form.component';
import { ClientListComponent } from './component/client-list/client-list.component';


@NgModule({
  declarations: [ClientComponent, ClientFormComponent, ClientListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule {}
