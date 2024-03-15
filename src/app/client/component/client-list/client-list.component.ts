import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../model/client";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[] = [];
  @Output() add=  new EventEmitter(false);
  @Output() edit=  new EventEmitter(false);
  @Output() delete=  new EventEmitter(false);

  readonly displayedColumns = ['name', 'phone_number', 'actions'];

  constructor() {}

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(client: Client) {
    this.edit.emit(client);
  }

  onDelete(client : Client) {
    this.delete.emit(client)
  }
}
