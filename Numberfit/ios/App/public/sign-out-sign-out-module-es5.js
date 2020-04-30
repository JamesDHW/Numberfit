function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-out-sign-out-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-out/sign-out.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-out/sign-out.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignOutSignOutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><img class=\"header-image\" src=\"/assets/NumberfitLogo.png\"/></ion-title>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css\"/>\n</ion-header>\n\n<ion-content class=\"ion-content\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-content>\n      <ion-card-header>\n        <ion-card-title class=\"welcome-card-title\">Sign Out?</ion-card-title>\n      </ion-card-header>\n      <section class=\"center\">\n        <h2>Are You Sure You Want to Sign Out?</h2>\n        <ion-button\n        (click)=\"signOut()\" style=\"margin: 10%;\" fill=\"solid\"\n        size=\"medium\" color=\"danger\" routerLink=\"../sign-in\">\n          Sign Out\n        </ion-button>\n      </section>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/config.json":
  /*!*****************************!*\
    !*** ./src/app/config.json ***!
    \*****************************/

  /*! exports provided: server, bucket, default */

  /***/
  function srcAppConfigJson(module) {
    module.exports = JSON.parse("{\"server\":\"http://primaryapp-env.eba-rer8nine.us-west-2.elasticbeanstalk.com\",\"bucket\":\"https://primary-app-resources.s3.eu-west-2.amazonaws.com\"}");
    /***/
  },

  /***/
  "./src/app/sign-out/sign-out.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/sign-out/sign-out.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppSignOutSignOutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sign_out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-out.page */
    "./src/app/sign-out/sign-out.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _sign_out_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_sign_out_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/sign-out/sign-out.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/sign-out/sign-out.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignOutSignOutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".f1 {\n  font-size: medium;\n  font-weight: 500;\n}\n\nheader {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-align: center;\n}\n\n.center {\n  text-align: center;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3NpZ24tb3V0L3NpZ24tb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1vdXQvc2lnbi1vdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaWduLW91dC9zaWduLW91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZjEge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG4iLCIuZjEge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sign-out/sign-out.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-out/sign-out.page.ts ***!
    \*******************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppSignOutSignOutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(nativeStorage, router, http) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.nativeStorage = nativeStorage;
        this.router = router;
        this.http = http; // server : string = "http://localhost:3000";

        this.server = __webpack_require__(
        /*! ../config.json */
        "./src/app/config.json").server; // Get cookie from storage

        this.nativeStorage.getItem('cookie').then(function (data) {
          _this.cookie = data.cookie;
        });
      }

      _createClass(HomePage, [{
        key: "signOut",
        value: function signOut() {
          var _this2 = this;

          // console.log("send to", this.server+"/logout?session="+this.cookie)
          this.http.get(this.server + "/logout?session=" + this.cookie, {}, {}).then(function (data) {
            _this2.nativeStorage.setItem('cookie', {
              cookie: "-"
            }).then(function () {
              console.log("Cookie removed!");

              _this2.router.navigate(['/sign-in']);
            }, function (error) {
              return console.error('Error storing item', error);
            });
          })["catch"](function (error) {
            console.log("status", error.status);
            console.log("error", error.error);

            _this2.presentAlert("Connection", "Failed to sign out.");
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(header, msg) {
          var alert = document.createElement('ion-alert');
          alert.header = header;
          alert.message = msg;
          alert.buttons = ['OK'];
          document.body.appendChild(alert);
          alert.present();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-sign-out',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-out.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-out/sign-out.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-out.page.scss */
      "./src/app/sign-out/sign-out.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=sign-out-sign-out-module-es5.js.map