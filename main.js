(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  min-height: 90vh;\r\n  padding-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!v2\">\r\n  <essential-header></essential-header>\r\n  <essential (v2on)=\"activateV2()\"></essential>\r\n</div>\r\n\r\n\r\n    \r\n<!--<table>\r\n  <tr *ngFor='let credential of sample, index as i'>\r\n    <td>\r\n      <div style=\"flex: 3;margin-left: 17px;font-size: 24px;margin-top: -7px;\">{{credential}}</div>\r\n    </td>\r\n    <td>\r\n      <essential-nav style=\"flex: 1;\" [icon]=\"'user'\" [style]=\"iconstyle.user[i]\" (click)=\"iconToggleColor(i,'user','click')\" (mouseover)=\"iconToggleColor(i,'user','hover')\"></essential-nav>\r\n    </td>\r\n    <td>\r\n      <essential-nav style=\"flex: 1;\" [icon]=\"'pass'\" [style]=\"iconstyle.pass[i]\" (click)=\"iconToggleColor(i,'pass','click')\" (mouseover)=\"iconToggleColor(i,'pass','hover')\"></essential-nav>\r\n    </td>\r\n  </tr>\r\n</table>-->\r\n\r\n<!--<div>\r\n  <essential-nav [icon]=\"'cookie'\"></essential-nav>\r\n  <essential-nav [icon]=\"'timer'\"></essential-nav>\r\n  <essential-nav [icon]=\"'mail'\"></essential-nav>\r\n  <essential-nav [icon]=\"'daily'\"></essential-nav>\r\n  <essential-nav [icon]=\"'month'\"></essential-nav>\r\n  <essential-nav [icon]=\"'build'\"></essential-nav>\r\n  <essential-nav [icon]=\"'testlink'\"></essential-nav>\r\n  <essential-nav [icon]=\"'server'\"></essential-nav>\r\n  <essential-nav [icon]=\"'ims'\"></essential-nav>\r\n  <essential-nav [icon]=\"'tfs'\" [style]=\"{fill: '#2ecc71'}\"></essential-nav>\r\n  <essential-nav [icon]=\"'user'\"></essential-nav>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.v2 = false;
        this.sample = ["VPN", "JIRA", "OFFICE", "CEDRIC", "LIPPI"];
        this.setDefaultStylesForIcons();
    }
    AppComponent.prototype.activateV2 = function () {
        this.v2 = true;
    };
    AppComponent.prototype.iconToggleColor = function (index, iconname, event) {
        if (this.iconstyle.freezeCredentialStyleChange)
            return;
        this.setNormalStyleToAllIcons();
        switch (iconname) {
            case 'user':
                this.iconstyle.user[index] = this.handleEvent(event);
                break;
            case 'pass':
                this.iconstyle.pass[index] = this.handleEvent(event);
                break;
            default:
        }
    };
    AppComponent.prototype.handleEvent = function (event) {
        var _this = this;
        if (event == 'click') {
            this.iconstyle.freezeCredentialStyleChange = true;
            window.setTimeout(function () { return _this.iconstyle.freezeCredentialStyleChange = false; }, 1500);
            return this.defaultstyles.clicked;
        }
        else {
            return this.defaultstyles.hover;
        }
    };
    AppComponent.prototype.setDefaultStylesForIcons = function () {
        this.defaultstyles = {};
        this.defaultstyles.normal = { 'fill': '#7f8c8d' };
        this.defaultstyles.clicked = { 'fill': '#27ae60' };
        this.defaultstyles.hover = { 'fill': '#34495e' };
        this.iconstyle = {};
        this.iconstyle.user = [];
        this.iconstyle.pass = [];
        this.iconstyle.freezeCredentialStyleChange = false;
        this.setNormalStyleToAllIcons();
    };
    AppComponent.prototype.setNormalStyleToAllIcons = function () {
        for (var j = 0; j < 5; j++) {
            this.iconstyle.user[j] = this.defaultstyles.normal;
            this.iconstyle.pass[j] = this.defaultstyles.normal;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _essential_header_essential_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./essential-header/essential-header.component */ "./src/app/essential-header/essential-header.component.ts");
/* harmony import */ var _essential_essential_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./essential/essential.component */ "./src/app/essential/essential.component.ts");
/* harmony import */ var _essential_nav_essential_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./essential-nav/essential-nav.component */ "./src/app/essential-nav/essential-nav.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//ngx-bootstrap



//ngx-bootstrap









