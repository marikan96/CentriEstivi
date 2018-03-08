import { Component, OnInit } from '@angular/core';
import {Feedback} from '../_models/feedback';
import {MatDialogRef} from '@angular/material';
import {FeedbackService} from "../_services/feedback.service";

@Component({
  selector: 'app-feedback-details-modal',
  templateUrl: './feedback-details-modal.component.html',
  styleUrls: ['./feedback-details-modal.component.css']
})
export class FeedbackDetailsModalComponent implements OnInit {

  model: Feedback;

  constructor(public dialogRef: MatDialogRef<FeedbackDetailsModalComponent>,
              public feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  deleteFeedback(id: number) {
    this.feedbackService.delete(id).subscribe();
    window.location.reload();

  }


}
