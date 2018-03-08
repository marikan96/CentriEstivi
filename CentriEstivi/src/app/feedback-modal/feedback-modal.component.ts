import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Feedback} from '../_models/feedback';
import {User} from '../_models';
import {Router} from '@angular/router';
import {FeedbackService} from '../_services/feedback.service';
import {AlertService} from '../_services';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css']
})

export class FeedbackModalComponent implements OnInit {

  marker = {
    display: true,
    lat: null,
    lng: null,
  };

  model: Feedback;

  currentUser: User;

  loading = false;

  constructor(public dialogRef: MatDialogRef<FeedbackModalComponent>,
              private router: Router,
              private feedbackService: FeedbackService,
              private alertService: AlertService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.model = new Feedback();
    this.model.commento = '';
    this.model.giudizio = '';
    this.changeValue('Ok');
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
    window.location.reload();
  }

  changeValue(value: string) {
    this.model.giudizio = value;
  }

  feedback() {
    this.loading = true;
    this.model.coordinate = this.marker;
    this.model.creationUserId = this.currentUser.id;

    this.feedbackService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Segnalazione completata con successo!', true);
          this.close();
        },
        error => {
          this.alertService.error(error.error);
          this.loading = false;             
        });    
  }

}
