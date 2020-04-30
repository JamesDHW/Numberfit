(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subject-select-subject-select-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title id=\"title\" class=\"welcome-card-title\">Subject Select</ion-card-title>\n    </ion-card-header>\n      <ion-list *ngFor=\"let sub of subjects\">\n        <ion-item>\n          <ion-label (click)=\"navigate(sub.Topic)\">{{sub.Topic}}</ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/config.json":
/*!*****************************!*\
  !*** ./src/app/config.json ***!
  \*****************************/
/*! exports provided: server, bucket, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");

/***/ }),

/***/ "./src/app/subject-select/default_subjects.json":
/*!******************************************************!*\
  !*** ./src/app/subject-select/default_subjects.json ***!
  \******************************************************/
/*! exports provided: availableTopics, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"availableTopics\":[{\"Topic\":\"Addition\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Subtraction\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Multiplication\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Division\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"PlaceValue\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Decimals\",\"availableYears\":[4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Length\",\"availableYears\":[1,2,3,4,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Time\",\"availableYears\":[1,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Fractions\",\"availableYears\":[1,2,5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]},{\"Topic\":\"Operations\",\"availableYears\":[5,6],\"availableColours\":[\"Red\",\"Blue\",\"Green\"]}]}");

/***/ }),

/***/ "./src/app/subject-select/subject-select-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/subject-select/subject-select-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubjectSelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPageRoutingModule", function() { return SubjectSelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subject_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-select.page */ "./src/app/subject-select/subject-select.page.ts");




const routes = [
    {
        path: '',
        component: _subject_select_page__WEBPACK_IMPORTED_MODULE_3__["SubjectSelectPage"]
    }
];
let SubjectSelectPageRoutingModule = class SubjectSelectPageRoutingModule {
};
SubjectSelectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubjectSelectPageRoutingModule);



/***/ }),

/***/ "./src/app/subject-select/subject-select.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/subject-select/subject-select.module.ts ***!
  \*********************************************************/
/*! exports provided: SubjectSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPageModule", function() { return SubjectSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-select-routing.module */ "./src/app/subject-select/subject-select-routing.module.ts");
/* harmony import */ var _subject_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject-select.page */ "./src/app/subject-select/subject-select.page.ts");







let SubjectSelectPageModule = class SubjectSelectPageModule {
};
SubjectSelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subject_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubjectSelectPageRoutingModule"]
        ],
        declarations: [_subject_select_page__WEBPACK_IMPORTED_MODULE_6__["SubjectSelectPage"]]
    })
], SubjectSelectPageModule);



/***/ }),

/***/ "./src/app/subject-select/subject-select.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/subject-select/subject-select.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qtc2VsZWN0L3N1YmplY3Qtc2VsZWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/subject-select/subject-select.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/subject-select/subject-select.page.ts ***!
  \*******************************************************/
/*! exports provided: SubjectSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSelectPage", function() { return SubjectSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





let SubjectSelectPage = class SubjectSelectPage {
    constructor(router, activatedRoute, nativeStorage, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        this.subject = "Addition"; // Default to Addition
        this.subjects = __webpack_require__(/*! ./default_subjects.json */ "./src/app/subject-select/default_subjects.json").availableTopics;
        this.gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
        // Get cookie from storage
        this.nativeStorage.getItem('cookie')
            .then((data) => { this.cookie = data.cookie; });
        // Get user from storage
        this.nativeStorage.getItem('user')
            .then((data) => {
            this.user = data;
            this.http.get("http://api.numberfit.com:8081/getAvailableTopics", {}, {})
                .then(data => {
                this.subjects = JSON.parse(data.data).availableTopics;
                let repeats = this.subjects.length;
                let deletes = 0;
                for (var i = 0; i < repeats; i++) {
                    if (!this.user["year"]) {
                        this.user["year"] = 6;
                    }
                    if (!this.subjects[i - deletes].availableYears.includes(parseInt(this.user["year"]))) {
                        this.subjects.splice(i - deletes, 1);
                        deletes += 1;
                    }
                }
            })
                .catch(error => {
                console.log("status", error.status);
                console.log("error", error.error);
                this.presentAlert("Connection", "Error in retrieving available topics.");
            });
        });
    }
    navigate(topic) {
        let gamemode = this.activatedRoute.snapshot.paramMap.get("gamemode");
        if (Number(gamemode) === 0) {
            this.router.navigate(['/play-single', topic]);
        }
        else {
            this.router.navigate(['/play-multi', topic]);
        }
    }
    ngOnInit() {
        // Set the title according to the gamemode
        if (Number(this.gamemode) === 0) {
            document.getElementById("title").textContent = "Single Player";
        }
        else {
            document.getElementById("title").textContent = "Head-to-Head";
        }
    }
    presentAlert(header, msg) {
        const alert = document.createElement('ion-alert');
        alert.header = header;
        alert.message = msg;
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        alert.present();
    }
};
SubjectSelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
SubjectSelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-subject-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-select.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject-select/subject-select.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subject-select.page.scss */ "./src/app/subject-select/subject-select.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
], SubjectSelectPage);



/***/ })

}]);
//# sourceMappingURL=subject-select-subject-select-module-es2015.js.map