//material




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _essential_header_essential_header_component__WEBPACK_IMPORTED_MODULE_9__["EssentialHeaderComponent"],
                _essential_essential_component__WEBPACK_IMPORTED_MODULE_10__["EssentialComponent"],
                _essential_nav_essential_nav_component__WEBPACK_IMPORTED_MODULE_11__["EssentialNavComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgDatepickerModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_1__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/essential-header/essential-header.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/essential-header/essential-header.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control {\r\n  display: inline-block;\r\n  margin-right: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n.serverNumberinput {\r\n  height: 20px;\r\n  width: 50px;\r\n  margin-left: 15px;\r\n  float: right\r\n}\r\n\r\n.addnewInput {\r\n  border: none;\r\n  border-bottom: solid 1px grey;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/essential-header/essential-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/essential-header/essential-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-light bg-light sticky-top\">\r\n  <a class=\"navbar-brand\" href=\"#\"><span style=\"color:mediumaquamarine; font-weight:100\">Essentials</span><span style=\"color:aquamarine\">|</span></a>\r\n\r\n  <div *ngIf=\"navState=='icons'\" class=\"col-md-11\">\r\n\r\n    Add new\r\n    <div class=\"control\" style=\"\" *ngIf=\"!showSaveFor\" (click)=\"navState='addNewForm'\">\r\n      <img showSaveForm=\"true;showDelete=false\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKySURBVEhLvZbvSxNxHMf9L+pJj3rao3oaBEElBRIqxEKJHkSgEIFQi34QhSCimRvo5ojC0mGwtCRayDKkuXlr3tzp3NR1+6XOzbmd+722fdr37uvy7hzcLegFb9iO7/f92vfH4Br+Oxe6zac6XjvtXe+oBSm5prLtNfb+OImnS6Oxx3J2hoqkQSKdbyi4qXVkZYnkSp5+WAdbMCtPVI+ETpTlieqVyBLJlSgn3EAEstV8WYlD+5A9f7GPOIErxciV6Gb9MCLIE4Pnd2OPtRVXipErOQo0H/XgSjFCSSZfhHIZf5GIbMknexi24lmYc8dg0OitmSU/g2fUIdlhclAoliCVK1ZkOV6i+3k8is/4fCjX8tJ2A1eKEUq+rURZkc0bh1ff/byMm0N4FJ9gLAM6k1+JK8UIJevhFF5FFhbphCgOH8OO2UsVILCbgdXNJLvCSWKrA1eKEUrslaJYsgCerSR8JndEsazFYfCrD+6MeeDhVBAeTYfhvsEHbVoq1DRgb8K1fKRKjEsRcFV+9fOPXnhm3AXNzxIvw7YidOrpaPPA4gNc/RehZKO6XTneNjkDDGhMAZ7g/UoJQkyZJ7s9uhG+9GL+NK7nqHXwpC8BE5bNakiagY5RN69wyl1i5xx+prYWoFXtmMH1HEJJrStMVg5cORlkiwyuEkyvlcEc4P616DOKnuJEbZplN67nEEpq4Qrtw+PKIaOS7SR+KIDc5raufcRF43oOqZIIkwelwc+WHOSo7UJRDFMUrueQKkF06T3sLTooO0rSP5eGZrXjLa7nkCMhfiXg3qHVjDlL1S1CGSKKoNBQ9PluyzFczyHlbeWWjlzVmugUHUkz2tlA7q7eW1ZZ89VyFLQCxbDTd7WfOIer/40rfdYz6JqiW4QO+bqGWm5RkaOXexeOcyMaGv4AI6wVjsP8v6IAAAAASUVORK5CYII=\">\r\n      <span style=\"font-size: 10px; margin-left:7px\">Add new</span>\r\n    </div>\r\n    Delete\r\n    <div class=\"control\" style=\"\" *ngIf=\"!showSaveFor\" (click)=\"toggleDelete()\">\r\n      <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ2SURBVEhLrZZbTxNRFIXnyR+jL/wLiFErXqgxxmjiLUAivvFiTIwmxCgVJmBDYk1NvKHGkFQxaCIRpUzpwJQptlIKFhCSFimKFQiU7azhHKeX09bArGQ99Jy9v92ZWXORIIdLqXK4gk32W6kyB0AnO7Wg+3Oa7Da4bIQx5F4o8GZyi+w2uGyEJJ3o0OSzXWOr5zx6xi6DBy4bIUnHr4X3ND+NJKaXt8guNz+LJsBlI7ZV79UjouKdut4bjjC0pfP3x/yi4p0aPIa2dNqt+aKpDWED9/DsKnkG5kn59ke4zw3OmS7Nx9CWTnWO3BiI/xY2wfrCOjnbVapu8dPRtiCNfl8T1sHggMfQlvbfGnI8V1MboiZYfj9LB24rdOXRF3PQ1ZcxYR38Qk1tgsfQlmpuDu292zeTFDVx94R+UHwpS5ce6FRjDOqf+CWsAwc8hrZUKsbxdJba+mbolbb4b+1jfIUavePkn87k1XKDUxRfLsSusOHh4IJ5eu68TeStc3+aKr6OwvhyFcY4urhpXmRHa4BC8+t5oEnjtF3vidMxYx91uXvC+HIVxvi1vmQexUWPTu4Pc9QfWzHXu4eT5u8Lxjr2Ucd70A8OQxYLscs9fPz7OjlogmDsjcyt0UEjZXwNsc49StQI48uF2CF+vAHGqXgX+Um94TQpie2bcHAqY/7GeuGpwm0gjC8XYtdeIcaVjH5hfLnseBqXjS9Xwy6fxuhnqNLa7dO4bHy5nLI6LnrT/a/rZDXMUKXl7Bjt9U1khe/sSkYf+hmqtA671CNNT2JJ0ddHJV9+/DVZ61IPMVR5Vbco+2pbAw3ibymxUY8+hsiRJP0Fohxd8o5pmQ8AAAAASUVORK5CYII=\">\r\n      <span style=\"font-size: 10px;margin-left:7px\">Delete</span>\r\n    </div>\r\n\r\n    broken div\r\n    <div style=\"display:inline-block\" *ngIf=\"!showSaveFor\">\r\n    <div class=\"control\" >\r\n      <a href=\"https://manage-research-topic.frontiers-int{{serverNumber}}.info/\" class=\"serverNumberLink\">\r\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEsSURBVEhLY8AGXNtOuHm0HwslB4P0Qo0hDBJmnL++9uzr/+RgkF6oMYRB2txL5+9/+PefHAzSCzWGMIBZdPrx9/9Fy2/+r1xzBy8GqQGpJduio/e+/C9b9+T/jDN/8WKQGpBamlh06OG//3fe/fu/+CKNLULGFFu07cq7/2FTL/5Pmn8TLwapAakd/D7CZ9G++//+X3s91OJox5X3/6NmXPqfseQOXgxSA1I7+H2EzyKq56PiNY/+Tz7+Ey8GqaHIovNPf/yvW3/3f+26O3gxSA1ILdkWkYOpYtHdd3//rzrzGoxBbGxqqGJR/fp7/2u3vgJjEBubGqpYlLfsNjzVgdjY1FDPR1te/a8B+qhhAw19BIqX1WffgPHd9zSMI2Lw4LSIbs0t6jcgGRgAeiFPKXy2VkwAAAAASUVORK5CYII=\">\r\n        <span style=\"font-size: 10px;\"> <b>INT{{serverNumber}}</b></span>\r\n      </a>\r\n      <img *ngIf=\"!serverNumberEdit\" style=\"margin-left: 8px\" src=\"https://png.icons8.com/ultraviolet/13/ffffff/pencil.png\" (click)=\"serverNumberEdit=true\">\r\n      <input *ngIf=\"serverNumberEdit\" [(ngModel)]=serverNumber type=\"number\" (keyup.enter)=\"serverNumberEdit=false;saveServerNumber()\" class=serverNumberinput />\r\n    </div>\r\n  </div>\r\n    broken div\r\n\r\n  </div>\r\n  \r\n  <div *ngIf=\"navState=='addNewForm'\" class=\"col-md-11\" >\r\n    <input [(ngModel)]=newDoc class=\"addnewInput\" />\r\n\r\n    <img class=\"addnewImage\" (click)=\"navState='icons';saveDoc(newDoc)\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACOSURBVEhLY6AbCJp4dmHUjEsnqY1B5kKtYGAInXLx1Iwzf/9TG4PMhVoxEi2Ze+7v/4MP/oFpbPLomCxLllz6+x8EQDQ2eXQ8askQswSUepZdxsQbbkAsAdHY5NFTHV5L9tz7BzaMVADSh2zOwPsEFx56EY8Lj1oCBsRaAko9NC+FScXD1BK6tFZoCxgYAFo/wsPBpMB+AAAAAElFTkSuQmCC\">\r\n    <input style=\"margin-left:10px;\" type=\"checkbox\" [(ngModel)]=\"isLink\" />&nbsp;<span style=\"font-size:12px;\">LINK</span>\r\n  </div>\r\n</nav>-->\r\n"

/***/ }),

/***/ "./src/app/essential-header/essential-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/essential-header/essential-header.component.ts ***!
  \****************************************************************/
/*! exports provided: EssentialHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialHeaderComponent", function() { return EssentialHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EssentialHeaderComponent = /** @class */ (function () {
    function EssentialHeaderComponent() {
        this.navState = "icons";
        this.showDelete = false;
    }
    EssentialHeaderComponent.prototype.ngOnInit = function () {
    };
    EssentialHeaderComponent.prototype.toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };
    EssentialHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'essential-header',
            template: __webpack_require__(/*! ./essential-header.component.html */ "./src/app/essential-header/essential-header.component.html"),
            styles: [__webpack_require__(/*! ./essential-header.component.css */ "./src/app/essential-header/essential-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EssentialHeaderComponent);
    return EssentialHeaderComponent;
}());



/***/ }),

