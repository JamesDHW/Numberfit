(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-multi-play-multi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content class=\"ion-multi-content\">\n  <ion-row>\n    <ion-col size=\"10\">\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">5</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">8</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">10</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button-rotate\" (click)=\"updateProgressTop()\">\n              <span class=\"font\">6</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n      <ion-card class=\"card-rotate\">\n        <ion-card-content>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"2\" class=\"top-right-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{top_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"middle-progress-section\">\n    <ion-col size=\"5\" class=\"middle-progress-bar-left\">\n      <img src=\"/assets/progress-multiplayer/{{middle_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"2\" class=\"middle-center\">\n      <img src=\"/assets/progress-multiplayer/{{middle_center}}.png\"/>\n    </ion-col>\n    <ion-col size=\"5\" class=\"middle-progress-bar-right\">\n      <img src=\"/assets/progress-multiplayer/{{middle_right}}.png\"/>\n    </ion-col>\n  </ion-row>\n  <!-- <section class=\"section\">\n    <img src=\"/assets/progress-multiplayer/Picture1.png\"/>\n  </section> -->\n  <ion-row>\n    <ion-col size=\"2\" class=\"bottom-left-progress-bar\">\n      <img src=\"/assets/progress-multiplayer/{{bottom_left}}.png\"/>\n    </ion-col>\n    <ion-col size=\"10\" >\n      <ion-card class=\"card\">\n        <ion-card-content>\n        </ion-card-content>\n      </ion-card>\n      <section>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">5</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">8</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"choice-row\">\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">10</span>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"choice-section\">\n            <ion-button shape=\"round\" fill=\"outline\" class=\"choice-button\" (click)=\"updateProgressBottom()\">\n              <span class=\"font\">6</span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </section>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/play-multi/play-multi-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/play-multi/play-multi-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PlayMultiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPageRoutingModule", function() { return PlayMultiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _play_multi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play-multi.page */ "./src/app/play-multi/play-multi.page.ts");




const routes = [
    {
        path: '',
        component: _play_multi_page__WEBPACK_IMPORTED_MODULE_3__["PlayMultiPage"]
    }
];
let PlayMultiPageRoutingModule = class PlayMultiPageRoutingModule {
};
PlayMultiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayMultiPageRoutingModule);



/***/ }),

/***/ "./src/app/play-multi/play-multi.module.ts":
/*!*************************************************!*\
  !*** ./src/app/play-multi/play-multi.module.ts ***!
  \*************************************************/
/*! exports provided: PlayMultiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPageModule", function() { return PlayMultiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-multi-routing.module */ "./src/app/play-multi/play-multi-routing.module.ts");
/* harmony import */ var _play_multi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play-multi.page */ "./src/app/play-multi/play-multi.page.ts");







let PlayMultiPageModule = class PlayMultiPageModule {
};
PlayMultiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _play_multi_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayMultiPageRoutingModule"]
        ],
        declarations: [_play_multi_page__WEBPACK_IMPORTED_MODULE_6__["PlayMultiPage"]]
    })
], PlayMultiPageModule);



/***/ }),

