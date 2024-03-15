import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clients$: Observable<Client[]>;

  displayedColumns = ['name', 'phone_number', 'actions'];

  constructor(
              private clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute) {
    this.clients$ = this.clientService.list();
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