/***/ "./src/app/essential-nav/essential-nav.component.css":
/*!***********************************************************!*\
  !*** ./src/app/essential-nav/essential-nav.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/essential-nav/essential-nav.component.html":
/*!************************************************************!*\
  !*** ./src/app/essential-nav/essential-nav.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg id=\"user\" *ngIf=\"icon=='user'\" [ngStyle]=\"style\" \r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 4 4 L 4 28 L 28 28 L 28 4 Z M 6 6 L 26 6 L 26 26 L 23.9375 26 C 23.59375 23.296875 21.882813 21.011719 19.53125 19.84375 C 21.023438 18.75 22 16.984375 22 15 C 22 11.699219 19.300781 9 16 9 C 12.699219 9 10 11.699219 10 15 C 10 16.984375 10.976563 18.75 12.46875 19.84375 C 10.117188 21.011719 8.40625 23.296875 8.0625 26 L 6 26 Z M 16 11 C 18.222656 11 20 12.777344 20 15 C 20 17.222656 18.222656 19 16 19 C 13.777344 19 12 17.222656 12 15 C 12 12.777344 13.777344 11 16 11 Z M 16 21 C 18.984375 21 21.433594 23.152344 21.90625 26 L 10.09375 26 C 10.566406 23.152344 13.015625 21 16 21 Z \"></path></g></svg>\r\n<svg id=\"pass\" *ngIf=\"icon=='pass'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 20 3 C 15.054688 3 11 7.054688 11 12 C 11 12.519531 11.085938 12.976563 11.15625 13.4375 L 3.28125 21.28125 L 3 21.59375 L 3 29 L 10 29 L 10 26 L 13 26 L 13 23 L 16 23 L 16 20.03125 C 17.179688 20.609375 18.554688 21 20 21 C 24.945313 21 29 16.945313 29 12 C 29 7.054688 24.945313 3 20 3 Z M 20 5 C 23.855469 5 27 8.144531 27 12 C 27 15.855469 23.855469 19 20 19 C 18.789063 19 17.542969 18.644531 16.59375 18.125 L 16.34375 18 L 14 18 L 14 21 L 11 21 L 11 24 L 8 24 L 8 27 L 5 27 L 5 22.4375 L 12.90625 14.5 L 13.28125 14.15625 L 13.1875 13.625 C 13.085938 13.023438 13 12.488281 13 12 C 13 8.144531 16.144531 5 20 5 Z M 22 8 C 20.894531 8 20 8.894531 20 10 C 20 11.105469 20.894531 12 22 12 C 23.105469 12 24 11.105469 24 10 C 24 8.894531 23.105469 8 22 8 Z \"></path></g></svg>\r\n<svg id=\"cookie\" *ngIf=\"icon=='cookie'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 22.628906 9.371094 28 16 28 C 22.628906 28 28 22.628906 28 16 C 28 15.515625 27.964844 15.039063 27.90625 14.566406 C 27.507813 14.839844 27.023438 15 26.5 15 C 25.421875 15 24.511719 14.3125 24.160156 13.359375 C 23.535156 13.757813 22.796875 14 22 14 C 19.789063 14 18 12.210938 18 10 C 18 9.265625 18.210938 8.585938 18.558594 7.992188 C 18.539063 7.996094 18.519531 8 18.5 8 C 17.117188 8 16 6.882813 16 5.5 C 16 4.941406 16.1875 4.433594 16.496094 4.019531 C 16.332031 4.011719 16.167969 4 16 4 Z M 23.5 4 C 22.671875 4 22 4.671875 22 5.5 C 22 6.328125 22.671875 7 23.5 7 C 24.328125 7 25 6.328125 25 5.5 C 25 4.671875 24.328125 4 23.5 4 Z M 14.050781 6.1875 C 14.25 7.476563 15 8.585938 16.046875 9.273438 C 16.015625 9.511719 16 9.757813 16 10 C 16 13.308594 18.691406 16 22 16 C 22.496094 16 22.992188 15.9375 23.46875 15.8125 C 24.152344 16.4375 25.015625 16.851563 25.953125 16.96875 C 25.464844 22.03125 21.1875 26 16 26 C 10.484375 26 6 21.515625 6 16 C 6 11.152344 9.46875 7.097656 14.050781 6.1875 Z M 22 9 C 21.449219 9 21 9.449219 21 10 C 21 10.550781 21.449219 11 22 11 C 22.550781 11 23 10.550781 23 10 C 23 9.449219 22.550781 9 22 9 Z M 14 10 C 13.449219 10 13 10.449219 13 11 C 13 11.550781 13.449219 12 14 12 C 14.550781 12 15 11.550781 15 11 C 15 10.449219 14.550781 10 14 10 Z M 27 10 C 26.449219 10 26 10.449219 26 11 C 26 11.550781 26.449219 12 27 12 C 27.550781 12 28 11.550781 28 11 C 28 10.449219 27.550781 10 27 10 Z M 11 13 C 9.894531 13 9 13.894531 9 15 C 9 16.105469 9.894531 17 11 17 C 12.105469 17 13 16.105469 13 15 C 13 13.894531 12.105469 13 11 13 Z M 16 15 C 15.449219 15 15 15.449219 15 16 C 15 16.550781 15.449219 17 16 17 C 16.550781 17 17 16.550781 17 16 C 17 15.449219 16.550781 15 16 15 Z M 12.5 19 C 11.671875 19 11 19.671875 11 20.5 C 11 21.328125 11.671875 22 12.5 22 C 13.328125 22 14 21.328125 14 20.5 C 14 19.671875 13.328125 19 12.5 19 Z M 19.5 20 C 18.671875 20 18 20.671875 18 21.5 C 18 22.328125 18.671875 23 19.5 23 C 20.328125 23 21 22.328125 21 21.5 C 21 20.671875 20.328125 20 19.5 20 Z \"></path></g></svg>\r\n<svg id=\"timer\" *ngIf=\"icon=='timer'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 13 3 L 13 5 L 19 5 L 19 3 Z M 24.71875 5.28125 L 23.28125 6.71875 L 24.0625 7.5 L 23.03125 8.5625 C 21.125 6.972656 18.667969 6 16 6 C 9.9375 6 5 10.9375 5 17 C 5 23.0625 9.9375 28 16 28 C 22.0625 28 27 23.0625 27 17 C 27 14.332031 26.027344 11.875 24.4375 9.96875 L 25.5 8.9375 L 26.28125 9.71875 L 27.71875 8.28125 Z M 16 8 C 20.980469 8 25 12.019531 25 17 C 25 21.980469 20.980469 26 16 26 C 11.019531 26 7 21.980469 7 17 C 7 12.019531 11.019531 8 16 8 Z M 11.71875 11.28125 L 10.28125 12.71875 L 14.0625 16.5 C 14.019531 16.660156 14 16.828125 14 17 C 14 18.105469 14.894531 19 16 19 C 17.105469 19 18 18.105469 18 17 C 18 15.894531 17.105469 15 16 15 C 15.828125 15 15.660156 15.019531 15.5 15.0625 Z \"></path></g></svg>\r\n<svg id=\"mail\" *ngIf=\"icon=='mail'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z \"></path></g></svg>\r\n<svg id=\"daily\" *ngIf=\"icon=='daily'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 3 5 L 3 23 C 3 25.210938 4.789063 27 7 27 L 25 27 C 27.210938 27 29 25.210938 29 23 L 29 12 L 23 12 L 23 5 Z M 5 7 L 21 7 L 21 23 C 21 23.730469 21.222656 24.410156 21.5625 25 L 7 25 C 5.808594 25 5 24.191406 5 23 Z M 7 9 L 7 14 L 19 14 L 19 9 Z M 9 11 L 17 11 L 17 12 L 9 12 Z M 23 14 L 27 14 L 27 23 C 27 24.191406 26.191406 25 25 25 C 23.808594 25 23 24.191406 23 23 Z M 7 15 L 7 17 L 12 17 L 12 15 Z M 14 15 L 14 17 L 19 17 L 19 15 Z M 7 18 L 7 20 L 12 20 L 12 18 Z M 14 18 L 14 20 L 19 20 L 19 18 Z M 7 21 L 7 23 L 12 23 L 12 21 Z M 14 21 L 14 23 L 19 23 L 19 21 Z \"></path></g></svg>\r\n<svg id=\"month\" *ngIf=\"icon=='month'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z \"></path></g></svg>\r\n<svg id=\"build\" *ngIf=\"icon=='build'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 13 7 L 13 10 L 7 10 Z M 15 7 L 21 7 L 21 10 L 15 10 Z M 23 7 L 25 7 L 25 10 L 23 10 Z M 7 12 L 9 12 L 9 15 L 7 15 Z M 11 12 L 17 12 L 17 15 L 11 15 Z M 19 12 L 25 12 L 25 15 L 19 15 Z M 7 17 L 13 17 L 13 20 L 7 20 Z M 15 17 L 21 17 L 21 20 L 15 20 Z M 23 17 L 25 17 L 25 20 L 23 20 Z M 7 22 L 9 22 L 9 25 L 7 25 Z M 11 22 L 17 22 L 17 25 L 11 25 Z M 19 22 L 25 22 L 25 25 L 19 25 Z \"></path></g></svg>\r\n<svg id=\"testlink\" *ngIf=\"icon=='testlink'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 17 0 C 16.449219 0 16 0.449219 16 1 C 16 1.550781 16.449219 2 17 2 C 17.550781 2 18 1.550781 18 1 C 18 0.449219 17.550781 0 17 0 Z M 14 3 C 13.449219 3 13 3.449219 13 4 L 10 4 L 10 6 L 11 6 L 11 13.65625 L 4.84375 21.59375 C 4.300781 22.292969 4 23.148438 4 24.03125 C 4 26.214844 5.785156 28 7.96875 28 L 24.03125 28 C 26.214844 28 28 26.214844 28 24.03125 C 28 23.148438 27.699219 22.292969 27.15625 21.59375 L 21 13.65625 L 21 6 L 22 6 L 22 4 L 15 4 C 15 3.449219 14.550781 3 14 3 Z M 13 6 L 19 6 L 19 14.34375 L 21.84375 18 L 10.15625 18 L 13 14.34375 Z M 17 10 C 16.449219 10 16 10.449219 16 11 C 16 11.550781 16.449219 12 17 12 C 17.550781 12 18 11.550781 18 11 C 18 10.449219 17.550781 10 17 10 Z M 8.59375 20 L 23.40625 20 L 25.59375 22.8125 C 25.863281 23.160156 26 23.59375 26 24.03125 C 26 25.136719 25.136719 26 24.03125 26 L 7.96875 26 C 6.863281 26 6 25.136719 6 24.03125 C 6 23.59375 6.136719 23.160156 6.40625 22.8125 Z \"></path></g></svg>\r\n<svg id=\"server\" *ngIf=\"icon=='server'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 8 4 L 8 28 L 24 28 L 24 4 Z M 10 6 L 22 6 L 22 26 L 10 26 Z M 12 8 L 12 10 L 20 10 L 20 8 Z M 12 12 L 12 14 L 20 14 L 20 12 Z M 16 20 C 15.449219 20 15 20.449219 15 21 C 15 21.550781 15.449219 22 16 22 C 16.550781 22 17 21.550781 17 21 C 17 20.449219 16.550781 20 16 20 Z \"></path></g></svg>\r\n<svg id=\"tfs\" *ngIf=\"icon=='tfs'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 16 4 C 13.800781 4 12 5.800781 12 8 C 12 9.035156 12.410156 9.972656 13.0625 10.6875 C 12.65625 10.886719 12.296875 11.132813 11.9375 11.40625 C 11.648438 9.484375 9.996094 8 8 8 C 5.800781 8 4 9.800781 4 12 C 4 13.066406 4.433594 14.03125 5.125 14.75 C 4.867188 14.890625 4.609375 15.042969 4.375 15.21875 C 2.933594 16.3125 2 18.054688 2 20 L 4 20 C 4 18.691406 4.628906 17.542969 5.59375 16.8125 C 6.265625 16.304688 7.089844 16 8 16 C 8.621094 16 9.203125 16.167969 9.75 16.4375 L 10.84375 16.96875 L 11.15625 15.78125 C 11.703125 13.617188 13.652344 12 16 12 C 18.34375 12 20.292969 13.589844 20.84375 15.75 L 21.15625 16.96875 L 22.25 16.40625 C 22.789063 16.140625 23.375 16 24 16 C 26.21875 16 28 17.78125 28 20 L 30 20 C 30 17.746094 28.726563 15.773438 26.875 14.75 C 27.566406 14.03125 28 13.066406 28 12 C 28 9.800781 26.199219 8 24 8 C 22.003906 8 20.351563 9.484375 20.0625 11.40625 C 19.703125 11.132813 19.34375 10.886719 18.9375 10.6875 C 19.589844 9.972656 20 9.035156 20 8 C 20 5.800781 18.199219 4 16 4 Z M 16 6 C 17.117188 6 18 6.882813 18 8 C 18 9.117188 17.117188 10 16 10 C 14.882813 10 14 9.117188 14 8 C 14 6.882813 14.882813 6 16 6 Z M 8 10 C 9.117188 10 10 10.882813 10 12 C 10 13.117188 9.117188 14 8 14 C 6.882813 14 6 13.117188 6 12 C 6 10.882813 6.882813 10 8 10 Z M 24 10 C 25.117188 10 26 10.882813 26 12 C 26 13.117188 25.117188 14 24 14 C 22.882813 14 22 13.117188 22 12 C 22 10.882813 22.882813 10 24 10 Z M 16 16 C 13.800781 16 12 17.800781 12 20 C 12 21.066406 12.433594 22.03125 13.125 22.75 C 11.273438 23.773438 10 25.746094 10 28 L 12 28 C 12 25.78125 13.78125 24 16 24 C 18.21875 24 20 25.78125 20 28 L 22 28 C 22 25.746094 20.726563 23.773438 18.875 22.75 C 19.566406 22.03125 20 21.066406 20 20 C 20 17.800781 18.199219 16 16 16 Z M 16 18 C 17.117188 18 18 18.882813 18 20 C 18 21.117188 17.117188 22 16 22 C 14.882813 22 14 21.117188 14 20 C 14 18.882813 14.882813 18 16 18 Z \"></path></g></svg>\r\n<svg  id=\"ims\" *ngIf=\"icon=='ims'\" [ngStyle]=\"style\"\r\n     xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n     width=\"32\" height=\"32\"\r\n     viewBox=\"0 0 32 32\"><g id=\"surface1\"><path style=\" \" d=\"M 16 5 C 12.144531 5 9 8.144531 9 12 C 9 14.410156 10.230469 16.550781 12.09375 17.8125 C 8.527344 19.34375 6 22.882813 6 27 L 8 27 C 8 22.570313 11.570313 19 16 19 C 20.429688 19 24 22.570313 24 27 L 26 27 C 26 22.882813 23.472656 19.34375 19.90625 17.8125 C 21.769531 16.550781 23 14.410156 23 12 C 23 8.144531 19.855469 5 16 5 Z M 16 7 C 18.773438 7 21 9.226563 21 12 C 21 14.773438 18.773438 17 16 17 C 13.226563 17 11 14.773438 11 12 C 11 9.226563 13.226563 7 16 7 Z \"></path></g></svg>\r\n"

/***/ }),

