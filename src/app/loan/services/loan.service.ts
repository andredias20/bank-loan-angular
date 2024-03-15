import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Loan} from "../model/Loan";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private readonly API = 'api/loan';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Loan[]>(this.API)
      .pipe(
        //Debug:
        catchError(error => {
          return of([])
        })
      );
  }
  listById(id : number) : Observable<Loan> {
    return this.httpClient.get<Loan>(`${this.API}/${id}`)
  }

  save(record : Partial<Loan>) {
    if(record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record : Partial<Loan>){
    return this.httpClient.post<Loan>(this.API, record);
  }

  private update(record : Partial<Loan>) {
    return this.httpClient.put<Loan>(`${this.API}/${record._id}`, record);
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
