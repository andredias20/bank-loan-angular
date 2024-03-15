import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from "@angular/forms";
import {ClientService} from "../services/client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    phone_number: ['']
  });

  constructor(
            private formBuilder: NonNullableFormBuilder
            , private service : ClientService
            , private _snackBar: MatSnackBar
            , private location: Location
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        response => this.onSucess(),
          error => { this.onError() }
      )
  }

  onSucess() {
    this._snackBar.open('Client created successfully', '', {duration : 5000 })
    this.onCancel()
  }

  onError() {
    this._snackBar.open('Error while saving the client.', '', {duration : 5000 })
  }

  onCancel() {
    this.location.back()
  }


}