/***/ "./src/app/essential-nav/essential-nav.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/essential-nav/essential-nav.component.ts ***!
  \**********************************************************/
/*! exports provided: EssentialNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialNavComponent", function() { return EssentialNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EssentialNavComponent = /** @class */ (function () {
    function EssentialNavComponent() {
    }
    Object.defineProperty(EssentialNavComponent.prototype, "value", {
        set: function (val) {
            this.style = val;
        },
        enumerable: true,
        configurable: true
    });
    EssentialNavComponent.prototype.ngOnInit = function () {
        this.icon = this.input_icon;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('icon'),
        __metadata("design:type", String)
    ], EssentialNavComponent.prototype, "input_icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('style'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EssentialNavComponent.prototype, "value", null);
    EssentialNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'essential-nav',
            template: __webpack_require__(/*! ./essential-nav.component.html */ "./src/app/essential-nav/essential-nav.component.html"),
            styles: [__webpack_require__(/*! ./essential-nav.component.css */ "./src/app/essential-nav/essential-nav.component.css")]
        })
    ], EssentialNavComponent);
    return EssentialNavComponent;
}());



/***/ }),

/***/ "./src/app/essential/essential.component.css":
/*!***************************************************!*\
  !*** ./src/app/essential/essential.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sprint {\r\n    color: #c0b283;\r\n    margin-left: 200px\r\n}\r\n.sprint .life {\r\n  margin-left: 27px;\r\n  position: absolute;\r\n}\r\n.devend,.end {\r\n  font-size: 11px;\r\n  font-weight: 800;\r\n  display: block;\r\n  padding-left: 5px;\r\n}\r\n.sprint .name, .sprint .life {\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n}\r\n.tickets {\r\n  padding-left: 0px;\r\n  margin-left: 10px;\r\n  font-weight: 500;\r\n}\r\n.tickets > li{\r\n  margin-left: 10px;\r\n  width: 60px;\r\n  border-radius: 9px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  transition: 0.2s;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n.tickets li:hover {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  background-color: palegoldenrod;\r\n  \r\n  -webkit-transform: scale(1.3);\r\n  \r\n          transform: scale(1.3)\r\n}\r\n.tickets li a {\r\n  color: #c0b283;\r\n  -webkit-text-decoration-line: none;\r\n          text-decoration-line: none\r\n}\r\n.sprint * {\r\n  display: inline;\r\n}\r\n.jumbotron {\r\n  background-color: #f8f9fa !important;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  padding: 5px !important;\r\n}\r\n.navbar {\r\n  justify-content: normal;\r\n}\r\n.ess-links{\r\n  padding-left:15px;\r\n  padding-top: 10px;\r\n  position: fixed;\r\n  z-index: 1\r\n}\r\n.addnewInput {\r\n  width: 99%;\r\n  border-radius: 2px;\r\n  border: solid 1px #ced4da;\r\n  height: 100%;\r\n}\r\n.modal-body.fixed {\r\n  height: 250px\r\n}\r\n.addnewImage{\r\n  margin-bottom: 8px\r\n}\r\n.control {\r\n  cursor: pointer;\r\n  display: inline;\r\n  margin-right: 50px\r\n}\r\n.maincoloumn {\r\n  border-right: solid 1px #C0B283;\r\n  border-left: solid 1px #C0B283;\r\n  word-break: break-all;\r\n  overflow-x: hidden !important;\r\n  overflow-y: scroll !important;\r\n  height: 90vh;\r\n  margin-left: -20px;\r\n  margin-right: 0px;\r\n  padding: 0px;\r\n  padding-left: 20px;\r\n  background-color: white;\r\n}\r\n.maincoloumn:nth-child(1){\r\n  /*border-left: solid 2px #373737;*/\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n}\r\n.maincoloumn:nth-child(3){\r\n  /*border-right: solid 2px #373737;*/\r\n\r\n}\r\n.dailydatacard {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n.test {\r\n\r\n\r\n}\r\n.datadiv {\r\n  display: inline-block;\r\n  transition: 0.26s;\r\n  padding:0px 10px;\r\n  cursor: pointer\r\n}\r\n.dataDivBG {\r\n  background-color: aquamarine;\r\n  padding: 5px 10px;\r\n}\r\n.greyedout {\r\n  color: #cccccc;\r\n}\r\nul.credentials {\r\n  margin-top: 7px;\r\n\r\n}\r\nul.credentials, ul.cred-unit-container {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\nul.cred-unit-container {\r\n  display: flex;\r\n}\r\nul.cred-unit-container > .unit.large{\r\n  flex: 3;\r\n  color: #63d2ff\r\n}\r\nul.cred-unit-container > .unit.large > div {\r\n  flex: 3;\r\n  margin-left: 17px;\r\n  font-size: 24px;\r\n  margin-top: -4px;\r\n}\r\nul.cred-unit-container > .unit{\r\n  flex: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/essential/essential.component.html":
/*!****************************************************!*\
  !*** ./src/app/essential/essential.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light sticky-top\" style=\"background-color: #F4F4F4; border-bottom: solid 1px#C0B283 \">\r\n  <a class=\"navbar-brand\"><span style=\"color:mediumaquamarine; font-weight:100\" (click)=\"test()\">Essentials</span></a>\r\n  <div class=\"\">\r\n    <!--Add new-->\r\n    <div class=\"control\" style=\"\" (click)=\"showDelete=false;openModal(addnewform)\">\r\n      <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKySURBVEhLvZbvSxNxHMf9L+pJj3rao3oaBEElBRIqxEKJHkSgEIFQi34QhSCimRvo5ojC0mGwtCRayDKkuXlr3tzp3NR1+6XOzbmd+722fdr37uvy7hzcLegFb9iO7/f92vfH4Br+Oxe6zac6XjvtXe+oBSm5prLtNfb+OImnS6Oxx3J2hoqkQSKdbyi4qXVkZYnkSp5+WAdbMCtPVI+ETpTlieqVyBLJlSgn3EAEstV8WYlD+5A9f7GPOIErxciV6Gb9MCLIE4Pnd2OPtRVXipErOQo0H/XgSjFCSSZfhHIZf5GIbMknexi24lmYc8dg0OitmSU/g2fUIdlhclAoliCVK1ZkOV6i+3k8is/4fCjX8tJ2A1eKEUq+rURZkc0bh1ff/byMm0N4FJ9gLAM6k1+JK8UIJevhFF5FFhbphCgOH8OO2UsVILCbgdXNJLvCSWKrA1eKEUrslaJYsgCerSR8JndEsazFYfCrD+6MeeDhVBAeTYfhvsEHbVoq1DRgb8K1fKRKjEsRcFV+9fOPXnhm3AXNzxIvw7YidOrpaPPA4gNc/RehZKO6XTneNjkDDGhMAZ7g/UoJQkyZJ7s9uhG+9GL+NK7nqHXwpC8BE5bNakiagY5RN69wyl1i5xx+prYWoFXtmMH1HEJJrStMVg5cORlkiwyuEkyvlcEc4P616DOKnuJEbZplN67nEEpq4Qrtw+PKIaOS7SR+KIDc5raufcRF43oOqZIIkwelwc+WHOSo7UJRDFMUrueQKkF06T3sLTooO0rSP5eGZrXjLa7nkCMhfiXg3qHVjDlL1S1CGSKKoNBQ9PluyzFczyHlbeWWjlzVmugUHUkz2tlA7q7eW1ZZ89VyFLQCxbDTd7WfOIer/40rfdYz6JqiW4QO+bqGWm5RkaOXexeOcyMaGv4AI6wVjsP8v6IAAAAASUVORK5CYII=\">\r\n      <span style=\"font-size: 10px; margin-left:7px\">Add new</span>\r\n    </div>\r\n    <!--Delete-->\r\n    <div class=\"control\" style=\"\" (click)=\"showDelete=!showDelete\">\r\n      <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ2SURBVEhLrZZbTxNRFIXnyR+jL/wLiFErXqgxxmjiLUAivvFiTIwmxCgVJmBDYk1NvKHGkFQxaCIRpUzpwJQptlIKFhCSFimKFQiU7azhHKeX09bArGQ99Jy9v92ZWXORIIdLqXK4gk32W6kyB0AnO7Wg+3Oa7Da4bIQx5F4o8GZyi+w2uGyEJJ3o0OSzXWOr5zx6xi6DBy4bIUnHr4X3ND+NJKaXt8guNz+LJsBlI7ZV79UjouKdut4bjjC0pfP3x/yi4p0aPIa2dNqt+aKpDWED9/DsKnkG5kn59ke4zw3OmS7Nx9CWTnWO3BiI/xY2wfrCOjnbVapu8dPRtiCNfl8T1sHggMfQlvbfGnI8V1MboiZYfj9LB24rdOXRF3PQ1ZcxYR38Qk1tgsfQlmpuDu292zeTFDVx94R+UHwpS5ce6FRjDOqf+CWsAwc8hrZUKsbxdJba+mbolbb4b+1jfIUavePkn87k1XKDUxRfLsSusOHh4IJ5eu68TeStc3+aKr6OwvhyFcY4urhpXmRHa4BC8+t5oEnjtF3vidMxYx91uXvC+HIVxvi1vmQexUWPTu4Pc9QfWzHXu4eT5u8Lxjr2Ucd70A8OQxYLscs9fPz7OjlogmDsjcyt0UEjZXwNsc49StQI48uF2CF+vAHGqXgX+Um94TQpie2bcHAqY/7GeuGpwm0gjC8XYtdeIcaVjH5hfLnseBqXjS9Xwy6fxuhnqNLa7dO4bHy5nLI6LnrT/a/rZDXMUKXl7Bjt9U1khe/sSkYf+hmqtA671CNNT2JJ0ddHJV9+/DVZ61IPMVR5Vbco+2pbAw3ibymxUY8+hsiRJP0Fohxd8o5pmQ8AAAAASUVORK5CYII=\">\r\n      <span style=\"font-size: 10px;margin-left:7px\">Delete</span>\r\n    </div>\r\n    <!--sprint-->\r\n    <div *ngIf=\"sprint.show\" class=\"control sprint\">\r\n      <span class=\"name\">{{\"SB \"+ sprint?.name}}</span>\r\n      <ul class=\"tickets\">\r\n        <li *ngFor=\"let ticket of sprint?.tickets\" tooltip=\"{{ticket?.desc}}\" placement=\"bottom\">\r\n          <a href=\"http://jira.frontiersin.net/browse/JPB-{{ticket.name}}\" target=\"_blank\">{{ticket?.name}}</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"life\">\r\n        <div class=\"start\">{{sprint?.start | date: 'd,MMM'}}</div> <em style=\"font-weight:300\"> | </em>\r\n        <div>\r\n          <div class=\"devend\">{{sprint?.devend | date: 'd MMM' | uppercase}}</div>\r\n          <div class=\"end\">{{sprint?.testend | date: 'd MMM' | uppercase}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!--header end-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1 ess-links\">\r\n      <!-- timesheet -->\r\n      <a href=\"http://ims.pitsolutions.com/_layouts/TimesheetEntry_Forms/TimesheetEntry.aspx?heading=SJWP%20@lnnlm%20Qfrvfpwp\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'timer'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Timesheet\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br />\r\n      <!-- monthly -->\r\n      <a href=\"http://ims.pitsolutions.com/_layouts/Human_Resource_Management_Forms/MonthlyLog.aspx?heading=SJWP%20@lnnlm%20Qfrvfpwp\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'month'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Monthlylog\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br />\r\n      <!-- mail -->\r\n      <a href=\"https://webmail.pitsolutions.com\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'mail'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"eMail\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- daily -->\r\n      <a href=\"http://ims.pitsolutions.com/_layouts/Human_Resource_Management_Forms/DailyLog.aspx?heading=SJWP%20@lnnlm%20Qfrvfpwp\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'daily'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Dailylog\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- ims -->\r\n      <a href=\"http://ims.pitsolutions.com\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'ims'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"IMS\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- servers -->\r\n      <a href=\"http://192.168.0.242:242/servers\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'server'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Servers\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- TFS -->\r\n      <a href=\"http://tfs.pitsolutions.com:8080/tfs/Agile6_FrontiersV3/FrontiersV3/_workitems\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'tfs'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"TFS\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- Build -->\r\n      <a href=\"http://journal.tfs.frontiersin.net:8080/tfs/journal/Journal/_build\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'build'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Build\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- Testlink -->\r\n      <a href=\"http://testlink.frontiersin.net/index.php?caller=login\" target=\"_blank\">\r\n        <essential-nav [icon]=\"'testlink'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Testlink\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>\r\n      <!-- test icon -->\r\n      <!--<a (click)=\"test()\">\r\n        <essential-nav [icon]=\"'testlink'\" [style]=\"defaultstyles?.linkIcon\" tooltip=\"Test\" placement=\"right\"></essential-nav>\r\n      </a>\r\n      <br>-->\r\n    </div>\r\n\r\n    <div class=\"col-md-11 container-fluid\">\r\n      <div class=\"row\" style=\"border-bottom: solid 1px #C0B283\">\r\n        <div class=\"col-md-2 maincoloumn\">\r\n          <ul class=\"credentials\">\r\n            <li class=\"cred-repeater\" *ngFor='let credential of credentials, index as i'>\r\n              <ul class=\"cred-unit-container\">\r\n                <li class=\"unit large\">\r\n                  <div>{{credential.title}}</div>\r\n                </li>\r\n                <li class=\"unit\">\r\n                  <essential-nav [icon]=\"'user'\" [style]=\"iconstyle.user[i]\" \r\n                                 (click)=\"iconToggleColor(i,'user','click')\" (mouseover)=\"iconToggleColor(i,'user','hover')\" \r\n                                 ngxClipboard [cbContent]=\"credential.username\"\r\n                                 style=\"flex: 1;\" >\r\n                  </essential-nav>\r\n                </li>\r\n                <li class=\"unit\">\r\n                  <essential-nav [icon]=\"'pass'\" [style]=\"iconstyle.pass[i]\"\r\n                                 (click)=\"iconToggleColor(i,'pass','click')\" (mouseover)=\"iconToggleColor(i,'pass','hover')\"\r\n                                 ngxClipboard [cbContent]=\"credential.password\"\r\n                                 style=\"flex: 1;\">\r\n                  </essential-nav>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!--<div class=\"col-md-2 maincoloumn\">\r\n\r\n        </div>-->\r\n        <div class=\"col-md-6 maincoloumn\">\r\n          <div class=\"dailydatacard\"\r\n               *ngFor='let doc of dailydata; index as i'>\r\n            <div class=\"\" style=\"flex:1\">\r\n              <img [hidden]=!showDelete (click)=deleteDailyDoc(doc.id,doc.rev) style=\"width:12px; height:12px; margin-right: 4px; display: inline\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVDhPY/CedlgwaNL5AFIxSB9D2OQL7q17PvzvPfyNaAxSD9IH1tx35Nv/GWf+Eo1B6qmv+c67f/933vmHohjEB4nD+Dg1gxT++vsfbgA6H69mZA0XnmNqBGG8mkEYpBEEQDS6HG1shmmEaUDn49VMUWgTg6mnmey0TX6uOiwIAK4hr7lf7d7oAAAAAElFTkSuQmCC\">\r\n            </div>\r\n            <div class=\"\" style=\"flex:15\" (mouseenter)=\"toggleDailyDataDivBG(i)\" (mouseleave)=\"toggleDailyDataDivBG(i)\" ngxClipboard [cbContent]=\"doc.data\">\r\n              <div class=\"datadiv\" [ngClass]=\"{'dataDivBG': doc.bg}\" [innerHTML]=\"doc.data\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 maincoloumn\">\r\n          <div *ngFor='let doc of docs; index as i'>\r\n            <div class=\"\" style=\"width: 30px; justify-content: center; text-align: center\">\r\n              <img [hidden]=true (click)=deleteDoc(doc.id,doc.rev) style=\"width:12px; height:12px; margin-right: 4px\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVDhPY/CedlgwaNL5AFIxSB9D2OQL7q17PvzvPfyNaAxSD9IH1tx35Nv/GWf+Eo1B6qmv+c67f/933vmHohjEB4nD+Dg1gxT++vsfbgA6H69mZA0XnmNqBGG8mkEYpBEEQDS6HG1shmmEaUDn49VMUWgTg6mnmey0TX6uOiwIAK4hr7lf7d7oAAAAAElFTkSuQmCC\">\r\n            </div>\r\n            <div class=\"\" style=\"width: 90%\" (mouseenter)=\"toggleCredentialDataDivBG(i)\" (mouseleave)=\"toggleCredentialDataDivBG(i)\" ngxClipboard [cbContent]=\"doc.data\">\r\n              <div class=\"datadiv\" [ngClass]=\"{'dataDivBG': doc.bg}\" [innerHTML]=\"doc.data\" ngxClipboard [cbContent]=\"doc.data\" style=\"overflow: hidden;\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #addnewform>\r\n  <div class=\"\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add new</h4>\r\n      <button type=\"button\" class=\"close pull-right\"\r\n              aria-label=\"Close\" (click)=\"modalRef.hide();\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body fixed\" *ngIf=\"mode==0\">\r\n      <textarea [(ngModel)]=newDoc class=\"addnewInput\"></textarea>\r\n      <br />\r\n    </div>\r\n    <div class=\"modal-body fixed\" name=\"addsprintdiv\" *ngIf=\"mode==2\">\r\n      Name: <input [(ngModel)]=\"newSprint.name\" />\r\n      <div style=\"display: flex;\">\r\n        Start:    <ng-datepicker [(ngModel)]=\"newSprint.start\" [options]=\"dateOptions\"></ng-datepicker>\r\n        Dev End:  <ng-datepicker [(ngModel)]=\"newSprint.devend\" [options]=\"dateOptions\"></ng-datepicker>\r\n        Test End: <ng-datepicker [(ngModel)]=\"newSprint.testend\" [options]=\"dateOptions\"></ng-datepicker>\r\n      </div>\r\n      <fieldset>\r\n        <legend>Tickets</legend>\r\n        <div *ngFor=\"let t of tkt; index as i\">\r\n          <input [(ngModel)]=\"newSprint.tickets[i].name\" />\r\n          <input [(ngModel)]=\"newSprint.tickets[i].desc\" />\r\n        </div>\r\n        <button (click)=\"addNewTicketInput()\">+</button>\r\n      </fieldset>\r\n\r\n    </div>\r\n    <div class=\"modal-body fixed\" *ngIf=\"mode==1\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Title</label>\r\n        <input id=\"title\" [(ngModel)]=\"newCredential.title\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input id=\"username\" [(ngModel)]=newCredential.username class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Password</label>\r\n        <input id=\"pwd\" [(ngModel)]=newCredential.password class=\"form-control\">\r\n      </div>\r\n      <br />\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <input type=\"radio\" name=\"mode\" (click)=\"mode=1\" [checked]=\"mode==1\" /> Credential\r\n      <span style=\"width:5px\"></span>\r\n      <input type=\"radio\" name=\"mode\" (click)=\"mode=0\" [checked]=\"mode==0\" /> Data\r\n      <span style=\"width:5px\"></span>\r\n      <input type=\"radio\" name=\"mode\" (click)=\"mode=2\" [checked]=\"mode==2\" /> Sprint\r\n      <input [disabled]=\"!mode==0\" style=\"margin-left:10px;\" type=\"checkbox\" [(ngModel)]=\"isLink\" /><span [ngClass]=\"{'greyedout': mode }\" style=\"font-size:12px;\">Link</span>\r\n      <button class=\"btn btn-primary\" style=\"width:110px; justify-content: center\" (click)=\"save(mode)\">\r\n        Save <span *ngIf=\"mode==1\">credential</span><span *ngIf=\"mode==0\">document</span><span *ngIf=\"mode==3\">sprint</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!--<div class=\"col-md-4\">\r\n  <div *ngFor=\"let credential of credentials\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{credential.title}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\"\r\n              aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" id=\"username\" value={{credential.username}} ngxClipboard [cbContent]=\"credential.username\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\" value={{credential.password}} ngxClipboard [cbContent]=\"credential.password\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/essential/essential.component.ts":
/*!**************************************************!*\
  !*** ./src/app/essential/essential.component.ts ***!
  \**************************************************/
/*! exports provided: EssentialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialComponent", function() { return EssentialComponent; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pouchService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pouchService */ "./src/app/services/pouchService.ts");
/* harmony import */ var _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pouchService-2.0 */ "./src/app/services/pouchService-2.0.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EssentialComponent = /** @class */ (function () {
    function EssentialComponent(_docStore, modalService) {
        this.modalService = modalService;
        this.docs = [];
        this.dailydata = [];
        this.credentials = [];
        this.newCredential = { title: '', username: '', password: '' };
        this.newSprint = { name: '', start: new Date(), devend: new Date(), testend: new Date(), tickets: [{ name: '', desc: '' }] };
        this.sprints = [];
        this.sprint = {
            show: false,
            name: '',
            tickets: [
                { name: '', desc: '' }
            ],
            start: '',
            devend: '',
            testend: ''
        };
        this.isLink = false;
        this.dateOptions = {
            displayFormat: 'D MMM',
            addStyle: { width: '70px', height: '25px' }
        };
        this.showDelete = false;
        this.mode = 0;
        this.tkt = [0];
        this.initializeServices();
        this.initializeData();
        this.setDefaultStylesForIcons();
        this.DocStore = _docStore;
    }
    EssentialComponent.prototype.ngOnInit = function () {
        this.docs = this.DocStore.getDocs();
    };
    EssentialComponent.prototype.addNewTicketInput = function () {
        this.newSprint.tickets.push({ name: '', desc: '' });
        this.tkt.push(this.tkt.length);
        this.tkt = this.tkt; //for change detection
    };
    EssentialComponent.prototype.saveCredential = function (credential) {
        this.DocStore.saveCredential(credential);
    };
    //-------------
    EssentialComponent.prototype.saveSprint = function () {
        var context = this;
        context.DocStore.saveSprint(context.newSprint).then(function (saveStatus) { return console.log("isSprintSaved: " + saveStatus); });
    };
    //-------------
    EssentialComponent.prototype.save = function (mode) {
        switch (mode) {
            case 0:
                this.saveDailyDoc(this.newDoc);
                this.resetDocs();
                break;
            case 1:
                this.saveCredential(this.newCredential);
                this.resetCredentials();
                break;
            case 2:
                this.saveSprint();
                this.resetSprint();
                break;
            default:
        }
    };
    EssentialComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    EssentialComponent.prototype.toggleCredentialDataDivBG = function (index) {
        this.docs[index].bg = !this.docs[index].bg;
    };
    EssentialComponent.prototype.toggleDailyDataDivBG = function (index) {
        this.dailydata[index].bg = !this.dailydata[index].bg;
    };
    EssentialComponent.prototype.saveDailyDoc = function (newDoc) {
        newDoc = newDoc.trim();
        if (newDoc != '') {
            if (this.isLink) {
                newDoc = '<a href=' + newDoc.split(',')[0] + '>' + (newDoc.split(',')[1] == undefined ? 'New Link' : newDoc.split(',')[1]) + '</a>';
            }
            this.DocStore.saveDailyDoc(newDoc);
            this.newDoc = '';
        }
        this.newDoc = '';
        this.isLink = false;
    };
    EssentialComponent.prototype.deleteDoc = function (id, rev) {
        this.DocStore.deleteDoc(id, rev);
        this.resetDocs();
    };
    EssentialComponent.prototype.deleteDailyDoc = function (id, rev) {
        this.DocStore.deleteDailyDoc(id, rev);
        this.resetDocs();
    };
    EssentialComponent.prototype.iconToggleColor = function (index, iconname, event) {
        var _this = this;
        if (this.iconstyle.freezeCredentialStyleChange && event == 'hover')
            return;
        this.setNormalStyleToAllIcons();
        switch (iconname) {
            case 'user':
                this.iconstyle.user[index] = this.handleEvent(event);
                window.setTimeout(function () {
                    _this.iconstyle.user[index] = _this.defaultstyles.normal;
                }, 1500);
                break;
            case 'pass':
                this.iconstyle.pass[index] = this.handleEvent(event);
                window.setTimeout(function () {
                    _this.iconstyle.pass[index] = _this.defaultstyles.normal;
                }, 1500);
                break;
            default:
        }
    };
    //#region privates
    EssentialComponent.prototype.initializeServices = function () {
        this.legacyService = new _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__["pouchServiceV2"]({ name: 'essential', auto_compaction: true });
        this.credentialService = new _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__["pouchServiceV2"]({ name: 'credential', auto_compaction: true });
        this.cookieService = new _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__["pouchServiceV2"]({ name: 'cookie', auto_compaction: true });
        this.dataService = new _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__["pouchServiceV2"]({ name: 'daily_data', auto_compaction: true });
        this.sprintService = new _services_pouchService_2_0__WEBPACK_IMPORTED_MODULE_3__["pouchServiceV2"]({ name: 'sprint', auto_compaction: true });
    };
    EssentialComponent.prototype.initializeData = function () {
        this.setDailyData();
        this.setLegacyData();
        this.setCredentialData();
        this.setSprintData();
        this.setcookieData();
    };
    //data setters
    EssentialComponent.prototype.setDailyData = function () {
        var _this = this;
        this.dataService.getAll().then(function (response) {
            response.forEach(function (doc) {
                _this.dailydata.push({
                    id: doc.id,
                    data: doc.doc.data,
                    rev: doc.doc._rev,
                    bg: false
                });
            });
        });
    };
    EssentialComponent.prototype.setLegacyData = function () {
        var _this = this;
        this.legacyService.getAll().then(function (response) {
            response.forEach(function (cx) {
                _this.docs.push({
                    id: cx.doc.id,
                    data: cx.doc.data,
                    rev: cx.doc._rev,
                    bg: false
                });
            });
        });
    };
    EssentialComponent.prototype.setCredentialData = function () {
        var _this = this;
        this.credentialService.getAll().then(function (response) {
            response.forEach(function (cx) {
                _this.credentials.push({
                    _id: cx.doc._id,
                    title: cx.doc.title,
                    username: cx.doc.username,
                    password: cx.doc.password
                });
                _this.setDefaultStylesForIcons();
            });
        });
    };
    EssentialComponent.prototype.setSprintData = function () {
        var _this = this;
        this.sprintService.getAll({ descending: true }).then(function (response) {
            response.forEach(function (cx) {
                _this.sprints.push({
                    name: cx.doc._id,
                    start: cx.doc.start,
                    devend: cx.doc.devend,
                    testend: cx.doc.testend,
                    tickets: cx.doc.tickets,
                    _rev: cx.doc._rev
                });
                if (_this.sprints[0])
                    Object.assign(_this.sprint, _this.sprints[0], { show: true });
            });
        });
    };
    EssentialComponent.prototype.setcookieData = function () {
    };
    EssentialComponent.prototype.setDefaultStylesForIcons = function () {
        this.defaultstyles = {};
        this.defaultstyles.normal = { 'fill': '#7f8c8d' };
        this.defaultstyles.clicked = { 'fill': '#27ae60' };
        this.defaultstyles.hover = { 'fill': '#34495e' };
        this.defaultstyles.linkIcon = { 'fill': '#7dadda' };
        this.iconstyle = {};
        this.iconstyle.user = [];
        this.iconstyle.pass = [];
        this.iconstyle.freezeCredentialStyleChange = false;
        this.setNormalStyleToAllIcons();
    };
    EssentialComponent.prototype.setNormalStyleToAllIcons = function () {
        for (var j = 0; j < this.credentials.length; j++) {
            this.iconstyle.user[j] = this.defaultstyles.normal;
            this.iconstyle.pass[j] = this.defaultstyles.normal;
        }
    };
    EssentialComponent.prototype.handleEvent = function (event) {
        var _this = this;
        if (event == 'click') {
            this.iconstyle.freezeCredentialStyleChange = true;
            window.setTimeout(function () { return _this.iconstyle.freezeCredentialStyleChange = false; }, 1500);
            return this.defaultstyles.clicked;
        }
        else {
            return this.defaultstyles.hover;
        }
    };
    //reseters
    EssentialComponent.prototype.resetDocs = function () {
        this.dailydata = [];
        this.dailydata = this.DocStore.getDailyDocs();
    };
    EssentialComponent.prototype.resetCredentials = function () {
        this.credentials = [];
        this.setCredentialData();
    };
    EssentialComponent.prototype.resetSprint = function () {
        this.sprints = [];
        this.setSprintData();
    };
    EssentialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'essential',
            template: __webpack_require__(/*! ./essential.component.html */ "./src/app/essential/essential.component.html"),
            styles: [__webpack_require__(/*! ./essential.component.css */ "./src/app/essential/essential.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pouchService__WEBPACK_IMPORTED_MODULE_2__["pouchService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]])
    ], EssentialComponent);
    return EssentialComponent;
}());