/***/ "./src/app/play-multi/play-multi.page.scss":
/*!*************************************************!*\
  !*** ./src/app/play-multi/play-multi.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Bevan);\n.ion-multi-content {\n  --background: url(\"/assets/progress-singleplayer/background_image.jpg\") 100% 100%;\n}\nion-row {\n  height: 45%;\n}\n.card {\n  background: #fff;\n  width: 90%;\n  height: 150px;\n  opacity: 30%;\n}\n.middle-progress-section {\n  height: 7%;\n}\n.middle-progress-bar-left {\n  margin-top: 5px;\n}\n.middle-progress-bar-right {\n  margin-bottom: 6px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.choice-section {\n  size: \"6\";\n  text-align: center;\n}\n.choice-button {\n  width: 100px;\n  height: 30px;\n  --border-color:white;\n  --box-shadow: 2px 2px 2px black;\n}\n.choice-button:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.font {\n  font-family: \"Bevan\";\n  font-size: 20px;\n  color: #f7e226;\n  text-align: center;\n  text-shadow: 1px 1px 1px #000, 3px 3px 5px #000;\n  display: inline-block;\n  -ms-transform: rotate(25deg);\n  -webkit-transform: rotate(10deg);\n}\n.bottom-left-progress-bar {\n  margin-top: 5px;\n}\n.top-right-progress-bar {\n  margin-bottom: 5px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.choice-button-rotate {\n  width: 100px;\n  height: 30px;\n  --border-color:white;\n  --box-shadow: 2px 2px 2px black;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.choice-button-rotate:active {\n  margin-top: 3px;\n  --box-shadow: none;\n}\n.card-rotate {\n  background: #fff;\n  width: 90%;\n  height: 150px;\n  opacity: 30%;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.middle-center {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes example {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n@keyframes example {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(1800deg);\n            transform: rotate(1800deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW1lcy9naXRodWIvTnVtYmVyZml0L051bWJlcmZpdC9zcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYXktbXVsdGkvcGxheS1tdWx0aS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMERBQUE7QUFFUjtFQUNJLGlGQUFBO0FDQUo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE9BO0VBQ0UsZ0JBQUE7RUFHQSxVQUFBO0VBQ0EsYUFBQTtFQUlBLFlBQUE7QUNURjtBRGtCQTtFQUNJLFVBQUE7QUNmSjtBRG9CQTtFQUNJLGVBQUE7QUNqQko7QURvQkE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNqQko7QURvQkE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUNqQko7QURvQkE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBR0EsK0JBQUE7QUNyQko7QURzQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR3QkE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ3hCSjtBRDJCQTtFQUNJLGVBQUE7QUN4Qko7QUQ0QkE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUN6Qko7QUQ0QkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFLQSxpQ0FBQTtVQUFBLHlCQUFBO0FDN0JKO0FEeUJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDdkJSO0FENEJBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDekJKO0FENEJBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDekJKO0FEMkJBO0VBQ0k7SUFBTSwrQkFBQTtZQUFBLHVCQUFBO0VDdkJSO0VEd0JFO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtFQ3JCUjtBQUNGO0FEa0JBO0VBQ0k7SUFBTSwrQkFBQTtZQUFBLHVCQUFBO0VDdkJSO0VEd0JFO0lBQU0sa0NBQUE7WUFBQSwwQkFBQTtFQ3JCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGxheS1tdWx0aS9wbGF5LW11bHRpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CZXZhbik7XG5cbi5pb24tbXVsdGktY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9wcm9ncmVzcy1zaW5nbGVwbGF5ZXIvYmFja2dyb3VuZF9pbWFnZS5qcGcnKSAxMDAlIDEwMCU7XG4gIH1cblxuLy8gICAucm93LXN0cnVjdHVyZXtcbi8vICAgICAtLWlvbi1ncmlkLWhlaWdodDogOTAlO1xuLy8gICB9XG5cbmlvbi1yb3cge1xuICAgIGhlaWdodDogNDUlO1xufVxuXG4uY2FyZHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgbWFyZ2luLXRvcDogNSU7XG4vLyAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuLy8gICBwYWRkaW5nLWxlZnQ6IDUlO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiA1JTtcbi8vICAgcGFkZGluZy1ib3R0b206IDUwJTtcbiAgb3BhY2l0eTogMzAlO1xufVxuXG4vLyAuc2VjdGlvbntcbi8vICAgICBoZWlnaHQ6IDclO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiA1JTtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuLy8gfVxuXG4ubWlkZGxlLXByb2dyZXNzLXNlY3Rpb257XG4gICAgaGVpZ2h0OiA3JTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMyU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLm1pZGRsZS1wcm9ncmVzcy1iYXItbGVmdHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLXJpZ2h0e1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG59XG5cbi5jaG9pY2Utc2VjdGlvbntcbiAgICBzaXplOiBcIjZcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuLmNob2ljZS1idXR0b257XG4gICAgLy8gc2l6ZTogbGFyZ2U7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAvLyBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAgIC8vIHNoYXBlLW91dHNpZGU6IHJvdW5kO1xuICAgIC8vIG9wYWNpdHk6IDAlO1xuICAgIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuLmZvbnR7XG4gICAgZm9udC1mYW1pbHk6IFwiQmV2YW5cIjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAvLyBsaW5lLWhlaWdodDogMTMwcHg7XG4gICAgY29sb3I6IHJnYigyNDcsIDIyNiwgMzgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogMjYwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAsIDNweCAzcHggNXB4ICMwMDA7ICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cblxuLmJvdHRvbS1sZWZ0LXByb2dyZXNzLWJhcntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRvcC1yaWdodC1wcm9ncmVzcy1iYXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jaG9pY2UtYnV0dG9uLXJvdGF0ZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOndoaXRlO1xuICAgIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gICAgJjphY3RpdmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNhcmQtcm90YXRle1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG9wYWNpdHk6IDMwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubWlkZGxlLWNlbnRlcntcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgICAwJSAgIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwKjVkZWcpO31cbn0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmV2YW4pO1xuLmlvbi1tdWx0aS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Byb2dyZXNzLXNpbmdsZXBsYXllci9iYWNrZ3JvdW5kX2ltYWdlLmpwZ1wiKSAxMDAlIDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDQ1JTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvcGFjaXR5OiAzMCU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3Mtc2VjdGlvbiB7XG4gIGhlaWdodDogNyU7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLWxlZnQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5taWRkbGUtcHJvZ3Jlc3MtYmFyLXJpZ2h0IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY2hvaWNlLXNlY3Rpb24ge1xuICBzaXplOiBcIjZcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hvaWNlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWJvcmRlci1jb2xvcjp3aGl0ZTtcbiAgLS1ib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbn1cbi5jaG9pY2UtYnV0dG9uOmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIkJldmFuXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmN2UyMjY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAsIDNweCAzcHggNXB4ICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5ib3R0b20tbGVmdC1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50b3AtcmlnaHQtcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY2hvaWNlLWJ1dHRvbi1yb3RhdGUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLS1ib3JkZXItY29sb3I6d2hpdGU7XG4gIC0tYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uY2hvaWNlLWJ1dHRvbi1yb3RhdGU6YWN0aXZlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jYXJkLXJvdGF0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9wYWNpdHk6IDMwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLm1pZGRsZS1jZW50ZXIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODAwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/play-multi/play-multi.page.ts":
/*!***********************************************!*\
  !*** ./src/app/play-multi/play-multi.page.ts ***!
  \***********************************************/
