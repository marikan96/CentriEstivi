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
var http_1 = require("@angular/common/http");
var FeedbackDto = (function () {
    function FeedbackDto() {
    }
    return FeedbackDto;
}());
FeedbackDto = __decorate([
    core_1.Injectable()
], FeedbackDto);
exports.FeedbackDto = FeedbackDto;
var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    FeedbackService.prototype.getAll = function () {
        return this.http.get('/api/feedback/' + this.currentUser.id, this.jwt());
    };
    FeedbackService.prototype.create = function (feedback) {
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //let dto = new FeedbackDto();
        //dto.Commento = "aaa";
        //dto.Giudizio = "Bbb";
        return this.http.post('/api/feedback/savefeedback', { Commento: feedback.commento, Giudizio: feedback.giudizio, Lat: feedback.coordinate.lat, Lng: feedback.coordinate.lng, CreationUserId: this.currentUser.id, Visible: true }, this.jwt());
        //return this.http.post('/api/feedback/savefeedback', {
        //  Id: 0,
        //  Commento: feedback.commento,
        //  Lat: 1,
        //  Lng: 1,
        //  CreationUserId: feedback.creationUserId,
        //  Visible: true,
        //  Giudizio: feedback.giudizio,     
        //});
        //return this.http.post('/api/feedback/savefeedback', {
        //  Id: 0,
        //  Commento: feedback.commento,
        //  Lat: 1,
        //  Lng: 1,
        //  CreationUserId: feedback.creationUserId,
        //  Visible: true,
        //  Giudizio: feedback.giudizio,     
        //});    
    };
    FeedbackService.prototype.delete = function (id) {
        return this.http.delete('/api/feedback/' + id, this.jwt());
    };
    FeedbackService.prototype.export = function (year) {
        return this.http.get('/api/feedback/exportfeedbacks/' + year, this.jwt(true));
        //window.open('/api/feedback/exportfeedbacks/' + year, "_blank");
    };
    //private jwt() {
    //  // create authorization header with jwt token
    //  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //  if (currentUser && currentUser.token) {
    //    let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //    return new RequestOptions({ headers: headers });
    //  }
    //}
    FeedbackService.prototype.jwt = function (bytearray) {
        if (bytearray === void 0) { bytearray = false; }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + currentUser.token);
            if (bytearray) {
                headers.append('responseType', 'arraybuffer');
            }
            return { headers: headers };
        }
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map