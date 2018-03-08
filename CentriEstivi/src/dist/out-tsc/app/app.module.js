"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var report_component_1 = require("./report/report.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
var _guards_1 = require("./_guards");
var _services_1 = require("./_services");
var _helpers_1 = require("./_helpers");
var _directives_1 = require("./_directives");
var map_1 = require("@ngui/map");
var feedback_modal_component_1 = require("./feedback-modal/feedback-modal.component");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var feedback_service_1 = require("./_services/feedback.service");
var feedback_details_modal_component_1 = require("./feedback-details-modal/feedback-details-modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            _directives_1.AlertComponent,
            home_component_1.HomeComponent,
            report_component_1.ReportComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            feedback_modal_component_1.FeedbackModalComponent,
            feedback_details_modal_component_1.FeedbackDetailsModalComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            map_1.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB-t7KwWp25oYH_Gch23_qV5t9q_yRc9YY' }),
            app_routing_1.routing,
            animations_1.BrowserAnimationsModule,
            material_1.MatDialogModule
        ],
        providers: [
            _guards_1.AuthGuard,
            _services_1.AlertService,
            _services_1.AuthenticationService,
            _services_1.UserService,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: _helpers_1.JwtInterceptor,
                multi: true
            },
            feedback_service_1.FeedbackService,
            _helpers_1.fakeBackendProvider
        ],
        entryComponents: [
            feedback_modal_component_1.FeedbackModalComponent,
            feedback_details_modal_component_1.FeedbackDetailsModalComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map