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
var _services_1 = require("../_services");
var material_1 = require("@angular/material");
var feedback_modal_component_1 = require("../feedback-modal/feedback-modal.component");
var feedback_service_1 = require("../_services/feedback.service");
var feedback_details_modal_component_1 = require("../feedback-details-modal/feedback-details-modal.component");
var HomeComponent = (function () {
    function HomeComponent(ref, userService, dialog, feedbackService) {
        this.ref = ref;
        this.userService = userService;
        this.dialog = dialog;
        this.feedbackService = feedbackService;
        this.users = [];
        this.positions = []; // le posizioni aggiunte al click
        this.feedbacks = []; // elenco dei feedback
        this.address = {};
        this.marker = {
            display: true,
            lat: null,
            lng: null,
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.center = 'Conegliano TV';
    }
    HomeComponent.prototype.onClick = function (event) {
        // al click sulla mappa aggiunge un marker all'array
        // sarebbe da poterne mettere solo uno alla volta e poter cancellare se ho sbagliato
        if (event instanceof MouseEvent)
            return;
        this.positions.push(event.latLng);
        event.target.panTo(event.latLng);
    };
    HomeComponent.prototype.feedbackDetails = function (feedback) {
        var modal = this.dialog.open(feedback_details_modal_component_1.FeedbackDetailsModalComponent);
        modal.componentInstance.model = feedback;
    };
    HomeComponent.prototype.markerClicked = function (_a) {
        var marker = _a.target;
        this.marker.lat = marker.getPosition().lat();
        this.marker.lng = marker.getPosition().lng();
        var modal = this.dialog.open(feedback_modal_component_1.FeedbackModalComponent);
        modal.componentInstance.marker = this.marker;
    };
    HomeComponent.prototype.initialized = function (autocomplete) {
        this.autocomplete = autocomplete;
    };
    HomeComponent.prototype.placeChanged = function (place) {
        this.center = place.geometry.location;
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            this.address[addressType] = place.address_components[i].long_name;
        }
        this.ref.detectChanges();
    };
    HomeComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
        this.loadAllFeedbacks();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        this.userService.delete(id).subscribe(function () {
            //this.loadAllUsers();
        });
    };
    //private loadAllUsers() {
    //  this.userService.getAll().subscribe(users => {
    //    this.users = users
    //  });
    //}
    HomeComponent.prototype.loadAllFeedbacks = function () {
        var _this = this;
        this.feedbackService.getAll().subscribe(function (feedbacks) {
            _this.feedbacks = feedbacks;
        });
    };
    HomeComponent.prototype.exportFeedbacks = function () {
        this.feedbackService.export(2018).subscribe(function (response) {
            var r;
            r = response;
            var file = new Blob([r.blob()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var fileName = r.headers.get('Content-Disposition').split(';')[1].trim().split('=')[1];
            saveAs(file, fileName);
            //var b: any;
            //b = blob as any;
            //var downloadUrl = URL.createObjectURL(b.blob());
            //window.open(downloadUrl, "_blank");
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        moduleId: module.id.toString()
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        _services_1.UserService,
        material_1.MatDialog,
        feedback_service_1.FeedbackService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map