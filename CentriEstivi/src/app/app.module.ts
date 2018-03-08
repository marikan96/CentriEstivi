import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ReportComponent} from './report/report.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import {routing} from './app.routing';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, UserService} from './_services';
import {fakeBackendProvider, JwtInterceptor} from './_helpers';
import {AlertComponent} from './_directives';

import {NguiMapModule} from '@ngui/map';
import {FeedbackModalComponent} from './feedback-modal/feedback-modal.component';
import {MatDialog, MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FeedbackService} from "./_services/feedback.service";
import { FeedbackDetailsModalComponent } from './feedback-details-modal/feedback-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackModalComponent,
    FeedbackDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB-t7KwWp25oYH_Gch23_qV5t9q_yRc9YY'}),
    routing,
    BrowserAnimationsModule,
    MatDialogModule
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
