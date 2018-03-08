import { Component } from '@angular/core';
import {AlertService, UserService} from '../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id.toString()
})
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registrazione completata con successo!', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error.error);
          this.loading = false;
        });
  }

}
