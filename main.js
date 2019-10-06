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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section1/section1.component */ "./src/app/section1/section1.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");





var routes = [
    {
        path: '', component: _section1_section1_component__WEBPACK_IMPORTED_MODULE_3__["Section1Component"]
    },
    {
        path: 'home', component: _section1_section1_component__WEBPACK_IMPORTED_MODULE_3__["Section1Component"]
    },
    {
        path: 'projects', component: _section2_section2_component__WEBPACK_IMPORTED_MODULE_4__["Section2Component"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    \r\n    margin:0;\r\n    padding:0;\r\n    word-wrap: break-word;\r\n}\r\n\r\n\r\n .section1-head \r\n{\r\n    margin:-4% 10% 1% 65%;\r\n    position: absolute;\r\n    width:auto;\r\n    /* border:1px solid black; */\r\n}\r\n\r\n\r\n .section1-head h1\r\n{\r\n    position: fixed;\r\n    color:black;\r\n    font-weight: 500;\r\n    letter-spacing: -.05em;\r\n    font-size: 10.59722vw;\r\n    line-height: 7.63889vw;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n\r\n .panel1-left_side1,  .panel1-right_side1\r\n{\r\n    z-index: 101;\r\n    width:auto;\r\n    position: absolute;\r\n    margin:10% 0% 10% 12%;\r\n}\r\n\r\n\r\n .panel1-left_side1 .porto{\r\n    color:#424242;\r\n    font-weight: 500;\r\n    letter-spacing: -.05em;\r\n    position: fixed;\r\n    font-size: 1.59722vw;\r\n    cursor: pointer;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: 1;\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n}\r\n\r\n\r\n .panel1-right_side1 \r\n{\r\n    \r\n    width:auto;\r\n    position: absolute;\r\n    margin:10% 0% 10% 85%;\r\n    \r\n}\r\n\r\n\r\n .panel1-right_side1 a{\r\n    color:#424242;\r\n    font-weight: 500;\r\n    letter-spacing: -.05em;\r\n    position: fixed;\r\n    font-size: 1.59722vw;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: 1;\r\n   \r\n}\r\n\r\n\r\n .panel1-left_side1 a.active,.panel1-right_side1 a.active\r\n{\r\n    color:rgb(141, 1, 255);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksUUFBUTtJQUNSLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7OztDQUdDOztJQUVHLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7O0NBQ0M7O0lBRUcsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG1FQUFtRTtBQUN2RTs7O0NBRUE7O0lBRUksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOzs7Q0FFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixtRUFBbUU7SUFDbkUsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7OztDQUNBOzs7SUFHSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7OztDQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsbUVBQW1FO0lBQ25FLFVBQVU7O0FBRWQ7OztDQUNBOztJQUVJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIFxyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4gLnNlY3Rpb24xLWhlYWQgXHJcbntcclxuICAgIG1hcmdpbjotNCUgMTAlIDElIDY1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICAvKiBib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyAqL1xyXG59XHJcbiAuc2VjdGlvbjEtaGVhZCBoMVxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNWVtO1xyXG4gICAgZm9udC1zaXplOiAxMC41OTcyMnZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcuNjM4ODl2dztcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JlbnplJywgc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcblxyXG4ucGFuZWwxLWxlZnRfc2lkZTEsICAucGFuZWwxLXJpZ2h0X3NpZGUxXHJcbntcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46MTAlIDAlIDEwJSAxMiU7XHJcbn1cclxuXHJcbi5wYW5lbDEtbGVmdF9zaWRlMSAucG9ydG97XHJcbiAgICBjb2xvcjojNDI0MjQyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBmb250LXNpemU6IDEuNTk3MjJ2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnR3JlbnplJywgc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnBhbmVsMS1yaWdodF9zaWRlMSBcclxue1xyXG4gICAgXHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOjEwJSAwJSAxMCUgODUlO1xyXG4gICAgXHJcbn1cclxuLnBhbmVsMS1yaWdodF9zaWRlMSBhe1xyXG4gICAgY29sb3I6IzQyNDI0MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNWVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZm9udC1zaXplOiAxLjU5NzIydnc7XHJcbiAgICBmb250LWZhbWlseTogJ0dyZW56ZScsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgIFxyXG59XHJcbi5wYW5lbDEtbGVmdF9zaWRlMSBhLmFjdGl2ZSwucGFuZWwxLXJpZ2h0X3NpZGUxIGEuYWN0aXZlXHJcbntcclxuICAgIGNvbG9yOnJnYigxNDEsIDEsIDI1NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n    \n<div class=\"section1-head\">\n        <h1>/2019</h1>\n</div>\n<div class=\"panel1-left_side1\">\n        <a class=\"porto\" routerLink=\"/\" >Home</a>\n</div>\n\n<div class=\"panel1-right_side1\">\n        <a class=\"about\" routerLink=\"/home\" routerLinkActive=\"active\" > &nbsp;&nbsp; &nbsp;About</a>\n        <br>\n        <br>\n        <a class=\"projects\" routerLink=\"/projects\"  routerLinkActive=\"active\"> &nbsp;&nbsp;&nbsp; Projects</a>\n</div>\n\n<!-- <app-section1 ></app-section1> -->\n<!-- <app-section2></app-section2> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.first = "Be";
        this.second = "Creative";
        this.owner_name = "Shekhar Shashank";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section1/section1.component */ "./src/app/section1/section1.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _section1_section1_component__WEBPACK_IMPORTED_MODULE_5__["Section1Component"],
                _section2_section2_component__WEBPACK_IMPORTED_MODULE_6__["Section2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/section1/section1.component.css":
/*!*************************************************!*\
  !*** ./src/app/section1/section1.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.section1{\r\n    position: absolute;\r\n    height:120% ;\r\n    width:99%;\r\n    z-index: 100;\r\n    \r\n    /* border:1px solid black; */\r\n}\r\n\r\n.section1 .panel1\r\n{\r\n    z-index:100;\r\n    width:70%;\r\n    height: 140% ;\r\n    margin:10% 10% 10% 15%;\r\n    position: absolute;\r\n    /* background-color:#ff808c; */\r\n    -webkit-perspective: 25px;\r\n            perspective: 25px;\r\n    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,224,51,1) 0%, rgba(225,130,1,1) 90.5% );\r\n    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */\r\n    transition: all ease .5s;\r\n}\r\n\r\n.section1 .panel1 .subpanel1\r\n{\r\n    position: absolute;\r\n    margin:12% 70% 10% -12%;\r\n    /* border:2px solid black; */\r\n    z-index:100;\r\n    width:auto;\r\n}\r\n\r\n.section1 .panel1 .subpanel1 h1, .section1 .panel1 .subpanel3 h1\r\n{\r\n    color:black;\r\n    font-weight: 500;\r\n    letter-spacing: -.05em;\r\n    font-size: 15.59722vw;\r\n    line-height: 12.63889vw;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: .8;\r\n}\r\n\r\n.section1 .panel2 \r\n{    z-index:100;\r\n    width:60%;\r\n    position: absolute;\r\n    height:25%;\r\n    margin:65% 20% 20% 20%;\r\n    \r\n}\r\n\r\n.section1 .panel2 .panel2_row1\r\n{   \r\n    position: absolute;\r\n    width:40%;\r\n    height: auto;\r\n    \r\n}\r\n\r\n.section1 .panel2 .panel2_row1 .owner_name{\r\n    color:#424242;\r\n    font-size: .8rem;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: 1;\r\n    \r\n}\r\n\r\n.section1 .panel2 .panel2_row1 .details{\r\n \r\n    position: absolute;\r\n   \r\n}\r\n\r\n.section1 .panel2 .panel2_row1 .details h4{\r\n    margin-top:-2%;\r\n    color:black;\r\n    font-size: 1rem;\r\n    font-family: 'Grenze', serif;\r\n    opacity: .6;\r\n}\r\n\r\n.section1 .panel2 .panel2_row2\r\n{\r\n    position: absolute;\r\n    width:40%;\r\n    height:auto;\r\n    margin-left:50%;\r\n}\r\n\r\n.section1 .panel2 .panel2_row2 .follow h1 \r\n{\r\n    color:#424242;\r\n    font-size: 1.4rem;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: 1;\r\n}\r\n\r\n.section1 .panel2 .panel2_row2 .follow_urls h1\r\n{\r\n   \r\n    color:black;\r\n    font-size: 1rem;\r\n    font-family: 'Grenze', serif;\r\n    opacity: .8;\r\n}\r\n\r\n.section1 .panel1 .subpanel3\r\n{\r\n    position: absolute;\r\n    margin:92% 0% 10% 75%;\r\n    /* border:2px solid black; */\r\n    width:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbjEvc2VjdGlvbjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZOztJQUVaLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix5QkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLHVIQUF1SDtJQUN2SCx3RUFBd0U7SUFDeEUsd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBQ0E7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsbUVBQW1FO0lBQ25FLFdBQVc7QUFDZjs7QUFFQTtLQUNLLFdBQVc7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixtRUFBbUU7SUFDbkUsVUFBVTs7QUFFZDs7QUFDQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBOztJQUVJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG1FQUFtRTtJQUNuRSxVQUFVO0FBQ2Q7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWN0aW9uMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDoxMjAlIDtcclxuICAgIHdpZHRoOjk5JTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIFxyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBibGFjazsgKi9cclxufVxyXG5cclxuLnNlY3Rpb24xIC5wYW5lbDFcclxue1xyXG4gICAgei1pbmRleDoxMDA7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBoZWlnaHQ6IDE0MCUgO1xyXG4gICAgbWFyZ2luOjEwJSAxMCUgMTAlIDE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6I2ZmODA4YzsgKi9cclxuICAgIHBlcnNwZWN0aXZlOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsICByZ2JhKDI1NSwyMjQsNTEsMSkgMCUsIHJnYmEoMjI1LDEzMCwxLDEpIDkwLjUlICk7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7ICovXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XHJcbn1cclxuXHJcbi5zZWN0aW9uMSAucGFuZWwxIC5zdWJwYW5lbDFcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOjEyJSA3MCUgMTAlIC0xMiU7XHJcbiAgICAvKiBib3JkZXI6MnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgei1pbmRleDoxMDA7XHJcbiAgICB3aWR0aDphdXRvO1xyXG59XHJcbi5zZWN0aW9uMSAucGFuZWwxIC5zdWJwYW5lbDEgaDEsIC5zZWN0aW9uMSAucGFuZWwxIC5zdWJwYW5lbDMgaDFcclxue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDVlbTtcclxuICAgIGZvbnQtc2l6ZTogMTUuNTk3MjJ2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAxMi42Mzg4OXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmVuemUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLnNlY3Rpb24xIC5wYW5lbDIgXHJcbnsgICAgei1pbmRleDoxMDA7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6MjUlO1xyXG4gICAgbWFyZ2luOjY1JSAyMCUgMjAlIDIwJTtcclxuICAgIFxyXG59XHJcblxyXG4uc2VjdGlvbjEgLnBhbmVsMiAucGFuZWwyX3JvdzFcclxueyAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6NDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZWN0aW9uMSAucGFuZWwyIC5wYW5lbDJfcm93MSAub3duZXJfbmFtZXtcclxuICAgIGNvbG9yOiM0MjQyNDI7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmVuemUnLCBzZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbn1cclxuLnNlY3Rpb24xIC5wYW5lbDIgLnBhbmVsMl9yb3cxIC5kZXRhaWxze1xyXG4gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIFxyXG59XHJcbi5zZWN0aW9uMSAucGFuZWwyIC5wYW5lbDJfcm93MSAuZGV0YWlscyBoNHtcclxuICAgIG1hcmdpbi10b3A6LTIlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0dyZW56ZScsIHNlcmlmO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbn1cclxuLnNlY3Rpb24xIC5wYW5lbDIgLnBhbmVsMl9yb3cyXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6NTAlO1xyXG59XHJcbi5zZWN0aW9uMSAucGFuZWwyIC5wYW5lbDJfcm93MiAuZm9sbG93IGgxIFxyXG57XHJcbiAgICBjb2xvcjojNDI0MjQyO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0dyZW56ZScsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZWN0aW9uMSAucGFuZWwyIC5wYW5lbDJfcm93MiAuZm9sbG93X3VybHMgaDFcclxue1xyXG4gICBcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHcmVuemUnLCBzZXJpZjtcclxuICAgIG9wYWNpdHk6IC44O1xyXG59XHJcbi5zZWN0aW9uMSAucGFuZWwxIC5zdWJwYW5lbDNcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOjkyJSAwJSAxMCUgNzUlO1xyXG4gICAgLyogYm9yZGVyOjJweCBzb2xpZCBibGFjazsgKi9cclxuICAgIHdpZHRoOmF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/section1/section1.component.html":
/*!**************************************************!*\
  !*** ./src/app/section1/section1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section1\">\r\n    <div class=\"panel1\" id=\"panel1\">     \r\n        <div class=\"subpanel1\">\r\n          <h1>&nbsp;{{first}} <br> {{second}}</h1>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        \r\n    </div>\r\n    \r\n    <div class=\"panel2\">\r\n      <div class=\"panel2_row1\">\r\n        <span class=\"owner_name\">\r\n            <h1>&nbsp;Shekhar Shashank (Freelancer)</h1>\r\n        </span>\r\n        <span class=\"details\">\r\n            &nbsp; &nbsp;<h4>\r\n                Success is the outcome of thinking, visualizing, planning and acting.\r\n                 I am a full-stack developer with a dream of learning new things and implement that learning \r\n                 to solve real-life problems. I also want to be an active part of the never-ending technical advancements \r\n                 in the near future. Always fascinated by the fast developing world and the new technologies making their way to our daily life and always dreamt of being a part of the group that sets this change.\r\n            </h4>\r\n        </span>\r\n      </div>\r\n  \r\n      <div class=\"panel2_row2\">\r\n          <span class=\"follow\">\r\n              <h1>Follow me </h1>\r\n          </span>\r\n          <span class=\"follow_urls\">\r\n            <h1>I am available here:- </h1>\r\n            <span class=\"url_list\">\r\n             <h1> Likedin   Instagram   Dribble   Github</h1>\r\n            </span>\r\n          </span>\r\n          \r\n      </div>    \r\n    </div>\r\n    <br>\r\n  </div>"

/***/ }),

/***/ "./src/app/section1/section1.component.ts":
/*!************************************************!*\
  !*** ./src/app/section1/section1.component.ts ***!
  \************************************************/
/*! exports provided: Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return Section1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Section1Component = /** @class */ (function () {
    function Section1Component() {
        this.first = "Be";
        this.second = "Creative";
        this.owner_name = "Shekhar Shashank";
    }
    Section1Component.prototype.ngOnInit = function () {
    };
    Section1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section1',
            template: __webpack_require__(/*! ./section1.component.html */ "./src/app/section1/section1.component.html"),
            styles: [__webpack_require__(/*! ./section1.component.css */ "./src/app/section1/section1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Section1Component);
    return Section1Component;
}());



/***/ }),

/***/ "./src/app/section2/section2.component.css":
/*!*************************************************!*\
  !*** ./src/app/section2/section2.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.section2{\r\n    position: absolute;\r\n    height:120% ;\r\n    width:99%;\r\n    z-index: 100;\r\n    \r\n    /* border:1px solid black; */\r\n}\r\n.section2 .section2_panel1\r\n{\r\n    z-index:100;\r\n    width:70%;\r\n    height: 140% ;\r\n    margin:10% 10% 10% 15%;\r\n    position: absolute;\r\n    /* background-color:#ff808c; */\r\n    -webkit-perspective: 25px;\r\n            perspective: 25px;\r\n    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(4, 254, 179) 0%, rgb(32, 185, 255) 90.5% );\r\n    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */\r\n    transition: all ease .5s;\r\n}\r\n.section2 .section2_panel1 .subpanel1\r\n{\r\n    position: absolute;\r\n    margin:12% 70% 10% -12%;\r\n    /* border:2px solid black; */\r\n    z-index:100;\r\n    width:auto;\r\n}\r\n.section2 .section2_panel1 .subpanel1 h1\r\n{\r\n    color:black;\r\n    font-weight: 500;\r\n    letter-spacing: -.05em;\r\n    font-size: 15.59722vw;\r\n    line-height: 12.63889vw;\r\n    font-family: 'Grenze', serif;\r\n    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    opacity: .8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbjIvc2VjdGlvbjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZOztJQUVaLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIscUhBQXFIO0lBQ3JILHdFQUF3RTtJQUN4RSx3QkFBd0I7QUFDNUI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsbUVBQW1FO0lBQ25FLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlY3Rpb24ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjEyMCUgO1xyXG4gICAgd2lkdGg6OTklO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgXHJcbiAgICAvKiBib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyAqL1xyXG59XHJcbi5zZWN0aW9uMiAuc2VjdGlvbjJfcGFuZWwxXHJcbntcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgaGVpZ2h0OiAxNDAlIDtcclxuICAgIG1hcmdpbjoxMCUgMTAlIDEwJSAxNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwOGM7ICovXHJcbiAgICBwZXJzcGVjdGl2ZTogMjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLCAgcmdiKDQsIDI1NCwgMTc5KSAwJSwgcmdiKDMyLCAxODUsIDI1NSkgOTAuNSUgKTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTsgKi9cclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcclxufVxyXG5cclxuLnNlY3Rpb24yIC5zZWN0aW9uMl9wYW5lbDEgLnN1YnBhbmVsMVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46MTIlIDcwJSAxMCUgLTEyJTtcclxuICAgIC8qIGJvcmRlcjoycHggc29saWQgYmxhY2s7ICovXHJcbiAgICB6LWluZGV4OjEwMDtcclxuICAgIHdpZHRoOmF1dG87XHJcbn1cclxuLnNlY3Rpb24yIC5zZWN0aW9uMl9wYW5lbDEgLnN1YnBhbmVsMSBoMVxyXG57XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNWVtO1xyXG4gICAgZm9udC1zaXplOiAxNS41OTcyMnZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyLjYzODg5dnc7XHJcbiAgICBmb250LWZhbWlseTogJ0dyZW56ZScsIHNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/section2/section2.component.html":
/*!**************************************************!*\
  !*** ./src/app/section2/section2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section2\">\n    <div class=\"section2_panel1\" id=\"section2_panel1\">     \n        <div class=\"subpanel1\">\n          <h1>&nbsp; Coming soon</h1>\n        </div>\n        <br>\n        <br>\n       \n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/section2/section2.component.ts":
/*!************************************************!*\
  !*** ./src/app/section2/section2.component.ts ***!
  \************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return Section2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Section2Component = /** @class */ (function () {
    function Section2Component() {
    }
    Section2Component.prototype.ngOnInit = function () {
    };
    Section2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section2',
            template: __webpack_require__(/*! ./section2.component.html */ "./src/app/section2/section2.component.html"),
            styles: [__webpack_require__(/*! ./section2.component.css */ "./src/app/section2/section2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Section2Component);
    return Section2Component;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\project\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map