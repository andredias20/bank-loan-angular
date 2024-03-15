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

  save(record : Partial<Client>) {
    return this.httpClient.post<Client>(this.API, record);
  }
}
