import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Loan} from "../model/Loan";
import {LoanService} from "../services/loan.service";

@Injectable({
  providedIn: 'root'
})
export class LoanResolver implements Resolve<Loan> {

  constructor(private service : LoanService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Loan> {
    if(route.params && route.params['id']){
      return this.service.listById(route.params['id']);
    }
    return of({ _id: 0, date: new Date(), currency: '', total_value: 0, conversion_tax: 0, loan_expire_date: new Date() });
  }
}
