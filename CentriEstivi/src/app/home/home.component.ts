import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';
import { MatDialog } from '@angular/material';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';
import { Feedback } from "../_models/feedback";
import { FeedbackService } from "../_services/feedback.service";
import { FeedbackDetailsModalComponent } from "../feedback-details-modal/feedback-details-modal.component";
//import * as FileSaver from "file-saver";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id.toString()
})
export class HomeComponent implements OnInit {
  url: string;
  currentUser: User;
  isAdmin: boolean;
  users: User[] = [];

  feedbacks: Feedback[] = []; // elenco dei feedback

   constructor(private ref: ChangeDetectorRef,
    private userService: UserService,
    private dialog: MatDialog,
    private feedbackService: FeedbackService) {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.isAdmin = this.currentUser.isadmin;
     
  }

  //feedbackDetails(feedback: Feedback) {
  //  const modal = this.dialog.open(FeedbackDetailsModalComponent);
  //  modal.componentInstance.model = feedback;
  //}


  //markerClicked({ target: marker }) {
  //  this.marker.lat = marker.getPosition().lat();
  //  this.marker.lng = marker.getPosition().lng();

  //  const modal = this.dialog.open(FeedbackModalComponent);
  //  modal.componentInstance.marker = this.marker;
  //}


  ngOnInit() {
    //this.loadAllUsers();
    this.loadAllFeedbacks();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      //this.loadAllUsers();
    });
  }

  //private loadAllUsers() {
  //  this.userService.getAll().subscribe(users => {
  //    this.users = users
  //  });
  //}

  private loadAllFeedbacks() {
    this.feedbackService.getAll().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
    });
  }

  private exportFeedbacks() {
    this.feedbackService.export2(2018).subscribe(response => {
      //var r: any;
      // r = response as any;
      //let file = new Blob([r.blob()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      //let fileName = r.headers.get('Content-Disposition').split(';')[1].trim().split('=')[1];
      //FileSaver.saveAs(file, fileName);      
      //var b: any;
      //b = blob as any;
      var r: any;
      r = response as any;
      this.url = r.data;
      //this.url = "http://www.pdf995.com/samples/pdf.pdf";
      //var downloadUrl = URL.createObjectURL(response);
      //window.open(r.data, "_blank");


      //var link = document.createElement('a');
      
      //link.href = window.URL.createObjectURL(response);
      //link.href = r.data;
      //link.download = r.data;
      //link.click();

    });
  }

}
