import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Loan} from "../../model/Loan";
import {LoanService} from "../../services/loan.service";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {

  loans$: Observable<Loan[]> | null = null

  readonly displayedColumns = [
    'date',
    'currency',
    'total_value',
    'conversion_tax',
    'loan_expire_date'
  ];

  constructor(
                private loanService: LoanService
                , private router: Router
                , private route: ActivatedRoute
                , private _snackBar: MatSnackBar
  ) {
    this.refresh()
  }

  ngOnInit() {}

  refresh(){
    this.loans$ = this.loanService.list();
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(Loan: Loan) {
    this.router.navigate(['edit', Loan._id], {relativeTo: this.route});
  }

  onDelete(Loan : Loan) {
    this.loanService.remove(Loan._id).subscribe(
      next => {
        this._snackBar.open('Loan removed successfully', '', {
          duration : 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
        this.refresh();

      });

  }

}
