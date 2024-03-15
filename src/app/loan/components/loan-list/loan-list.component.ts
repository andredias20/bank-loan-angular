import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from '../../model/loan';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
})
export class LoanListComponent implements OnInit {
  @Input() loans: Loan[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = [
    'date',
    'currency',
    'total_value',
    'conversion_tax',
    'loan_expire_date',
    'actions'
  ];

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(loan: Loan) {
    this.edit.emit(loan);
  }

  onDelete(loan: Loan) {
    this.delete.emit(loan);
  }
}
