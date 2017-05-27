import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { Client } from '../client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

 // clients: any[] = [];
  url: string ="https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
  constructor(private http:Http) { }

  /*getClients(): Observable<Client[]> {
    let url = this.url;
    return this.http.get(url).map(res=>{
      this.clients = res.json().data;
     // return res.json().Brastlewark;
    });
  }*/
  getClients(): Observable<Client[]> {
    let url = this.url;
    return this.http.get(url)
      .map(res => res.json().Brastlewark)
      //.catch(res => console.log(res));
  }
}
