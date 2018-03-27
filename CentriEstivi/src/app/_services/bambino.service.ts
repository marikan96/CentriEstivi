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
    return this.httpService.get<Bambino[]>('/api/bambini/getlistabambini/', this.jwtAll());
  }

  getBambino(id: number) {
    return this.httpService.get<Bambino>('/api/bambini/' + id.toString(), this.jwt());
  }

  editBambino() {
    // return this.httpService.put('/api/feedback/savefeedback',
    // { Commento: feedback.commento, Giudizio: feedback.giudizio,
    // Lat: feedback.coordinate.lat, Lng: feedback.coordinate.lng, CreationUserId: this.currentUser.id, Visible: true }
    //   , this.jwt());

  }

  private jwtAll(bytearray: boolean = false) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let idcentro = 1;
    if (this.currentUser.idcentro > 0) {
      idcentro = this.currentUser.idcentro;
    } else {
      idcentro = 1;
    }
    console.log(idcentro);
    const idutente = this.currentUser.id;
    if (currentUser && currentUser.token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ` + currentUser.token);
      const params = new HttpParams()
        .set('idcentro', idcentro.toString())
        .set('idutente', idutente.toString());
      if (bytearray) {
        return {
          headers: headers,
          params: params
          , responseType: 'text' as 'json'
        };
      } else {
        return { headers: headers, params: params };
      }
    }
  }

  private jwt(bytearray: boolean = false) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ` + currentUser.token);

      if (bytearray) {
        return {
          headers: headers
          , responseType: 'text' as 'json'
        };
      } else {
        return { headers: headers };
      }
    }
  }

}
