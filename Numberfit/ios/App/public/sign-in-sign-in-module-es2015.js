(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.esm.js\"></script>\n    <script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.js\"></script>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title class=\"welcome-card-title\">Sign In</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"welcome-card\">\n      <form [formGroup]=\"signInFormGroup\">\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-button\n          (click)=\"signIn()\" [disabled]=\"signInFormGroup.invalid\"\n          expand=\"block\" fill=\"clear\">\n          Sign In\n        </ion-button>\n      </form>\n      <ion-button\n        expand=\"block\" fill=\"clear\"\n        routerLink=\"../register\" routerDirection=\"forward\">\n        Register\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sign-in/sign-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.button1 {\n  width: 100px;\n  margin-top: 40px;\n  color: \"secondary\";\n  size: \"medium\";\n}\n\n.button2 {\n  width: 100px;\n  margin-top: 15px;\n  color: \"secondary\";\n  size: \"medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gIC5idXR0b24xIHtcbiAgICB3aWR0aDogMTAwcHg7IFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XG4gICAgc2l6ZTogXCJtZWRpdW1cIjsgXG4gIH1cblxuICAuYnV0dG9uMiB7XG4gICAgd2lkdGg6IDEwMHB4OyBcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiBcInNlY29uZGFyeVwiO1xuICAgIHNpemU6IFwibWVkaXVtXCI7IFxuICB9IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJ1dHRvbjEge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiBcInNlY29uZGFyeVwiO1xuICBzaXplOiBcIm1lZGl1bVwiO1xufVxuXG4uYnV0dG9uMiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XG4gIHNpemU6IFwibWVkaXVtXCI7XG59Il19 */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);








let SignInPage = class SignInPage {
    constructor(screenOrientation, nativeStorage, router, http, formBuilder) {
        this.screenOrientation = screenOrientation;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.http = http;
        this.server = __webpack_require__(/*! ../config.json */ "./src/app/config.json").server;
        // lock screen portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        // Get cookie from storage
        this.cookie = this.nativeStorage.getItem('cookie');
        // Initialise sign in form group
        this.signInFormGroup = formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    signIn() {
        // Get credentials from form
        const credentials = {
            'username': this.signInFormGroup.value.email.toLowerCase(),
            'password': ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.signInFormGroup.value.password)
        };
        console.log("credentials", credentials);
        console.log("password", this.signInFormGroup.value.password);
        this.http.setDataSerializer('json');
        this.http.post(this.server + "/login", credentials, { 'Content-Type': 'application/json' })
            .then(data => {
            var user = JSON.parse(data.data);
            // console.log("user: ", user)
            this.nativeStorage.setItem('cookie', { cookie: user.cookie })
                .then(() => {
                var savedUser = {
                    username: user.username,
                    name: user.name,
                    school: user.school,
                    teacher: user.teacher,
                };
                if (!user.teacher) {
                    savedUser["year"] = user.year;
                    savedUser["points"] = user.points;
                    savedUser["mTeacher"] = user.mTeacher;
                }
                //save info
                this.nativeStorage.setItem('user', savedUser)
                    .then(() => {
                    // console.log("got to play")
                    this.router.navigate(['/play']);
                }, error => console.error('Error storing user', error));
            }, error => console.error('Error storing cookie', error));
        })
            .catch(error => {
            console.log("error here", error.error);
            if (error.error["errors"] == "No user found") {
                this.presentAlert("Credentials", "Invalid credentials.");
            }
            else {
                this.presentAlert("Connection", "Error logging in to Numberfit.");
            }
        });
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
SignInPage.ctorParameters = () => [
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map