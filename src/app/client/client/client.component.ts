import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clients$: Observable<Client[]>;

  displayedColumns = ['name', 'phone_number'];

  constructor(private clientService: ClientService) {
    this.clients$ = this.clientService.list();
  }

  ngOnInit(): void {

  }
}
