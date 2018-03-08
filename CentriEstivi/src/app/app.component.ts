import { Component } from '@angular/core';
import {User} from "./_models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id.toString()
})
export class AppComponent {
  title = 'app';

  currentUser: User;

  constructor () {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