/***/ }),

/***/ "./src/app/services/pouchService-2.0.ts":
/*!**********************************************!*\
  !*** ./src/app/services/pouchService-2.0.ts ***!
  \**********************************************/
/*! exports provided: pouchServiceV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pouchServiceV2", function() { return pouchServiceV2; });
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pouchdb */ "./node_modules/pouchdb/lib/index-browser.es.js");

//@Injectable({ providedIn: 'root' })
var pouchServiceV2 = /** @class */ (function () {
    function pouchServiceV2(_dbSettings) {
        this._dbSettings = _dbSettings;
        var This = this;
        //create db instance  
        This.db = new pouchdb__WEBPACK_IMPORTED_MODULE_0__["default"](_dbSettings.name, _dbSettings);
    }
    pouchServiceV2.prototype.get = function (id) {
        return this.db.get(id).then(function (response) { return response; }).catch(this.logerror);
    };
    pouchServiceV2.prototype.getAll = function (queryoption) {
        queryoption = Object.assign({}, { include_docs: true }, queryoption);
        return this.db.allDocs(queryoption).then(function (response) { return response.rows; }).catch(this.logerror);
    };
    pouchServiceV2.prototype.update = function (entity) {
        return this.db.put(entity).then(function () { return true; }).catch(this.logerror);
    };
    pouchServiceV2.prototype.save = function (entity) {
        return this.db.post(entity).then(function () { return true; }).catch(this.logerror);
    };
    pouchServiceV2.prototype.delete = function (entity) {
        return this.db.remove(entity.id, entity.rev).then(function () { return true; }).catch(this.logerror);
    };
    //privates
    pouchServiceV2.prototype.logerror = function (err) {
        console.log('service error');
        console.log(err);
        return false;
    };
    return pouchServiceV2;
}());



