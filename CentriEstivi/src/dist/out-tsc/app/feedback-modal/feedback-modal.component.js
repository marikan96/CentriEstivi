"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var feedback_1 = require("../_models/feedback");
var router_1 = require("@angular/router");
var feedback_service_1 = require("../_services/feedback.service");
var _services_1 = require("../_services");
var FeedbackModalComponent = (function () {
    function FeedbackModalComponent(dialogRef, router, feedbackService, alertService) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.feedbackService = feedbackService;
        this.alertService = alertService;
        this.marker = {
            display: true,
            lat: null,
            lng: null,
        };
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model = new feedback_1.Feedback();
        this.model.commento = '';
        this.model.giudizio = '';
        this.changeValue('Ok');
    }
    FeedbackModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackModalComponent.prototype.close = function () {
        this.dialogRef.close();
        window.location.reload();
    };
    FeedbackModalComponent.prototype.changeValue = function (value) {
        this.model.giudizio = value;
    };
    FeedbackModalComponent.prototype.feedback = function () {
        var _this = this;
        this.loading = true;
        this.model.coordinate = this.marker;
        this.model.creationUserId = this.currentUser.id;
        this.feedbackService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Segnalazione completata con successo!', true);
            _this.close();
        }, function (error) {
            _this.alertService.error(error.error);
            _this.loading = false;
        });
    };
    return FeedbackModalComponent;
}());
FeedbackModalComponent = __decorate([
    core_1.Component({
        selector: 'app-feedback-modal',
        templateUrl: './feedback-modal.component.html',
        styleUrls: ['./feedback-modal.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MatDialogRef,
        router_1.Router,
        feedback_service_1.FeedbackService,
        _services_1.AlertService])
], FeedbackModalComponent);
exports.FeedbackModalComponent = FeedbackModalComponent;
//# sourceMappingURL=feedback-modal.component.js.map