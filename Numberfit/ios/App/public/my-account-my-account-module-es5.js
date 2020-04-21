function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyAccountMyAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


<<<<<<< HEAD
    __webpack_exports__["default"] = "<ion-header>\n  <meta charset=\"UTF-8\">\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n<ion-card>\n  <ion-card-header>\n    <ion-title class=\"welcome-card-title\">My Account</ion-title>\n  </ion-card-header>\n  <ion-card-content>\n    <form [formGroup]=\"modifyDetailsFormGroup\">\n    <ion-item style=\"margin-top: 20px;\">\n      <ion-label>Name</ion-label>\n      <ion-input value={{name}} readonly style=\"text-align: right;\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input value={{email}} readonly type=\"email\" style=\"text-align: right;\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Year Group</ion-label>\n      <ion-select\n            formControlName=\"year\" multiple=\"false\"\n            cancelText=\"Cancel\" okText=\"Select\">\n            <ion-select-option *ngFor=\"let year of yearGroups\" value={{year}}>\n              {{year}}\n            </ion-select-option>\n          </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>School</ion-label>\n      <ion-select\n            formControlName=\"school\" id=\"schoolSelect\"\n            multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\">\n            <ion-select-option *ngFor=\"let school of schoolList\" value={{school}}>\n              {{school}}\n            </ion-select-option>\n          </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Change Password</ion-label>\n      <ion-input formControlName=\"password1\" type='password'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Comfirm Password</ion-label>\n      <ion-input formControlName=\"password2\" type='password'></ion-input>\n    </ion-item>\n    <br>\n    <ion-button\n          (click)=\"modifyDetails()\"\n          expand='block'>\n          Confirm Changes\n    </ion-button>\n    </form>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n";
=======
    __webpack_exports__["default"] = "<ion-header>\n  <meta charset=\"UTF-8\">\n  <ion-toolbar>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content\" fullscreen>\n<ion-card>\n  <ion-card-header>\n    <ion-title class=\"welcome-card-title\">My Account</ion-title>\n  </ion-card-header>\n  <ion-card-content>\n    <form [formGroup]=\"modifyDetailsFormGroup\">\n    <ion-item style=\"margin-top: 20px;\">\n      <ion-label>Name</ion-label>\n      <ion-input value={{name}} readonly style=\"text-align: right;\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input value={{email}} readonly type=\"email\" style=\"text-align: right;\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Year Group</ion-label>\n      <ion-select\n            formControlName=\"year\" multiple=\"false\"\n            cancelText=\"Cancel\" okText=\"Select\">\n            <ion-select-option *ngFor=\"let year of yearGroups\" value={{year}}>\n              {{year}}\n            </ion-select-option>\n          </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>School</ion-label>\n      <ion-select\n            formControlName=\"school\" id=\"schoolSelect\"\n            multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\">\n            <ion-select-option *ngFor=\"let school of schoolList\" value={{school}}>\n              {{school}}\n            </ion-select-option>\n          </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Change Password</ion-label>\n      <ion-input formControlName=\"password1\" type='password'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Comfirm Password</ion-label>\n      <ion-input formControlName=\"password2\" type='password'></ion-input>\n    </ion-item>\n    <br>\n    <ion-button\n          (click)=\"modifyDetails()\"\n          expand='block'>\n          Confirm Changes\n    </ion-button>\n    </form>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n";
