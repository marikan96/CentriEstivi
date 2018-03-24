import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bambino } from '../_models/index';
import { User } from '../_models/index';

@Injectable()
export class BambinoService {

  currentUser: User;

  constructor(private httpService: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAll() {
    //let params = new HttpParams().set("idcentro", this.currentUser.idcentro).set("idutente", this.currentUser.id);
    let idcentro = this.currentUser.idcentro;
    let idutente = this.currentUser.id;
    return this.httpService.get<Bambino[]>('/api/bambini/getlistabambini/' + idcentro + '/' + idutente, this.jwt());
  }

  private jwt(bytearray: boolean = false) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new HttpHeaders().set('Authorization', `Bearer ` + currentUser.token);
      if (bytearray) {
        return {
          headers: headers
          , responseType: 'text' as 'json'
        };
      }
      else {
        return { headers: headers };
      }
    }
  }

}
