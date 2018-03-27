import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Bambino} from '../_models';
import {BambinoService} from '../_services';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {NgProgress} from '@ngx-progressbar/core';

@Component({
  selector: 'app-edit-viewall',
  templateUrl: './edit-viewall.component.html',
  styleUrls: ['./edit-viewall.component.css']
})
export class EditViewallComponent implements OnInit, AfterViewInit  {

  @Input()
  bambino: Bambino;

  bambinoResult: Bambino;
  model: Bambino;


  ngAfterViewInit() {
    this.progressBar.start();
  }

  constructor(private bambinoService: BambinoService,
              private route: ActivatedRoute,
              public progressBar: NgProgress) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.bambinoService.getBambino(+ params['id']))
      .subscribe(result => this.bambinoResult = result);

    this.progressBar.complete();
  }

  edit() {
    // TODO: ATTENDI LA CHIAMATA AL DB
  }

}