>>>>>>> save-cookie
    /***/
  },

  /***/
  "./src/app/my-account/my-account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-account/my-account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyAccountPageRoutingModule */

  /***/
  function srcAppMyAccountMyAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageRoutingModule", function () {
      return MyAccountPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var routes = [{
      path: '',
      component: _my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
    }];

    var MyAccountPageRoutingModule = function MyAccountPageRoutingModule() {
      _classCallCheck(this, MyAccountPageRoutingModule);
    };

    MyAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyAccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.module.ts ***!
    \*************************************************/

  /*! exports provided: MyAccountPageModule */

  /***/
  function srcAppMyAccountMyAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function () {
      return MyAccountPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-account-routing.module */
    "./src/app/my-account/my-account-routing.module.ts");
    /* harmony import */


    var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var MyAccountPageModule = function MyAccountPageModule() {
      _classCallCheck(this, MyAccountPageModule);
    };

    MyAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountPageRoutingModule"]],
      declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })], MyAccountPageModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyAccountMyAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-account/my-account.page.ts ***!
    \***********************************************/

  /*! exports provided: MyAccountPage */

  /***/
  function srcAppMyAccountMyAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPage", function () {
      return MyAccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ts-md5/dist/md5 */
    "./node_modules/ts-md5/dist/md5.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);

    var MyAccountPage =
    /*#__PURE__*/
    function () {
      function MyAccountPage(router, route, formBuilder) {
        _classCallCheck(this, MyAccountPage);

        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.yearGroups = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];
        this.schoolList = ['UCL', 'LSE', 'Imperial'];
        this.name = "Loading..";
        this.email = "Loading..";
        this.modifyDetailsFormGroup = formBuilder.group({
          // name: ["", [Validators.required]],
          // email: ["", [Validators.required, Validators.email]],
          password1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          password2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          year: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          school: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(MyAccountPage, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          var xhttpDetails = new XMLHttpRequest();
          var DOM = this;

          xhttpDetails.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              console.log("GET details request succeeded");
              DOM.userObj = JSON.parse(this.responseText);
              DOM.changeToLoadedData();
            } else if (this.status != 200) {
              console.log("GET request failed with status " + this.status);
            }
          }; // Define and send the GET request


          xhttpDetails.open("GET", "http://localhost:3000/myDetails?cookie=" + this.cookie, true);
          xhttpDetails.send();
        }
      }, {
        key: "modifyDetails",
        value: function modifyDetails() {
          var DOM = this;
          var password1 = this.modifyDetailsFormGroup.value.password1;
          var password2 = this.modifyDetailsFormGroup.value.password2;
          var credentials = {
            // username : this.modifyDetailsFormGroup.value.email.toLowerCase(),
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"].hashStr(password1),
            // name     : this.modifyDetailsFormGroup.value.name,
            year: this.modifyDetailsFormGroup.value.year,
            school: this.modifyDetailsFormGroup.value.school
          };

          if (password1 == password2 && password1.length > 7) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                var cookie = JSON.parse(this.responseText);
                console.log(cookie);
              } else if (this.status != 200) {
                console.log(this.responseText);
              }
            };

            console.log(credentials);
            xhttp.open('POST', 'http://localhost:3000/modifyDetails', true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(credentials));
          } else {
            // error!!!
            alert("Please ensure your password is at least 8 characters and matches the confirmation field");
          }
        }
      }, {
        key: "changeToLoadedData",
        value: function changeToLoadedData() {
          this.modifyDetailsFormGroup.reset({
            school: this.userObj.school,
            year: "Year " + this.userObj.year
          });
          this.name = this.userObj.name;
          this.email = this.userObj.username;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
<<<<<<< HEAD
          // this.cookie = this.route.snapshot.paramMap.get('cookie');
          // console.log(this.cookie);
=======
          this.cookie = this.route.snapshot.paramMap.get('cookie');
          console.log(this.cookie);
>>>>>>> save-cookie
          this.getUserDetails(); // this.modifyDetailsFormGroup.reset({name: this.userObj.name});
          // this.modifyDetailsFormGroup.get('name').setValue(this.userObj.name);
        }
      }]);

      return MyAccountPage;
    }();

    MyAccountPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    MyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-account.page.scss */
      "./src/app/my-account/my-account.page.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], MyAccountPage);
    /***/
  }
}]);
//# sourceMappingURL=my-account-my-account-module-es5.js.map