/*! exports provided: PlayMultiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMultiPage", function() { return PlayMultiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let PlayMultiPage = class PlayMultiPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        var subject = this.activatedRoute.snapshot.paramMap.get("subject");
        console.log(subject);
        //progress bar
        this.lion_progress = 0;
        this.tiger_progress = 0;
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.top_right = 'tiger' + this.images[this.tiger_progress];
        this.bottom_left = 'lion' + this.images[this.lion_progress];
        this.middle_right = 'tiger' + this.images[9];
        this.middle_left = 'lion' + this.images[9];
        this.middle_center = 'middle-center';
    }
    updateProgressTop() {
        this.tiger_progress = ++this.tiger_progress % this.images.length;
        if (this.tiger_progress <= 5) {
            this.top_right = 'tiger' + this.images[this.tiger_progress];
            this.middle_right = 'tiger' + this.images[9];
        }
        else {
            this.top_right = 'tiger0';
            this.middle_right = 'tiger' + this.images[this.tiger_progress];
        }
    }
    updateProgressBottom() {
        this.lion_progress = ++this.lion_progress % this.images.length;
        if (this.lion_progress <= 5) {
            this.bottom_left = 'lion' + this.images[this.lion_progress];
            this.middle_left = 'lion' + this.images[9];
        }
        else {
            this.bottom_left = 'lion0';
            this.middle_left = 'lion' + this.images[this.lion_progress];
        }
    }
};
PlayMultiPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PlayMultiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-play-multi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./play-multi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play-multi/play-multi.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./play-multi.page.scss */ "./src/app/play-multi/play-multi.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], PlayMultiPage);



/***/ })

}]);
//# sourceMappingURL=play-multi-play-multi-module-es2015.js.map