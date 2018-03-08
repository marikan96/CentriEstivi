import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../_models';
import { Feedback } from '../_models/feedback';
import { Observable } from "rxjs/Observable";


@Injectable()
export class FeedbackDto {
  //Id: number;
  Commento: string;
  //Lat: number;
  //Lng: number;
  //CreationUserId: number;
  //Visible: boolean;
  Giudizio: string;
}
@Injectable()
export class FeedbackService {
  currentUser: User;
  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAll() {
    return this.http.get<Feedback[]>('/api/feedback/' + this.currentUser.id, this.jwt());
  }


  create(feedback: Feedback) {

    //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let dto = new FeedbackDto();
    //dto.Commento = "aaa";
    //dto.Giudizio = "Bbb";
    return this.http.post('/api/feedback/savefeedback', { Commento: feedback.commento, Giudizio: feedback.giudizio, Lat: feedback.coordinate.lat, Lng: feedback.coordinate.lng, CreationUserId: this.currentUser.id, Visible: true }
      , this.jwt());
    //return this.http.post('/api/feedback/savefeedback', {
    //  Id: 0,
    //  Commento: feedback.commento,
    //  Lat: 1,
    //  Lng: 1,
    //  CreationUserId: feedback.creationUserId,
    //  Visible: true,
    //  Giudizio: feedback.giudizio,     
    //});

    //return this.http.post('/api/feedback/savefeedback', {
    //  Id: 0,
    //  Commento: feedback.commento,
    //  Lat: 1,
    //  Lng: 1,
    //  CreationUserId: feedback.creationUserId,
    //  Visible: true,
    //  Giudizio: feedback.giudizio,     
    //});    
  }

  delete(id: number) {
    return this.http.delete('/api/feedback/' + id, this.jwt());
  }

  export(year: number) {
    return Observable.create(observer => {
    let xhr = new XMLHttpRequest();      
    xhr.open('POST', '/api/feedback/exportfeedbacks/', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'blob';

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          //var blob = new Blob([xhr.response], { type: contentType });
          observer.next(xhr.response);
          observer.complete();
        } else {
          observer.error(xhr.response);
        }
      }
    }
    xhr.send();
  });

    //return this.http.post('/api/feedback/exportfeedbacks/' , year, this.jwt(true));
    //window.open('/api/feedback/exportfeedbacks/' + year, "_blank");
  }

  export2(year: number) {
    //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    //application/vnd.ms-excel
    return this.http.post('/api/feedback/exportfeedbacks/', year, this.jwt())//.map(res => new Blob([(res)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
  }

  //private jwt() {
  //  // create authorization header with jwt token
  //  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //  if (currentUser && currentUser.token) {
  //    let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
  //    return new RequestOptions({ headers: headers });
  //  }
  //}
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
      else
      {
        return { headers: headers };
      }
    }
  }

}
