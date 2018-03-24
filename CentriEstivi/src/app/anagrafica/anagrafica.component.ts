import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Bambino, User } from '../_models/index';
import { BambinoService } from '../_services/index';
import { MatDialog } from '@angular/material';
import { FeedbackService } from '../_services/feedback.service';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit {

  bambini: Bambino[] = [];
  currentUser: User;

  constructor(private ref: ChangeDetectorRef,
    private bambinoService: BambinoService,
    private dialog: MatDialog,
    private feedbackService: FeedbackService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadListaBambini();
  }

  private loadListaBambini() {
    this.bambinoService.getAll().subscribe(bambini => {
      this.bambini = bambini
    });
  }

}
