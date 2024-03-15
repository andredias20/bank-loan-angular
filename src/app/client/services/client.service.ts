import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from '../model/client';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private readonly API = 'api/client';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Client[]>(this.API)
    .pipe(
      //Debug:
      catchError(error => {
        return of([])
      })
    );
  }

  listById(id : number) : Observable<Client> {
    return this.httpClient.get<Client>(`${this.API}/${id}`)
  }

  save(record : Partial<Client>) {
    if(record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record : Partial<Client>){
    return this.httpClient.post<Client>(this.API, record);
  }

  private update(record : Partial<Client>) {
    return this.httpClient.put<Client>(`${this.API}/${record._id}`, record);
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

}
