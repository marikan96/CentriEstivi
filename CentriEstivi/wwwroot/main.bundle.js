webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i.toString(),
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeBackendInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_materialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/dematerialize.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        // wrap in delayed observable to simulate server api call
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null).mergeMap(function () {
            //// authenticate
            //if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
            //  // find if any user matches login credentials
            //  const filteredUsers = users.filter(user => {
            //    return user.username === request.body.username && user.password === request.body.password;
            //  });
            //  if (filteredUsers.length) {
            //    // if login details are valid return 200 OK with user details and fake jwt token
            //    // aggiungi CODICE FISCALE, DATA DI NASCITA, COMUNE DI RESIDENZA
            //    const user = filteredUsers[0];
            //    const body = {
            //      id: user.id,
            //      username: user.username,
            //      firstName: user.firstName,
            //      lastName: user.lastName,
            //      token: 'fake-jwt-token'
            //    };
            //    return Observable.of(new HttpResponse({status: 200, body: body}));
            //  } else {
            //    // else return 400 bad request
            //    return Observable.throw('Username or password is incorrect');
            //  }
            //}
            //// get users
            //if (request.url.endsWith('/api/users') && request.method === 'GET') {
            //  // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
            //  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //    return Observable.of(new HttpResponse({status: 200, body: users}));
            //  } else {
            //    // return 401 not authorised if token is null or invalid
            //    return Observable.throw('Unauthorised');
            //  }
            //}
            //// get user feedbacks
            ////if(request.url.endsWith('/api/feedbacks') && request.method === 'GET') {
            ////  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            ////    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            ////    const id = currentUser.id;
            ////    const matchedFeedbacks = feedbacks.filter(feedback => feedback.creationUserId === id);
            ////    const feedback = matchedFeedbacks;
            ////    return Observable.of(new HttpResponse({status: 200, body: feedback}));
            ////  } else {
            ////    // return 401 not authorised if token is null or invalid
            ////    return Observable.throw('Unauthorised');
            ////  }
            ////}
            //// get user by id
            //if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
            //  // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            //  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //    // find user by id in users array
            //    const urlParts = request.url.split('/');
            //    const id = parseInt(urlParts[urlParts.length - 1]);
            //    const matchedUsers = users.filter(user => user.id === id);
            //    const user = matchedUsers.length ? matchedUsers[0] : null;
            //    return Observable.of(new HttpResponse({status: 200, body: user}));
            //  } else {
            //    // return 401 not authorised if token is null or invalid
            //    return Observable.throw('Unauthorised');
            //  }
            //}
            //// create user
            //if (request.url.endsWith('/api/users') && request.method === 'POST') {
            //  // get new user object from post body
            //  const newUser = request.body;
            //  // validation
            //  const duplicateUser = users.filter(user => user.username === newUser.username).length;
            //  if (duplicateUser) {
            //    return Observable.throw('Username "' + newUser.username + '" is already taken');
            //  }
            //  // save new user
            //  newUser.id = users.length + 1;
            //  users.push(newUser);
            //  localStorage.setItem('users', JSON.stringify(users));
            //  // respond 200 OK
            //  return Observable.of(new HttpResponse({status: 200}));
            //}
            //// create feedback
            ////if (request.url.endsWith('/api/feedbacks') && request.method === 'POST') {
            ////  const newFeedback = request.body;
            ////  newFeedback.id = feedbacks.length + 1;
            ////  feedbacks.push(newFeedback);
            ////  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            ////  return Observable.of(new HttpResponse({status: 200}));
            ////}
            //// delete user
            //if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
            //  // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            //  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //    // find user by id in users array
            //    const urlParts = request.url.split('/');
            //    const id = parseInt(urlParts[urlParts.length - 1]);
            //    for (let i = 0; i < users.length; i++) {
            //      const user = users[i];
            //      if (user.id === id) {
            //        // delete user
            //        users.splice(i, 1);
            //        localStorage.setItem('users', JSON.stringify(users));
            //        break;
            //      }
            //    }
            //    // respond 200 OK
            //    return Observable.of(new HttpResponse({status: 200}));
            //  } else {
            //    // return 401 not authorised if token is null or invalid
            //    return Observable.throw('Unauthorised');
            //  }
            //}
            //// delete feedback
            //if (request.url.match(/\/api\/feedbacks\/\d+$/) && request.method === 'DELETE') {
            //  if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //    const urlParts = request.url.split('/');
            //    const id = parseInt(urlParts[urlParts.length - 1]);
            //    for (let i = 0; i < feedbacks.length; i++) {
            //      const feedback = feedbacks[i];
            //      if (feedback.id === id) {
            //        // delete user
            //        feedbacks.splice(i, 1);
            //        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            //        break;
            //      }
            //    }
            //  }
            //}
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    FakeBackendInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_backend__ = __webpack_require__("../../../../../src/app/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__fake_backend__["a"]; });




/***/ }),

/***/ "../../../../../src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/_models/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback; });
var Feedback = (function () {
    function Feedback() {
        this.coordinate = {
            display: true,
            lat: null,
            lng: null,
        };
    }
    return Feedback;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (eMail, password) {
        return this.http.post('/api/values/authenticateuser', { Email: eMail, Password: password })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FeedbackDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackDto = (function () {
    function FeedbackDto() {
    }
    FeedbackDto = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FeedbackDto);
    return FeedbackDto;
}());

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
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/feedback/exportfeedbacks/', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.responseType = 'blob';
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                        //var blob = new Blob([xhr.response], { type: contentType });
                        observer.next(xhr.response);
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.send();
        });
        //return this.http.post('/api/feedback/exportfeedbacks/' , year, this.jwt(true));
        //window.open('/api/feedback/exportfeedbacks/' + year, "_blank");
    };
    FeedbackService.prototype.export2 = function (year) {
        //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        //application/vnd.ms-excel
        return this.http.post('/api/feedback/exportfeedbacks/', year, this.jwt()); //.map(res => new Blob([(res)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
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
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization', "Bearer " + currentUser.token);
            if (bytearray) {
                return {
                    headers: headers,
                    responseType: 'text'
                };
            }
            else {
                return { headers: headers };
            }
        }
    };
    FeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(httpService) {
        this.httpService = httpService;
    }
    //getAll() {
    //  return this.httpService.get<User[]>('/api/users');
    //}
    UserService.prototype.getById = function (id) {
        return this.httpService.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        //return this.http.post('/api/users', user);
        return this.httpService.post('/api/values/registeruser', {
            Nome: user.firstName, Cognome: user.lastName, Email: user.eMail, Password: user.password,
            Via: user.address, Cap: user.cap, Numero: user.house_number, Citta: user.city, Telefono: user.tel_number,
            Cf: user.fiscal_code
        });
    };
    UserService.prototype.update = function (user) {
        return this.httpService.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.httpService.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <alert></alert>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            moduleId: module.i.toString()
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/@ngui/map.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__feedback_modal_feedback_modal_component__ = __webpack_require__("../../../../../src/app/feedback-modal/feedback-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_feedback_service__ = __webpack_require__("../../../../../src/app/_services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feedback_details_modal_feedback_details_modal_component__ = __webpack_require__("../../../../../src/app/feedback-details-modal/feedback-details-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__feedback_details_modal_feedback_details_modal_component__["a" /* FeedbackDetailsModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB-t7KwWp25oYH_Gch23_qV5t9q_yRc9YY' }),
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MatDialogModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__services__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_11__services__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_11__services__["c" /* UserService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* JwtInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_18__services_feedback_service__["a" /* FeedbackService */],
                __WEBPACK_IMPORTED_MODULE_12__helpers__["b" /* fakeBackendProvider */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__feedback_details_modal_feedback_details_modal_component__["a" /* FeedbackDetailsModalComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_index__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/feedback-details-modal/feedback-details-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback-details-modal/feedback-details-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Dettagli feedback: </h5>\r\n<b>Giudizio: </b> <span>{{model.giudizio}}</span> <br>\r\n<b>Descrizione: </b> <span>{{model.commento}}</span> <br>\r\n<b>Data segnalazione: </b> <span>{{model.createDate | date:\"dd/MM/yyyy 'alle' h:mma\"}}</span> <br>\r\n\r\n<br>\r\n<br>\r\n<button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteFeedback(model.id)\">Cancella</button>\r\n<button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"close()\">Chiudi</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/feedback-details-modal/feedback-details-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDetailsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__ = __webpack_require__("../../../../../src/app/_services/feedback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    FeedbackDetailsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback-details-modal',
            template: __webpack_require__("../../../../../src/app/feedback-details-modal/feedback-details-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback-details-modal/feedback-details-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__["a" /* FeedbackService */]])
    ], FeedbackDetailsModalComponent);
    return FeedbackDetailsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback-modal/feedback-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback-modal/feedback-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Inserisci nuovo feedback</h5>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"changeValue('Ok')\">Ok</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeValue('Neutro')\">Neutro</button>\r\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"changeValue('Negativo')\">Negativo</button>\r\n\r\n<br>\r\n\r\n<p *ngIf=\"model.giudizio\">\r\n  Selezionato: {{model.giudizio}}\r\n</p>\r\n\r\n<input type=\"text\" style=\"margin-top: 10px;\" size=\"25\" placeholder=\"commento...\" [(ngModel)]=\"model.commento\">\r\n\r\n<br>\r\n<br>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"feedback()\">Invia feedback</button>\r\n<button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"close()\">Annulla</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/feedback-modal/feedback-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_feedback__ = __webpack_require__("../../../../../src/app/_models/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__ = __webpack_require__("../../../../../src/app/_services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_feedback__["a" /* Feedback */]();
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
    FeedbackModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback-modal',
            template: __webpack_require__("../../../../../src/app/feedback-modal/feedback-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback-modal/feedback-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AlertService */]])
    ], FeedbackModalComponent);
    return FeedbackModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  padding: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n  <h1 class=\"navbar-brand mb-0\">Feedback Comune di Conegliano</h1>\r\n  <span class=\"navbar-text\">\r\n      Utente loggato: {{currentUser.firstName}} - <a [routerLink]=\"['/login']\">Logout</a>\r\n    </span>\r\n</nav>\r\n<br>\r\n\r\n\r\n<div class=\"input-group input-group-lg\">\r\n\r\n  <input places-auto-complete\r\n         (place_changed)=\"placeChanged($event)\"\r\n         [types]=\"['geocode']\"\r\n         class=\"form-control\"/>\r\n\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<ngui-map [center]=\"center\" (click)=\"onClick($event)\">\r\n\r\n  <!--- marker dei feedback già inseriti -->\r\n  <marker *ngFor=\"let f of feedbacks\" [position]=\"f.coordinate\" (click)=\"feedbackDetails(f)\"></marker>\r\n\r\n  <!--- marker nuovi  --->\r\n  <marker *ngFor=\"let pos of positions\" [position]=\"pos\" (click)=\"markerClicked($event)\"></marker>\r\n\r\n</ngui-map>\r\n\r\n<div>\r\n    {{currentUser.address}} <br>\r\n    {{currentUser.city}}\r\n  \r\n</div>\r\n\r\n<div>\r\n  Export all feedbacks\r\n  <button (click)=\"exportFeedbacks()\">Export</button>\r\n  <a download=\"Feedbacks.xlsx\" href=\"{{ url }}\" target=\"_blank\">download</a>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_modal_feedback_modal_component__ = __webpack_require__("../../../../../src/app/feedback-modal/feedback-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__ = __webpack_require__("../../../../../src/app/_services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_details_modal_feedback_details_modal_component__ = __webpack_require__("../../../../../src/app/feedback-details-modal/feedback-details-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as FileSaver from "file-saver";
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
        var modal = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__feedback_details_modal_feedback_details_modal_component__["a" /* FeedbackDetailsModalComponent */]);
        modal.componentInstance.model = feedback;
    };
    HomeComponent.prototype.markerClicked = function (_a) {
        var marker = _a.target;
        this.marker.lat = marker.getPosition().lat();
        this.marker.lng = marker.getPosition().lng();
        var modal = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */]);
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
        var _this = this;
        this.feedbackService.export2(2018).subscribe(function (response) {
            //var r: any;
            // r = response as any;
            //let file = new Blob([r.blob()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            //let fileName = r.headers.get('Content-Disposition').split(';')[1].trim().split('=')[1];
            //FileSaver.saveAs(file, fileName);      
            //var b: any;
            //b = blob as any;
            var r;
            r = response;
            _this.url = r.data;
            //this.url = "http://www.pdf995.com/samples/pdf.pdf";
            //var downloadUrl = URL.createObjectURL(response);
            //window.open(r.data, "_blank");
            //var link = document.createElement('a');
            //link.href = window.URL.createObjectURL(response);
            //link.href = r.data;
            //link.download = r.data;
            //link.click();
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            moduleId: module.i.toString()
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_feedback_service__["a" /* FeedbackService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #loginForm {\r\n   background-image: url(\"http://i66.tinypic.com/10ni3ar.jpg\") !important;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n          <span class=\"anchor\" id=\"formLogin\"></span>\r\n\r\n          <div class=\"card rounded-0\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"mb-0\">Login</h3>\r\n            </div>\r\n            <div class=\"card-body\" id=\"loginForm\">\r\n\r\n              <form class=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !eMail.valid }\">\r\n                  <label for=\"email\">Email</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"eMail\" [(ngModel)]=\"model.eMail\" #eMail=\"ngModel\" required />\r\n                  <div *ngIf=\"f.submitted && !eMail.valid\" class=\"help-block\">L'eMail è richiesta!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" class=\"form-control form-control-lg rounded-0\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                  <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">La password è richiesta!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                  <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Registrazione</a>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.eMail, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error("Username o password errati");
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            moduleId: module.i.toString()
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #registerForm {\r\n   background-image: url(\"http://i66.tinypic.com/10ni3ar.jpg\") !important;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n          <span class=\"anchor\" id=\"formLogin\"></span>\r\n\r\n          <div class=\"card rounded-0\">\r\n            <div class=\"card-header\">\r\n              <h3 class=\"mb-0\">Registrazione</h3>\r\n            </div>\r\n\r\n            <div class=\"card-body\" id=\"registerForm\">\r\n\r\n              <form class=\"form\" name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n                  <label for=\"firstName\">Nome</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"firstName\"\r\n                         [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\r\n                         required />\r\n                  <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Il nome è richiesto!</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n                  <label for=\"lastName\">Cognome</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"lastName\"\r\n                         [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\"\r\n                         required />\r\n                  <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Il cognome è richiesto!</div>\r\n                </div>\r\n\r\n               \r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !eMail.valid }\">\r\n                  <label for=\"eMail\">eMail</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"eMail\"\r\n                         [(ngModel)]=\"model.eMail\" #eMail=\"ngModel\" ngControl=\"eMail\"\r\n                         pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\"\r\n                         required />\r\n                  <!--<div *ngIf=\"f.submitted && !eMail.valid\" class=\"help-block\">L'email è richiesta!</div>-->\r\n                  <!--<div class=\"help-block\" [hidden]=\"email.valid || email.untouched\">\r\n      <div class=\"help-block\" *ngIf=\"email.errors && email.errors.required\">\r\n        Email is required\r\n      </div>-->\r\n                  <div class=\"help-block\" *ngIf=\"f.submitted && eMail.errors\">\r\n                    Email is invalid\r\n                  </div>\r\n                  <!--</div>-->\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" class=\"form-control form-control-lg rounded-0\" name=\"password\"\r\n                         [(ngModel)]=\"model.password\" #password=\"ngModel\" minlength=\"6\"\r\n                         required />\r\n                  <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">La password è richiesta!</div>-->\r\n                  <div *ngIf=\"f.submitted && (password.hasError('minlength') || !password.valid)\" class=\"help-block\">\r\n                    <span>La password deve contenere almeno 6 caratteri!</span>\r\n                  </div>  \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"address\">Indirizzo (via)</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"address\"\r\n                         [(ngModel)]=\"model.address\" #address=\"ngModel\" />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"house_number\">Numero della via</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"house_number\"\r\n                         [(ngModel)]=\"model.house_number\" #house_number=\"ngModel\" />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"cap\">CAP</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"cap\"\r\n                         [(ngModel)]=\"model.cap\" #cap=\"ngModel\" />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"city\">Città</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"city\"\r\n                         [(ngModel)]=\"model.city\" #city=\"ngModel\" />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"fiscal_code\">Codice Fiscale</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"fiscal_code\" minlength=\"17\" maxlength=\"17\"\r\n                         [(ngModel)]=\"model.fiscal_code\" #fiscal_code=\"ngModel\" />\r\n                  <div *ngIf=\"f.submitted && (fiscal_code.hasError('minlength') || fiscal_code.hasError('maxlength'))\" class=\"help-block\">\r\n                    <span>Il codice fiscale deve avere 17 caratteri!</span>\r\n                  </div> \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"tel_number\">Numero di telefono</label>\r\n                  <input type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"tel_number\"\r\n                         [(ngModel)]=\"model.tel_number\" #tel_number=\"ngModel\" />\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\">Conferma</button>\r\n                  <img *ngIf=\"loading\"\r\n                       src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                  <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancella</a>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registrazione completata con successo!', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error.error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            moduleId: module.i.toString()
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  report works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map