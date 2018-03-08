import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/index';

@Injectable()
export class UserService {

  constructor(private httpService: HttpClient) { }

  //getAll() {
  //  return this.httpService.get<User[]>('/api/users');
  //}

  getById(id: number) {
    return this.httpService.get('/api/users/' + id);
  }

  create(user: User) {
    //return this.http.post('/api/users', user);
    return this.httpService.post('/api/values/registeruser', {
      Name: user.firstName, Surname: user.lastName, Email: user.eMail, Password: user.password
      , Street: user.address, CAP: user.cap, StreetNr: user.house_number, City: user.city, Telephone: user.tel_number
      ,Code: user.fiscal_code
    })
  }

  update(user: User) {
    return this.httpService.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.httpService.delete('/api/users/' + id);
  }
}
