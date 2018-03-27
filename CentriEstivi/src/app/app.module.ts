import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ReportComponent} from './report/report.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import {routing} from './app.routing';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, UserService, BambinoService} from './_services';
import {fakeBackendProvider, JwtInterceptor} from './_helpers';
import {AlertComponent} from './_directives';

import {NguiMapModule} from '@ngui/map';
import {FeedbackModalComponent} from './feedback-modal/feedback-modal.component';
import {MatDialog, MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FeedbackService} from "./_services/feedback.service";
import { FeedbackDetailsModalComponent } from './feedback-details-modal/feedback-details-modal.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import {BrowserXhr} from '@angular/common/http/src/xhr';
import {NgProgressModule} from '@ngx-progressbar/core';
import { EditViewallComponent } from './edit-viewall/edit-viewall.component';
import { PagamentiComponent } from './pagamenti/pagamenti.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackModalComponent,
    FeedbackDetailsModalComponent,
    AnagraficaComponent,
    EditViewallComponent,
    PagamentiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatDialogModule,
    NgProgressModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    BambinoService,
    FeedbackService,
    fakeBackendProvider
  ],
  entryComponents: [
    FeedbackModalComponent,
    FeedbackDetailsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