/***/ }),

/***/ "./src/app/services/pouchService.ts":
/*!******************************************!*\
  !*** ./src/app/services/pouchService.ts ***!
  \******************************************/
/*! exports provided: pouchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pouchService", function() { return pouchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pouchdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pouchdb */ "./node_modules/pouchdb/lib/index-browser.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pouchService = /** @class */ (function () {
    function pouchService() {
        this.loadDatabases();
    }
    //Sprint
    pouchService.prototype.saveSprint = function (sprint) {
        var context = this;
        var sprintDoc = {
            _id: sprint.name,
            start: sprint.start,
            devend: sprint.devend,
            testend: sprint.testend,
            tickets: sprint.tickets
        };
        return context.sprintdb.put(sprintDoc).then(function () { return true; }).catch(this.logerror);
    };
    pouchService.prototype.getSprint = function (sprintid) {
        var context = this;
        return context.sprintdb.get(sprintid)
            .then(function (sprint) {
            var _sprint = {
                name: sprint._id,
                devend: sprint.devend,
                testend: sprint.testend,
                tickets: sprint.tickets,
                _rev: sprint._rev
            };
            return _sprint;
        })
            .catch(this.logerror);
    };
    pouchService.prototype.getSprints = function () {
        var context = this;
        var success = function (success) {
            var result = [];
            success.rows.forEach(function (doc) {
                doc = doc.doc;
                result.push({ name: doc._id, start: doc.start, devend: doc.devend, testend: doc.testend, tickets: doc.tickets, _rev: doc._rev });
            });
            return result;
        };
        return context.sprintdb.allDocs({ include_docs: true }).then(success).catch(context.logerror);
    };
    //Sprint
    pouchService.prototype.saveCredential = function (credential) {
        var context = this;
        var promise = context.credentialdb.put({ _id: new Date(), title: credential.title, username: credential.username, password: credential.password }).then().catch();
        return promise;
    };
    pouchService.prototype.getCredentials = function () {
        var context = this;
        var promise = context.credentialdb.allDocs({ include_docs: true }).then(function success(response) {
            return response.rows;
        });
        return promise;
    };
    pouchService.prototype.getServerNumber = function () {
        var context = this;
        var promise = context.controldb.get("serverNumber").then(function (response) {
            return response.data;
        }).catch(function () {
            context.controldb.put({ _id: "serverNumber", data: "0" });
        });
        return promise;
    };
    pouchService.prototype.saveDoc = function (data, dataType) {
        var context = this;
        if (dataType == 'serverNumber') {
            context.controldb.get('serverNumber', function (err, doc) {
                if (err) {
                    context.controldb.put({ _id: "serverNumber", data: "00" });
                }
                context.controldb.put({
                    _id: 'serverNumber',
                    _rev: doc._rev,
                    data: data
                }, function (err, response) {
                    if (err) {
                        alert();
                        return console.log(err);
                    }
                });
            });
        }
        else {
            context.db.put({ _id: new Date().toISOString(), data: data });
        }
    };
    pouchService.prototype.saveDailyDoc = function (data) {
        var context = this;
        context.dailydatadb.put({ _id: new Date().toISOString(), data: data });
    };
    pouchService.prototype.getDocs = function () {
        var docs = [];
        var context = this;
        context.db.allDocs({ include_docs: true }, function (err, dbresponse) {
            if (!err)
                dbresponse.rows.forEach(function (doc) {
                    docs.push({ id: doc.id, data: doc.doc.data, rev: doc.doc._rev, bg: false });
                });
        });
        return docs;
    };
    pouchService.prototype.getDailyDocs = function () {
        var dailydocs = [];
        var context = this;
        context.dailydatadb.allDocs({ include_docs: true }, function (err, dbresponse) {
            if (!err)
                dbresponse.rows.forEach(function (doc) {
                    dailydocs.push({ id: doc.id, data: doc.doc.data, rev: doc.doc._rev, bg: false });
                });
        });
        return dailydocs;
    };
    pouchService.prototype.deleteDoc = function (id, rev) {
        var context = this;
        context.db.remove(id, rev);
    };
    pouchService.prototype.deleteDailyDoc = function (id, rev) {
        var context = this;
        context.dailydatadb.remove(id, rev);
    };
    //Privates
    pouchService.prototype.loadDatabases = function () {
        var context = this;
        context.db = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"]('essential');
        context.controldb = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"]('essential_control', { auto_compaction: true });
        context.dailydatadb = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"]('daily_data');
        context.credentialdb = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"]('credential', { auto_compaction: true });
        context.sprintdb = new pouchdb__WEBPACK_IMPORTED_MODULE_1__["default"]('sprint', { auto_compaction: true });
    };
    pouchService.prototype.logerror = function (error) {
        console.log(error);
        return false;
    };
    pouchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], pouchService);
    return pouchService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My Libraries\essential_dev\essentials-dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map