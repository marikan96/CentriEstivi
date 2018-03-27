import {Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild} from '@angular/core';
import { Bambino, User } from '../_models/index';
import { BambinoService } from '../_services/index';
import { MatDialog } from '@angular/material';
import { FeedbackService } from '../_services/feedback.service';
import {NgProgress, NgProgressComponent} from '@ngx-progressbar/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit, AfterViewInit {

  bambini: Bambino[] = [];
  currentUser: User;

  ngAfterViewInit() {
    this.progressBar.start();
  }

  constructor(private ref: ChangeDetectorRef,
              private bambinoService: BambinoService,
              private dialog: MatDialog,
              private feedbackService: FeedbackService,
              public progressBar: NgProgress,
              private router: Router) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadListaBambini();
    this.progressBar.complete();
  }

  private loadListaBambini() {
    this.bambinoService.getAll().subscribe(bambini => {
      this.bambini = bambini;
    });
  }

  modifica(b: Bambino) {
    this.router.navigate(['/bambini', b.idBambino]);
  }

  settimane(b: Bambino) {
    this.router.navigate(['/settimane', b.idBambino]);
  }

  pagamenti(b: Bambino) {
    this.router.navigate(['/pagamenti', b.idBambino]);
  }
}
