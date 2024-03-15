import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ClientService} from "../services/client.service";
import {Client} from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<Client> {

  constructor(private service : ClientService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> {
    if(route.params && route.params['id']){
      return this.service.listById(route.params['id']);
    }
    return of({_id: 0, name: '', phone_number: ''});
  }
}
