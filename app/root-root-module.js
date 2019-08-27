(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["root-root-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/root/root.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/root/root.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <header class=\"header-6\">\n        <div class=\"header-nav\">\n            <a class=\"nav-link nav-icon\">\n                <clr-icon shape=\"bars\"></clr-icon>\n            </a>\n            <a class=\"nav-link\">Target</a>\n        </div>\n    </header>\n\n    <div class=\"content-container\">\n        <nav class=\"sidenav\">\n            <section class=\"sidenav-content\">\n                <section class=\"nav-group collapsible\">\n                    <input id=\"admin-settings\" type=\"checkbox\">\n                    <label for=\"admin-settings\">Admin & Settings</label>\n                </section>\n\n                <section class=\"nav-group collapsible\">\n                    <input id=\"supply-management\" type=\"checkbox\">\n                    <label for=\"supply-management\">Supply Management</label>\n                    <ul class=\"nav-list\">\n                        <li>\n                            <a class=\"nav-link\">Inventory</a>\n                        </li>\n                    </ul>\n                </section>\n            </section>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/root/root-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/root/root-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/app/root/root.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _app_services_RouteGuard_route_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/RouteGuard/route-guard.service */ "./src/app/services/RouteGuard/route-guard.service.ts");






var routes = [
    { path: '', component: _root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"], canActivateChild: [_app_services_RouteGuard_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["RouteGuardService"]] }
];
var RootRoutingModule = /** @class */ (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]],
            imports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RootRoutingModule);
    return RootRoutingModule;
}());



/***/ }),

/***/ "./src/app/root/root.component.css":
/*!*****************************************!*\
  !*** ./src/app/root/root.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3Qvcm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/root/root.component.ts":
/*!****************************************!*\
  !*** ./src/app/root/root.component.ts ***!
  \****************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/preloader.service */ "./src/app/services/preloader.service.ts");



var RootComponent = /** @class */ (function () {
    function RootComponent(preloaderService) {
        this.preloaderService = preloaderService;
    }
    RootComponent.prototype.ngOnInit = function () {
        this.preloaderService.status = false;
    };
    RootComponent.ctorParameters = function () { return [
        { type: _app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__["PreloaderService"] }
    ]; };
    RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/index.js!./src/app/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/root/root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__["PreloaderService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/root/root.module.ts":
/*!*************************************!*\
  !*** ./src/app/root/root.module.ts ***!
  \*************************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-routing.module */ "./src/app/root/root-routing.module.ts");




var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _root_routing_module__WEBPACK_IMPORTED_MODULE_3__["RootRoutingModule"]
            ]
        })
    ], RootModule);
    return RootModule;
}());



/***/ })

}]);
//# sourceMappingURL=root-root-module.js.map