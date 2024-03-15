import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './containers/loan/loan.component';
import { AppMaterialModule } from 'src/shared/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanFormComponent } from './containers/loan-form/loan-form.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';

@NgModule({
  declarations: [LoanComponent, LoanFormComponent, LoanListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]

})
export class LoanModule { }
