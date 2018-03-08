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
var feedback_service_1 = require("../_services/feedback.service");
var FeedbackDetailsModalComponent = (function () {
    function FeedbackDetailsModalComponent(dialogRef, feedbackService) {
        this.dialogRef = dialogRef;
        this.feedbackService = feedbackService;
    }
    FeedbackDetailsModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackDetailsModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    FeedbackDetailsModalComponent.prototype.deleteFeedback = function (id) {
        this.feedbackService.delete(id).subscribe();
        window.location.reload();
    };
    return FeedbackDetailsModalComponent;
}());
FeedbackDetailsModalComponent = __decorate([
    core_1.Component({
        selector: 'app-feedback-details-modal',
        templateUrl: './feedback-details-modal.component.html',
        styleUrls: ['./feedback-details-modal.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MatDialogRef,
        feedback_service_1.FeedbackService])
], FeedbackDetailsModalComponent);
exports.FeedbackDetailsModalComponent = FeedbackDetailsModalComponent;
//# sourceMappingURL=feedback-details-modal.component.js.map