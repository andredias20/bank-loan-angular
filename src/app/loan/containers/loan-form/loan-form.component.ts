import { Component, OnInit } from '@angular/core';
import {Loan} from "../../model/loan";
import {NonNullableFormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {LoanService} from "../../services/loan.service";

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [0],
    date: [new Date()],
    currency: [''],
    total_value: [0],
    conversion_tax: [0],
    loan_expire_date: [new Date()]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder
    , private service : LoanService
    , private _snackBar: MatSnackBar
    , private location: Location
    , private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const loan : Loan = this.route.snapshot.data['loan']
    this.form.setValue(loan);
    //TODO: Pegar informações do bacen de currency e conversion_tax
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        response => this.onSucess(),
        error => { this.onError() }
      )
  }

  onSucess() {
    this._snackBar.open('Loan created successfully', '', {duration : 5000 })
    this.onCancel()
  }

  onError() {
    this._snackBar.open('Error while saving the loan.', '', {duration : 5000 })
  }

  onCancel() {
    this.location.back()
  }
}
