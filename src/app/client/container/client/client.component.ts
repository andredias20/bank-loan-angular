import {Component, Inject, Input, OnInit} from '@angular/core';
import { Client } from '../../model/client';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  clients$: Observable<Client[]> | null = null;


  readonly displayedColumns = ['name', 'phone_number', 'actions'];

  constructor(
              private clientService: ClientService
              , private router: Router
              , private route: ActivatedRoute
              , private _snackBar: MatSnackBar) {
    this.refresh()
  }

  ngOnInit(): void {}

  refresh(){
    this.clients$ = this.clientService.list();
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(client: Client) {
    this.router.navigate(['edit', client._id], {relativeTo: this.route});
  }

  onDelete(client : Client) {
    this.clientService.remove(client._id).subscribe(
      next => {
        this._snackBar.open('Client removed successfully', '', {
            duration : 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
        })
        this.refresh();

    });

  }


}
