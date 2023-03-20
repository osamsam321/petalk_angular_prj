"use strict";
(self["webpackChunkpetalk_prj"] = self["webpackChunkpetalk_prj"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ 8351);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "stage"], ["id", "main_body"], ["id", "main_page"], ["id", "main_nav"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-main-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_0__.MainNavComponent], styles: ["#stage[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    margin: 0px 0px 0px 0px;\n    padding: 0px 0px;\n    width: 100%;\n}\n#main_body[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n\n}\nnav[_ngcontent-%COMP%], #main_nav[_ngcontent-%COMP%]\n{\n   margin: 0px 0px 0px 0px; \n   padding: 0px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBOztHQUVHLHVCQUF1QjtHQUN2Qix3QkFBd0I7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNzdGFnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4jbWFpbl9ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxubmF2LCAjbWFpbl9uYXZcbntcbiAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4OyBcbiAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test/test.component */ 1926);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bar-chart/bar-chart.component */ 7720);
/* harmony import */ var _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/line-chart/line-chart.component */ 3375);
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ 8351);
/* harmony import */ var _components_new_petalk_new_petalk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-petalk/new-petalk.component */ 4119);
/* harmony import */ var _components_pet_event_box_simple_pet_event_box_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pet-event-box-simple/pet-event-box-simple.component */ 1409);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _components_your_pet_carousel_your_pet_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/your-pet-carousel/your-pet-carousel.component */ 8148);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_petalk_calendar_petalk_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/petalk-calendar/petalk-calendar.component */ 7742);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/angular */ 8245);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);





















// import { MainNavComponent } from './components/main-nav/main-nav.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__.FullCalendarModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot([
            {
                path: 'test',
                component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__.TestComponent
            },
            {
                path: 'home',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
            },
            {
                path: 'petalk_calendar',
                component: _components_petalk_calendar_petalk_calendar_component__WEBPACK_IMPORTED_MODULE_11__.PetalkCalendarComponent
            },
            {
                path: 'contact',
                component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__.ContactComponent
            },
            {
                path: 'new-petalk',
                component: _components_new_petalk_new_petalk_component__WEBPACK_IMPORTED_MODULE_7__.NewPetalkComponent
            },
            {
                path: '**',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
            }
        ]),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_test_test_component__WEBPACK_IMPORTED_MODULE_2__.TestComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__.BarChartComponent,
        _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__.LineChartComponent,
        _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__.MainNavComponent,
        _components_new_petalk_new_petalk_component__WEBPACK_IMPORTED_MODULE_7__.NewPetalkComponent,
        _components_pet_event_box_simple_pet_event_box_simple_component__WEBPACK_IMPORTED_MODULE_8__.PetEventBoxSimpleComponent,
        _components_your_pet_carousel_your_pet_carousel_component__WEBPACK_IMPORTED_MODULE_9__.YourPetCarouselComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["default"],
        _components_petalk_calendar_petalk_calendar_component__WEBPACK_IMPORTED_MODULE_11__.PetalkCalendarComponent,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__.ContactComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__.FullCalendarModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule] }); })();


/***/ }),

/***/ 7720:
/*!*************************************************************!*\
  !*** ./src/app/components/bar-chart/bar-chart.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarChartComponent": () => (/* binding */ BarChartComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class BarChartComponent {
    constructor() { }
    ngOnInit() {
        this.createChart();
    }
    createChart() {
        this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"]("MyChart", {
            type: 'bar',
            data: {
                labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
                datasets: [
                    {
                        label: "Sales",
                        data: ['467', '576', '572', '79', '92',
                            '574', '573', '576'],
                        backgroundColor: 'blue'
                    },
                    {
                        label: "Profit",
                        data: ['542', '542', '536', '327', '17',
                            '0.00', '538', '541'],
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5
            }
        });
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], decls: 3, vars: 1, consts: [[1, "chart-container"], ["id", "MyChart"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.chart);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 21, vars: 0, consts: [["action", "#", "method", "post"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Your name.."], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "Your email.."], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", "placeholder", "Subject.."], ["for", "message"], ["id", "message", "name", "message", "placeholder", "Write something..", 2, "height", "200px"], ["type", "submit", "value", "Submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html")(1, "head")(2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 0)(8, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 8)(20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */", "body[_ngcontent-%COMP%] {\n\t\t\tfont-family: Arial, sans-serif;\n\t\t\tbackground-color: #f2f2f2;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n            width: 100vw;\n            height: 100vh;\n\t\t}\n\t\th1[_ngcontent-%COMP%] {\n\t\t\ttext-align: center;\n\t\t\tpadding-top: 50px;\n\t\t\tcolor: #333;\n\t\t}\n\t\tform[_ngcontent-%COMP%] {\n\t\t\tmargin: 0 auto;\n\t\t\tmax-width: 80%;\n\t\t\tbackground-color: #fff;\n\t\t\tpadding: 50px;\n\t\t\tbox-shadow: 0px 0px 10px #ccc;\n\t\t}\n\t\tinput[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n\t\t\twidth: 100%;\n\t\t\tpadding: 12px;\n\t\t\tborder: 1px solid #ccc;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin-bottom: 20px;\n\t\t\tresize: vertical;\n\t\t}\n\t\tinput[type=submit][_ngcontent-%COMP%] {\n\t\t\tbackground-color: #4CAF50;\n\t\t\tcolor: white;\n\t\t\tpadding: 12px 20px;\n\t\t\tborder: none;\n\t\t\tborder-radius: 4px;\n\t\t\tcursor: pointer;\n\t\t}\n\t\tinput[type=submit][_ngcontent-%COMP%]:hover {\n\t\t\tbackground-color: #45a049;\n\t\t}\n\t\tlabel[_ngcontent-%COMP%] {\n\t\t\tfont-weight: bold;\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t@media screen and (max-width: 600px) {\n\t\t\tform[_ngcontent-%COMP%] {\n\t\t\t\tpadding: 20px;\n\t\t\t}\n\t\t}"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _homeservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeservice */ 547);
/* harmony import */ var _pet_event_box_simple_pet_event_box_simple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pet-event-box-simple/pet-event-box-simple.component */ 1409);
/* harmony import */ var _your_pet_carousel_your_pet_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../your-pet-carousel/your-pet-carousel.component */ 8148);





class HomeComponent {
    // carousel!: ElementRef;
    // @ViewChild('pRef', {static: false}) pRef: ElementRef;
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
        this.getUser();
    }
    ngOnChanges() {
    }
    ngAfterViewInit() {
    }
    handleError(error) {
        // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
        // if (myParagraphRef) {
        //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
        // }
        console.log('inside of hangle error');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }
    getUser() {
        let url = "http://localhost/petalk/pet/name/{id}";
        this.homeService.getPetsWithId(1)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.handleError(error)))
            .subscribe((userData) => {
            this.petalk_user = userData;
            console.log("response details in home " + userData.first_name + " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_homeservice__WEBPACK_IMPORTED_MODULE_0__.homeservice)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [[1, "basic_general_flex"], [3, "petalk_user"], ["id", "pet_event_section"], [1, "flex_box_center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-your-pet-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-pet-event-box-simple", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("petalk_user", ctx.petalk_user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("petalk_user", ctx.petalk_user);
    } }, dependencies: [_pet_event_box_simple_pet_event_box_simple_component__WEBPACK_IMPORTED_MODULE_1__.PetEventBoxSimpleComponent, _your_pet_carousel_your_pet_carousel_component__WEBPACK_IMPORTED_MODULE_2__.YourPetCarouselComponent], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  header[_ngcontent-%COMP%] {\r\n    background-color: lightgray;\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: red;\r\n}\r\n  \r\n  .basic_general_flex[_ngcontent-%COMP%]\r\n{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  #animalNotifcationbtn[_ngcontent-%COMP%]{\r\n    background-color: rgb(72, 255, 0);\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n  \r\n  #petalk_board_section[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n  #petalk_board[_ngcontent-%COMP%]\r\n{\r\n    width: 900px;\r\n    height: 500px;\r\n    background-color:rgba(35, 199, 185, 0.8);\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n  .flex_box_center[_ngcontent-%COMP%]\r\n{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items:center;\r\n}\r\n  \r\n  #pet_event_section[_ngcontent-%COMP%]{\r\n  margin-top: 15%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztFQUNBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztFQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztFQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0VBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0VBQ0E7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxlQUFlOztBQUVqQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJhc2ljX2dlbmVyYWxfZmxleFxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNhbmltYWxOb3RpZmNhdGlvbmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMjU1LCAwKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4jcGV0YWxrX2JvYXJkX3NlY3Rpb25cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiNwZXRhbGtfYm9hcmRcclxue1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzNSwgMTk5LCAxODUsIDAuOCk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZmxleF9ib3hfY2VudGVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxufVxyXG4jcGV0X2V2ZW50X3NlY3Rpb257XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG5cclxufVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 547:
/*!************************************************!*\
  !*** ./src/app/components/home/homeservice.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeservice": () => (/* binding */ homeservice)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class homeservice {
    constructor(http) {
        this.http = http;
        // private petWithIdURLTEST = "http://localhost:8002/petalk/pet/name/";
        this.pet2WithIdURLTEST = "http://localhost:8002/petalk/user/getInfo/";
    }
    getPetsWithId(id) {
        return this.http.get(this.pet2WithIdURLTEST + id.toString());
    }
}
homeservice.ɵfac = function homeservice_Factory(t) { return new (t || homeservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
homeservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: homeservice, factory: homeservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3375:
/*!***************************************************************!*\
  !*** ./src/app/components/line-chart/line-chart.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineChartComponent": () => (/* binding */ LineChartComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LineChartComponent {
    constructor() { }
    ngOnInit() {
        this.createChart();
    }
    createChart() {
        // get start day of Sunday
        let dayOfTheWeek = new Date().getDay();
        let startDate = new Date(Date.now() - dayOfTheWeek);
        var xDatasets = new Array(7);
        let tempDate;
        let amountOfDaysToShow = 5;
        tempDate = startDate;
        for (var i = 0; i < 5; i++) {
            let tempDate = new Date();
            tempDate.setDate(tempDate.getDate() - (amountOfDaysToShow - i));
            console.log("tempdate value: " + tempDate.getDate());
            console.log("tempdate value2 " + tempDate);
            xDatasets[i] = this.getDayOfWeekName(tempDate.getDay()) + " " +
                this.getMonthName(tempDate) + " " + tempDate.getDate();
        }
        this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"]("MyChart", {
            type: 'line',
            data: {
                labels: [xDatasets[0], xDatasets[1],
                    xDatasets[2], xDatasets[3],
                    xDatasets[4], xDatasets[5],
                    xDatasets[6]],
                datasets: [
                    {
                        label: "Sales",
                        data: ['467', '576', '572', '79', '92',
                            '574'],
                        backgroundColor: 'blue'
                    },
                    {
                        label: "Profit",
                        data: ['542', '542', '536', '327', '17',
                            '0.00', '538', '541'],
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5
            }
        });
    }
    getMonthName(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthIndex = date.getMonth(); // Gets the month (0-11)
        return months[monthIndex]; // Returns the name of the month
    }
    getDayOfWeekName(index) {
        const weeks = ["Sun", "Mon", "Tues", "Wed",
            "Thur", "Fri", "Sat"];
        return weeks[index];
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(); };
LineChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], decls: 3, vars: 1, consts: [[1, "chart-container"], ["id", "MyChart"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.chart);
    } }, styles: [".chart-container[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7OztBQUdmIiwiZmlsZSI6ImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC1jb250YWluZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class LoginComponent {
    constructor(formBuilder, route, router, form
    // add these in later
    // private accountService: AccountService,
    // private alertService: AlertService
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.form = form;
    }
    ngOnInit() {
        // use this termportaly 
        this.login();
        // this.form = this.formBuilder.group({
        //     username: ['', Validators.required],
        //     password: ['', Validators.required]
        // });
        // // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        //temp url
        let url = 'home';
        this.router.navigate(['/home']);
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // reset alerts on submit
        // this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        // this.accountService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " auto login for now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8351:
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavComponent": () => (/* binding */ MainNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_dark_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-dark-mode */ 8180);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class MainNavComponent {
  constructor(darkModeService) {
    this.darkModeService = darkModeService;
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  ngOnInit() {}

  onToggle() {
    this.darkModeService.toggle();
  }

}

MainNavComponent.ɵfac = function MainNavComponent_Factory(t) {
  return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_dark_mode__WEBPACK_IMPORTED_MODULE_1__.DarkModeService));
};

MainNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MainNavComponent,
  selectors: [["app-main-nav"]],
  decls: 16,
  vars: 3,
  consts: [["id", "links_section"], ["id", "link_container"], ["routerLink", "/home"], ["routerLink", "/new-petalk"], ["routerLink", "/contact"], ["routerLink", "/petalk_calendar"], ["type", "checkbox", 3, "checked", "change"]],
  template: function MainNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "div", 0)(2, "div", 1)(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Pet ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Calendar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainNavComponent_Template_input_change_14_listener() {
        return ctx.onToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 1, ctx.darkMode$));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["nav[_ngcontent-%COMP%]{\n    width: 100vw;\n    height: 5vh;\n    background-color: rgb(236, 236, 236);\n    position: fixed;\n    bottom: 0%;\n    left: 0%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n    box-shadow: rgba(142, 172, 119, 0.25) 0px 30px 60px -12px inset, rgba(23, 175, 86, 0.3) 0px 18px 36px -18px inset;\n}\na[_ngcontent-%COMP%]\n{\n    text-decoration: none;\n    color: rgb(66, 63, 63);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: none;\n    font-size: 25px;\n}\n#links_section[_ngcontent-%COMP%]\n{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n#link_container[_ngcontent-%COMP%]\n{\n    height: 5%;\n    margin-left: 300px;\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n    background-color: #2d3436;\n    color: #dfe6e9;\n  }\nbody.light-mode[_ngcontent-%COMP%] {\n    background-color: #dfe6e9;\n    color: #2d3436;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUhBQWlIO0FBQ3JIO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw0REFBNEQ7SUFDNUQsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQiIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDIsIDE3MiwgMTE5LCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDIzLCAxNzUsIDg2LCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5hXG57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNjYsIDYzLCA2Myk7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4jbGlua3Nfc2VjdGlvblxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiNsaW5rX2NvbnRhaW5lclxue1xuICAgIGhlaWdodDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xufVxuYm9keS5kYXJrLW1vZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XG4gICAgY29sb3I6ICNkZmU2ZTk7XG4gIH1cbiAgXG4gIGJvZHkubGlnaHQtbW9kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcbiAgICBjb2xvcjogIzJkMzQzNjtcbiAgfVxuIl19 */"]
});

/***/ }),

/***/ 4119:
/*!***************************************************************!*\
  !*** ./src/app/components/new-petalk/new-petalk.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPetalkComponent": () => (/* binding */ NewPetalkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



const _c0 = ["tstButton"];
class NewPetalkComponent {
    constructor(Render, tst_btn_el) {
        this.tst_btn_el = tst_btn_el;
    }
    ngOnInit() {
    }
    tstBtnClick() {
        // this.http
    }
}
NewPetalkComponent.ɵfac = function NewPetalkComponent_Factory(t) { return new (t || NewPetalkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NewPetalkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPetalkComponent, selectors: [["app-new-petalk"]], viewQuery: function NewPetalkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tst_btn_el = _t.first);
    } }, decls: 78, vars: 0, consts: [["id", "main_form_container"], [1, "input_flex_container"], ["id", "main_top_img", "src", "../../../assets/img/test_img/193-1931235_logo-pet-clinic-logo.png"], ["id", "petalk_pet_form"], [1, "input_element_flex_col"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", "placeholder", "Enter your name"], ["for", "species"], ["id", "species", "name", "species"], ["value", "dog"], ["value", "cat"], ["value", "bird"], ["value", "fish"], ["value", "other"], ["for", "height"], ["type", "number", "id", "height", "name", "height", "min", "0", "step", "0.1", "required", "", "placeholder", "Enter a number"], ["for", "length"], ["type", "number", "id", "length", "name", "length", "min", "0", "step", "0.1", "required", "", "placeholder", "Enter a number"], ["for", "width"], ["type", "number", "id", "width", "name", "width", "min", "0", "step", "0.1", "required", "", "placeholder", "Enter a number"], ["for", "weight"], ["type", "weight", "id", "weight", "name", "weight", "min", "0", "step", "0.1", "required", "", "placeholder", "Enter a number"], ["for", "measurement"], ["id", "measurement", "name", "measurement"], ["value", "inches"], ["value", "centimeters"], ["id", "weight", "name", "weight"], ["value", "weight"], ["value", "kilograms"], ["for", "color"], ["type", "text", "id", "color", "name", "color", "required", "", "placeholder", "Enter the color"], ["for", "age"], ["type", "age", "id", "age", "name", "age", "min", "1", "step", "1", "required", "", "placeholder", "Enter a number"], ["type", "submit", "id", "submit_form", "form", "petalk_pet_form"]], template: function NewPetalkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html")(1, "head")(2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pet Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body")(5, "div", 0)(6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pet Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 3)(12, "div", 1)(13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Species:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 8)(21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1)(32, "div", 4)(33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4)(37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Length:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1)(41, "div", 4)(42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Width:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4)(46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1)(50, "div", 4)(51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "measurement type type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 23)(54, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "inches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "centimeters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4)(59, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "weight type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "select", 26)(62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "pounds (lb)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "kilograms (kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1)(67, "div", 4)(68, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4)(72, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1)(76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGV0YWxrLmNvbXBvbmVudC5jc3MifQ== */", "html[_ngcontent-%COMP%]\n      {\n        box-sizing: border-box;\n      }\n      body[_ngcontent-%COMP%]{\n        background-image: url(\"../../../assets/img/test_img/360_F_298201821_e90YxH0f6FBwOvcKhynlwF8sNYxlCMsg.jpg\");\n        background-size: 100vw 125vh;\n        background-position: center;\n        width: 100%;\n        margin: auto;\n        height: 125vh;\n        box-sizing: border-box;\n      }\n      label[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 10px;\n      }\n      .radio_cont_flex[_ngcontent-%COMP%]\n      {\n        display: flex;\n        flex-direction: row;\n      }\n      .label_for_radio[_ngcontent-%COMP%]\n      {\n        margin-left: 10px;\n      }\n      input[type=\"text\"][_ngcontent-%COMP%], input[type=\"number\"][_ngcontent-%COMP%], input[type=\"height\"][_ngcontent-%COMP%], input[type=\"width\"][_ngcontent-%COMP%], input[type=\"length\"][_ngcontent-%COMP%], input[type=\"color\"][_ngcontent-%COMP%], input[type='weight'][_ngcontent-%COMP%], input[type='age'][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n        width:  60%;\n        padding: 2.5%;\n        margin-left: 0px;\n        border: 1px solid #ccc;\n        border-radius: 6px;\n        box-sizing: border-box;\n        margin-bottom: 30px;\n        background-color: rgba(234, 234, 234);\n\n      }\n      input[_ngcontent-%COMP%]::selection {\n        background-color: #b4f737;\n        color: #252525;\n        border-bottom: 2px solid greenyellow;\n      }\n      input[_ngcontent-%COMP%]:focus {\n        outline: none !important;\n        border:1px solid rgb(5, 255, 59);\n        box-shadow: 0 0 10px #719ECE;\n      }\n      input[type = 'radio'][_ngcontent-%COMP%]\n      {\n        width: 25px;\n        height: 25px;\n        margin-left: 25px;\n      }\n      input[type=\"submit\"][_ngcontent-%COMP%] {\n        background-color: #4CAF50;\n        color: white;\n        padding: 12px 20px;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 16px;\n      }\n      input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n        background-color: #45a049;\n      }\n      .input_flex_container[_ngcontent-%COMP%]\n      {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n      }\n      .input_element_flex_col[_ngcontent-%COMP%]\n      {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: column;\n        margin-top: 5%;\n        width: 40%;\n      }\n      .input_element_flex_row[_ngcontent-%COMP%]\n      {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: row;\n        margin-top: 5%;\n        width: 40%;\n      }\n\n\n      #submit_form[_ngcontent-%COMP%]\n      {\n        width: 300px;\n        height: 60px;\n        background-color: greenyellow;\n        border: none;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n      }\n      #main_form_container[_ngcontent-%COMP%]\n      {\n        margin: auto;\n        background-color: rgba(251, 253, 253, 1);\n        border: 2px solid rgb(244, 255, 251);\n        width: 70%;\n        height: 125%;\n        margin-top: .25%;\n        box-sizing: border-box;\n      }\n    \n      #main_top_img[_ngcontent-%COMP%]\n      {\n        width: 350px;\n        height: 150px;\n        border-radius: 10px;\n        margin-bottom: 2%;\n        background-color: transparent;\n      }"] });


/***/ }),

/***/ 4937:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pet-event-box-simple/PetEventBoxSimpleInterface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5661:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pet-event-box-simple/PetEventBoxSimpleService.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetEventBoxSimpleService": () => (/* binding */ PetEventBoxSimpleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class PetEventBoxSimpleService {
    constructor(http) {
        this.http = http;
        // private petWithIdURLTEST = "http://localhost:8002/petalk/pet/name/";
        this.pet2WithIdURLTEST = "http://localhost:8002/petalk/user/getInfo/";
    }
    getPetWithId(id) {
        return this.http.get(this.pet2WithIdURLTEST + id.toString());
    }
}
PetEventBoxSimpleService.ɵfac = function PetEventBoxSimpleService_Factory(t) { return new (t || PetEventBoxSimpleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PetEventBoxSimpleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PetEventBoxSimpleService, factory: PetEventBoxSimpleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1409:
/*!***********************************************************************************!*\
  !*** ./src/app/components/pet-event-box-simple/pet-event-box-simple.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetEventAudit": () => (/* binding */ PetEventAudit),
/* harmony export */   "PetEventBoxSimpleComponent": () => (/* binding */ PetEventBoxSimpleComponent)
/* harmony export */ });
/* harmony import */ var _PetEventBoxSimpleInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PetEventBoxSimpleInterface */ 4937);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _PetEventBoxSimpleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PetEventBoxSimpleService */ 5661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);







const _c0 = ["animalName"];
const _c1 = ["petalk_board_nothing"];
const _c2 = ["ngb_carousel_wrap"];
function PetEventBoxSimpleComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9, 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 19);
} if (rf & 2) {
    const petEventAudit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", petEventAudit_r5.pet_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", petEventAudit_r5.event_name, "");
} }
function PetEventBoxSimpleComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PetEventBoxSimpleComponent_5_ng_template_0_Template, 15, 2, "ng-template", 7);
} }
class PetEventBoxSimpleComponent {
    // carousel!: ElementRef;
    // @ViewChild('pRef', {static: false}) pRef: ElementRef;
    constructor(PetEventBoxSimpleService, pet_name, carousel, renderer2) {
        this.PetEventBoxSimpleService = PetEventBoxSimpleService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.pet_names = [''];
        this.petEventAuditList = [];
        this.renderer2 = renderer2;
        this.pet_name_el = pet_name;
    }
    ngOnChanges() {
        this.updatePetEventAuditList();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.updatePetalkEventDisplayController();
    }
    updatePetalkEventDisplayController() {
        if (this.petEventAuditList.length <= 0)
            this.display_petalk_event_empty_board;
        else
            this.display_petalk_event_board();
    }
    handleError(error) {
        // const myParagraphRef = this.elementRef.nativeElement.querySelector('#myParagraph');
        // if (myParagraphRef) {
        //   this.renderer2.setProperty(myParagraphRef, 'innerHTML', 'Error occurred');
        // }
        console.log('inside of hangle error');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }
    updatePetEventAuditList() {
        let petalk_devices = Array.from(this.petalk_user.petalkDevices);
        for (let i = 0; i < petalk_devices.length; i++) {
            let tmp_triggers = Array.from(petalk_devices[i].petalkDeviceTriggers);
            for (let j = 0; j < tmp_triggers.length; j++) {
                console.log(tmp_triggers[j].pet_name + " " + tmp_triggers[j].triggerType);
                this.petEventAuditList.push(new PetEventAudit(tmp_triggers[j].pet_name, tmp_triggers[j].triggerType));
            }
        }
        this.display_petalk_event_board();
        // console.log("response details " + userData.first_name+ " " + userData.petalkDevices.values + userData.petsOwnedByUsers.values);
        console.log("userdate from the home obj " + this.petalk_user.first_name + " " + this.petalk_user.petalkDevices.values + this.petalk_user.petsOwnedByUsers.values);
    }
    display_petalk_event_empty_board() {
        this.renderer2.setStyle(this.ngb_carousel_wrap_el.nativeElement, 'display', 'none');
        this.renderer2.setStyle(this.petalk_board_nothing_el.nativeElement, 'display', 'flex');
    }
    display_petalk_event_board() {
        this.renderer2.setStyle(this.ngb_carousel_wrap_el.nativeElement, 'display', 'flex');
        this.renderer2.setStyle(this.petalk_board_nothing_el.nativeElement, 'display', 'none');
    }
}
PetEventBoxSimpleComponent.ɵfac = function PetEventBoxSimpleComponent_Factory(t) { return new (t || PetEventBoxSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_PetEventBoxSimpleService__WEBPACK_IMPORTED_MODULE_1__.PetEventBoxSimpleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
PetEventBoxSimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PetEventBoxSimpleComponent, selectors: [["app-pet-event-box-simple"]], viewQuery: function PetEventBoxSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pet_name_el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.petalk_board_nothing_el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngb_carousel_wrap_el = _t.first);
    } }, inputs: { petalk_user: "petalk_user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 1, consts: [["id", "ngb_car_wrap"], ["ngb_carousel_wrap", ""], ["testngb", ""], [4, "ngFor", "ngForOf"], ["id", "petalk_board_nothing"], ["petalk_board_nothing", ""], ["testh2", ""], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["id", "petalk_board"], ["petalk_board", ""], ["id", "petalk_board_top_container"], ["id", "animal_img_png", "src", "../../../assets/img/test_img/download.jpeg"], ["id", "petalk_animal_name"], ["id", "petalk_board_mid_container"], ["id", "description"], ["id", "petalk_event_name"], ["id", "petalk_board_btm_container"], ["id", "time_event"], [1, "carousel-caption"]], template: function PetEventBoxSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0, 1)(3, "ngb-carousel", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PetEventBoxSimpleComponent_5_Template, 1, 0, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4, 5)(8, "div")(9, "h2", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " No Pet Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.petEventAuditList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbSlide], styles: ["#animalNotifcationbtn[_ngcontent-%COMP%]{\n    background-color: rgb(72, 255, 0);\n    height: 50px;\n    width: 100px;\n}\n#petalk_board_section[_ngcontent-%COMP%]\n{\n    display: flex;\n    justify-content: center;\n}\n#petalk_board[_ngcontent-%COMP%]\n{\n    width: 1200px;\n    height: 500px;\n    background-color:rgba(35, 199, 185, 0.8);\n    display: block;\n    border-radius: 20px;\n    margin-top: 0px !important;\n}\n\n*[_ngcontent-%COMP%]{\n   margin: 0;\n   padding: 0;\n   box-sizing: border-box;\n   font-family: 'Poppins', sans-serif;\n }\nbody[_ngcontent-%COMP%]{\n   min-height: 100vh;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   background-color: #EFEFEF;\n }\n.slide-container[_ngcontent-%COMP%]{\n   max-width: 1120px;\n   width: 100%;\n   padding: 40px 0;\n }\n#petalk_animal_name[_ngcontent-%COMP%]\n{\n  color: white;\n}\n#animal_img_png[_ngcontent-%COMP%]\n{\n  border-radius: 60px;\n  height: 200px;\n  width: 200px;\n}\n#petalk_board_top_container[_ngcontent-%COMP%]\n{\n  display: flex;\n  justify-content: left;\n  background-color: transparent;\n  width: 100%;\n  height: 40%;\n  margin-top: 0px !important;\n}\n#petalk_board_mid_container[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  margin-top: 5%;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n#petalk_animal_name[_ngcontent-%COMP%]\n{\n  margin-left: 30%;\n}\n#petalk_board_nothing[_ngcontent-%COMP%]\n{\n  width: 1200px;\n  height: 500px;\n  background-color:rgba(35, 199, 185, 0.8);\n  margin-top: 0px !important;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC1ldmVudC1ib3gtc2ltcGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFFQywyQkFBMkI7QUFHM0I7R0FDRSxTQUFTO0dBQ1QsVUFBVTtHQUNWLHNCQUFzQjtHQUN0QixrQ0FBa0M7Q0FDcEM7QUFDQTtHQUNFLGlCQUFpQjtHQUNqQixhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLHVCQUF1QjtHQUN2Qix5QkFBeUI7Q0FDM0I7QUFDQTtHQUNFLGlCQUFpQjtHQUNqQixXQUFXO0dBQ1gsZUFBZTtDQUNqQjtBQUVEOztFQUVFLFlBQVk7QUFDZDtBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InBldC1ldmVudC1ib3gtc2ltcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYW5pbWFsTm90aWZjYXRpb25idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAyNTUsIDApO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG4jcGV0YWxrX2JvYXJkX3NlY3Rpb25cbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3BldGFsa19ib2FyZFxue1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzUsIDE5OSwgMTg1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiAvKiBHb29nbGUgRm9udHMgLSBQb3BwaW5zICovXG4gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcblxuICp7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gfVxuIGJvZHl7XG4gICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuIH1cbiAuc2xpZGUtY29udGFpbmVye1xuICAgbWF4LXdpZHRoOiAxMTIwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmc6IDQwcHggMDtcbiB9XG5cbiNwZXRhbGtfYW5pbWFsX25hbWVcbntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYW5pbWFsX2ltZ19wbmdcbntcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuI3BldGFsa19ib2FyZF90b3BfY29udGFpbmVyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4jcGV0YWxrX2JvYXJkX21pZF9jb250YWluZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcGV0YWxrX2FuaW1hbF9uYW1lXG57XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4jcGV0YWxrX2JvYXJkX25vdGhpbmdcbntcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM1LCAxOTksIDE4NSwgMC44KTtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */", "@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}\n\n[_ngcontent-%COMP%]:root{--swiper-theme-color:#007aff}\n\n.swiper[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n\n.swiper-vertical[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{flex-direction:column}\n\n.swiper-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}\n\n.swiper-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%]{transform:translate3d(0px,0,0)}\n\n.swiper-pointer-events[_ngcontent-%COMP%]{touch-action:pan-y}\n\n.swiper-pointer-events.swiper-vertical[_ngcontent-%COMP%]{touch-action:pan-x}\n\n.swiper-slide[_ngcontent-%COMP%]{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}\n\n.swiper-slide-invisible-blank[_ngcontent-%COMP%]{visibility:hidden}\n\n.swiper-autoheight[_ngcontent-%COMP%], .swiper-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:auto}\n\n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]{align-items:flex-start;transition-property:transform,height}\n\n.swiper-backface-hidden[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}\n\n.swiper-3d[_ngcontent-%COMP%], .swiper-3d.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]{perspective:1200px}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]{transform-style:preserve-3d}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%]{background:rgba(0,0,0,.15)}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%]{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%]{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%]{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-css-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}\n\n.swiper-css-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}\n\n.swiper-css-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%] > .swiper-slide[_ngcontent-%COMP%]{scroll-snap-align:start start}\n\n.swiper-horizontal.swiper-css-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{scroll-snap-type:x mandatory}\n\n.swiper-vertical.swiper-css-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{scroll-snap-type:y mandatory}\n\n.swiper-centered[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]::before{content:'';flex-shrink:0;order:9999}\n\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%] > .swiper-slide[_ngcontent-%COMP%]:first-child{margin-inline-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}\n\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%] > .swiper-slide[_ngcontent-%COMP%]:first-child{margin-block-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}\n\n.swiper-centered[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%] > .swiper-slide[_ngcontent-%COMP%]{scroll-snap-align:center center}\n\n.swiper-virtual[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;transform:translateZ(0)}\n\n.swiper-virtual.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after{content:'';position:absolute;left:0;top:0;pointer-events:none}\n\n.swiper-virtual.swiper-css-mode.swiper-horizontal[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after{height:1px;width:var(--swiper-virtual-size)}\n\n.swiper-virtual.swiper-css-mode.swiper-vertical[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after{width:1px;height:var(--swiper-virtual-size)}\n\n[_ngcontent-%COMP%]:root{--swiper-navigation-size:44px}\n\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}\n\n.swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%], .swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%]{opacity:.35;cursor:auto;pointer-events:none}\n\n.swiper-button-next.swiper-button-hidden[_ngcontent-%COMP%], .swiper-button-prev.swiper-button-hidden[_ngcontent-%COMP%]{opacity:0;cursor:auto;pointer-events:none}\n\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-feature-settings:;font-variant:initial;line-height:1}\n\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:10px;right:auto}\n\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after{content:'prev'}\n\n.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:10px;left:auto}\n\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after{content:'next'}\n\n.swiper-button-lock[_ngcontent-%COMP%]{display:none}\n\n.swiper-pagination[_ngcontent-%COMP%]{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}\n\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%]{opacity:0}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-bullets[_ngcontent-%COMP%], .swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-pagination-fraction[_ngcontent-%COMP%]{bottom:10px;left:0;width:100%}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]{overflow:hidden;font-size:0}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{transform:scale(.33);position:relative}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{transform:scale(1)}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%]{transform:scale(1)}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%]{transform:scale(.66)}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%]{transform:scale(.33)}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%]{transform:scale(.66)}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%]{transform:scale(.33)}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%]{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}\n\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%]{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}\n\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{cursor:pointer}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%]:only-child{display:none!important}\n\n.swiper-pagination-bullet-active[_ngcontent-%COMP%]{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}\n\n.swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-bullets[_ngcontent-%COMP%]{right:10px;top:50%;transform:translate3d(0px,-50%,0)}\n\n.swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}\n\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);width:8px}\n\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{display:inline-block;transition:.2s transform,.2s top}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]{left:50%;transform:translateX(-50%);white-space:nowrap}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{transition:.2s transform,.2s left}\n\n.swiper-horizontal.swiper-rtl[_ngcontent-%COMP%] > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{transition:.2s transform,.2s right}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%]{background:rgba(0,0,0,.25);position:absolute}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%]{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}\n\n.swiper-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%]{transform-origin:right top}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%]{width:100%;height:4px;left:0;top:0}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-vertical[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%] > .swiper-pagination-progressbar[_ngcontent-%COMP%]{width:4px;height:100%;left:0;top:0}\n\n.swiper-pagination-lock[_ngcontent-%COMP%]{display:none}\n\n.swiper-scrollbar[_ngcontent-%COMP%]{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n\n.swiper-horizontal[_ngcontent-%COMP%] > .swiper-scrollbar[_ngcontent-%COMP%]{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n\n.swiper-vertical[_ngcontent-%COMP%] > .swiper-scrollbar[_ngcontent-%COMP%]{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n\n.swiper-scrollbar-drag[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%]{cursor:move}\n\n.swiper-scrollbar-lock[_ngcontent-%COMP%]{display:none}\n\n.swiper-zoom-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n\n.swiper-zoom-container[_ngcontent-%COMP%] > canvas[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}\n\n.swiper-slide-zoomed[_ngcontent-%COMP%]{cursor:move}\n\n.swiper-lazy-preloader[_ngcontent-%COMP%]{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}\n\n.swiper-watch-progress[_ngcontent-%COMP%]   .swiper-slide-visible[_ngcontent-%COMP%]   .swiper-lazy-preloader[_ngcontent-%COMP%], .swiper[_ngcontent-%COMP%]:not(.swiper-watch-progress)   .swiper-lazy-preloader[_ngcontent-%COMP%]{animation:swiper-preloader-spin 1s infinite linear}\n\n.swiper-lazy-preloader-white[_ngcontent-%COMP%]{--swiper-preloader-color:#fff}\n\n.swiper-lazy-preloader-black[_ngcontent-%COMP%]{--swiper-preloader-color:#000}\n\n@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n\n.swiper[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%]{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n\n.swiper-free-mode[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{transition-timing-function:ease-out;margin:0 auto}\n\n.swiper-grid[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap}\n\n.swiper-grid-column[_ngcontent-%COMP%] > .swiper-wrapper[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:column}\n\n.swiper-fade.swiper-free-mode[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{transition-timing-function:ease-out}\n\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none;transition-property:opacity}\n\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none}\n\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]{pointer-events:auto}\n\n.swiper-cube[_ngcontent-%COMP%]{overflow:visible}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none}\n\n.swiper-cube.swiper-rtl[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{transform-origin:100% 0}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]{pointer-events:auto}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%] + .swiper-slide[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-prev[_ngcontent-%COMP%]{pointer-events:auto;visibility:visible}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%]{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}\n\n.swiper-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}\n\n.swiper-flip[_ngcontent-%COMP%]{overflow:visible}\n\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{pointer-events:none}\n\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]{pointer-events:auto}\n\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%]{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n\n.swiper-creative[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}\n\n.swiper-cards[_ngcontent-%COMP%]{overflow:visible}\n\n.swiper-cards[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci1idW5kbGUubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQVVFOztBQUVGLFdBQVcsd0JBQXdCLENBQUMsNHJFQUE0ckUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCOztBQUFDLE1BQU0sNEJBQTRCOztBQUFDLFFBQVEsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUzs7QUFBQyxpQ0FBaUMscUJBQXFCOztBQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUMsc0JBQXNCOztBQUFDLDhDQUE4Qyw4QkFBOEI7O0FBQUMsdUJBQXVCLGtCQUFrQjs7QUFBQyx1Q0FBdUMsa0JBQWtCOztBQUFDLGNBQWMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCOztBQUFDLDhCQUE4QixpQkFBaUI7O0FBQUMsb0RBQW9ELFdBQVc7O0FBQUMsbUNBQW1DLHNCQUFzQixDQUFDLG9DQUFvQzs7QUFBQyxzQ0FBc0MsdUJBQXVCLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCOztBQUFDLHNEQUFzRCxrQkFBa0I7O0FBQUMseVFBQXlRLDJCQUEyQjs7QUFBQyxzTEFBc0wsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQVU7O0FBQUMsZ0NBQWdDLDBCQUEwQjs7QUFBQyxxQ0FBcUMsc0VBQXNFOztBQUFDLHNDQUFzQyx1RUFBdUU7O0FBQUMsb0NBQW9DLHFFQUFxRTs7QUFBQyx1Q0FBdUMsd0VBQXdFOztBQUFDLGlDQUFpQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCOztBQUFDLG9EQUFvRCxZQUFZOztBQUFDLCtDQUErQyw2QkFBNkI7O0FBQUMsbURBQW1ELDRCQUE0Qjs7QUFBQyxpREFBaUQsNEJBQTRCOztBQUFDLHlDQUF5QyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVU7O0FBQUMsNkVBQTZFLHdEQUF3RDs7QUFBQywyREFBMkQsV0FBVyxDQUFDLGNBQWMsQ0FBQyx5Q0FBeUM7O0FBQUMsMkVBQTJFLHVEQUF1RDs7QUFBQyx5REFBeUQsVUFBVSxDQUFDLGFBQWEsQ0FBQywwQ0FBMEM7O0FBQUMsK0NBQStDLCtCQUErQjs7QUFBQyw4QkFBOEIsa0NBQWtDLENBQUMsdUJBQXVCOztBQUFDLHVEQUF1RCxVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUI7O0FBQUMseUVBQXlFLFVBQVUsQ0FBQyxnQ0FBZ0M7O0FBQUMsdUVBQXVFLFNBQVMsQ0FBQyxpQ0FBaUM7O0FBQUMsTUFBTSw2QkFBNkI7O0FBQUMsd0NBQXdDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxrREFBa0QsQ0FBQyxvQ0FBb0MsQ0FBQyx5REFBeUQsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyw4REFBOEQ7O0FBQUMsc0ZBQXNGLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1COztBQUFDLGtGQUFrRixTQUFTLENBQUMsV0FBVyxDQUFDLG1CQUFtQjs7QUFBQyxvREFBb0Qsd0JBQXdCLENBQUMsdUNBQXVDLENBQUMsNkJBQTZCLENBQUMsZ0JBQWdCLENBQUMsc0JBQW9CLENBQXBCLG9CQUFvQixDQUFDLGFBQWE7O0FBQUMsb0RBQW9ELFNBQVMsQ0FBQyxVQUFVOztBQUFDLGdFQUFnRSxjQUFjOztBQUFDLG9EQUFvRCxVQUFVLENBQUMsU0FBUzs7QUFBQyxnRUFBZ0UsY0FBYzs7QUFBQyxvQkFBb0IsWUFBWTs7QUFBQyxtQkFBbUIsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMsVUFBVTs7QUFBQyw0Q0FBNEMsU0FBUzs7QUFBQyw0SkFBNEosV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVOztBQUFDLG1DQUFtQyxlQUFlLENBQUMsV0FBVzs7QUFBQyw2REFBNkQsb0JBQW9CLENBQUMsaUJBQWlCOztBQUFDLG9FQUFvRSxrQkFBa0I7O0FBQUMseUVBQXlFLGtCQUFrQjs7QUFBQyx5RUFBeUUsb0JBQW9COztBQUFDLDhFQUE4RSxvQkFBb0I7O0FBQUMseUVBQXlFLG9CQUFvQjs7QUFBQyw4RUFBOEUsb0JBQW9COztBQUFDLDBCQUEwQixvRkFBb0YsQ0FBQyxzRkFBc0YsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyw4REFBOEQsQ0FBQyw0REFBNEQ7O0FBQUMsZ0NBQWdDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlOztBQUFDLHVEQUF1RCxjQUFjOztBQUFDLHFDQUFxQyxzQkFBc0I7O0FBQUMsaUNBQWlDLGtEQUFrRCxDQUFDLG1FQUFtRTs7QUFBQyxrR0FBa0csVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUM7O0FBQUMsc0pBQXNKLHlEQUF5RCxDQUFDLGFBQWE7O0FBQUMsc0tBQXNLLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxTQUFTOztBQUFDLDBOQUEwTixvQkFBb0IsQ0FBQyxnQ0FBZ0M7O0FBQUMsMEpBQTBKLDJEQUEyRDs7QUFBQywwS0FBMEssUUFBUSxDQUFDLDBCQUEwQixDQUFDLGtCQUFrQjs7QUFBQyw4TkFBOE4saUNBQWlDOztBQUFDLDJGQUEyRixrQ0FBa0M7O0FBQUMsK0JBQStCLDBCQUEwQixDQUFDLGlCQUFpQjs7QUFBQyxtRUFBbUUsbUVBQW1FLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHlCQUF5Qjs7QUFBQywrRUFBK0UsMEJBQTBCOztBQUFDLHNTQUFzUyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLOztBQUFDLHNTQUFzUyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztBQUFDLHdCQUF3QixZQUFZOztBQUFDLGtCQUFrQixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyx5QkFBeUI7O0FBQUMscUNBQXFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTOztBQUFDLG1DQUFtQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVTs7QUFBQyx1QkFBdUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSzs7QUFBQyw4QkFBOEIsV0FBVzs7QUFBQyx1QkFBdUIsWUFBWTs7QUFBQyx1QkFBdUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCOztBQUFDLG9GQUFvRixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQjs7QUFBQyxxQkFBcUIsV0FBVzs7QUFBQyx1QkFBdUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyx3RUFBd0UsQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEI7O0FBQUMsK0hBQStILGtEQUFrRDs7QUFBQyw2QkFBNkIsNkJBQTZCOztBQUFDLDZCQUE2Qiw2QkFBNkI7O0FBQUMsaUNBQWlDLEdBQUcsc0JBQXNCLENBQUMsS0FBSyx3QkFBd0IsQ0FBQzs7QUFBQyw2QkFBNkIsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsYUFBYTs7QUFBQyxrQ0FBa0MsbUNBQW1DLENBQUMsYUFBYTs7QUFBQyw2QkFBNkIsY0FBYzs7QUFBQyxvQ0FBb0MsY0FBYyxDQUFDLHFCQUFxQjs7QUFBQyw0Q0FBNEMsbUNBQW1DOztBQUFDLDJCQUEyQixtQkFBbUIsQ0FBQywyQkFBMkI7O0FBQUMseUNBQXlDLG1CQUFtQjs7QUFBQyx5RkFBeUYsbUJBQW1COztBQUFDLGFBQWEsZ0JBQWdCOztBQUFDLDJCQUEyQixtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVc7O0FBQUMseUNBQXlDLG1CQUFtQjs7QUFBQyxzQ0FBc0MsdUJBQXVCOztBQUFDLHlGQUF5RixtQkFBbUI7O0FBQUMsZ0pBQWdKLG1CQUFtQixDQUFDLGtCQUFrQjs7QUFBQyw4SkFBOEosU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjs7QUFBQyxpQ0FBaUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTOztBQUFDLHdDQUF3QyxVQUFVLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7O0FBQUMsYUFBYSxnQkFBZ0I7O0FBQUMsMkJBQTJCLG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQixDQUFDLFNBQVM7O0FBQUMseUNBQXlDLG1CQUFtQjs7QUFBQyx5RkFBeUYsbUJBQW1COztBQUFDLDhKQUE4SixTQUFTLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCOztBQUFDLCtCQUErQixrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsNENBQTRDOztBQUFDLGNBQWMsZ0JBQWdCOztBQUFDLDRCQUE0Qiw4QkFBOEIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxlQUFlIiwiZmlsZSI6InN3aXBlci1idW5kbGUubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDguMS42XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIyIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE1heSAyNSwgMjAyMlxuICovXG5cbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6c3dpcGVyLWljb25zO3NyYzp1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfTpyb290ey0tc3dpcGVyLXRoZW1lLWNvbG9yOiMwMDdhZmZ9LnN3aXBlcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LDAsMCl9LnN3aXBlci1wb2ludGVyLWV2ZW50c3t0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1wb2ludGVyLWV2ZW50cy5zd2lwZXItdmVydGljYWx7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItc2xpZGV7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItYXV0b2hlaWdodCwuc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZXtoZWlnaHQ6YXV0b30uc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVye2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0fS5zd2lwZXItYmFja2ZhY2UtaGlkZGVuIC5zd2lwZXItc2xpZGV7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLTNkLC5zd2lwZXItM2Quc3dpcGVyLWNzcy1tb2RlIC5zd2lwZXItd3JhcHBlcntwZXJzcGVjdGl2ZToxMjAwcHh9LnN3aXBlci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLC5zd2lwZXItM2QgLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxMH0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93e2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTUpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntvdmVyZmxvdzphdXRvO3Njcm9sbGJhci13aWR0aDpub25lOy1tcy1vdmVyZmxvdy1zdHlsZTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpzdGFydCBzdGFydH0uc3dpcGVyLWhvcml6b250YWwuc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntzY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5fS5zd2lwZXItdmVydGljYWwuc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntzY3JvbGwtc25hcC10eXBlOnkgbWFuZGF0b3J5fS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7Y29udGVudDonJztmbGV4LXNocmluazowO29yZGVyOjk5OTl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6MXB4O3dpZHRoOnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1ibG9jay1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7d2lkdGg6MTAwJTttaW4td2lkdGg6MXB4O2hlaWdodDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOmNlbnRlciBjZW50ZXJ9LnN3aXBlci12aXJ0dWFsIC5zd2lwZXItc2xpZGV7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0uc3dpcGVyLXZpcnR1YWwuc3dpcGVyLWNzcy1tb2RlIC5zd2lwZXItd3JhcHBlcjo6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLXZpcnR1YWwuc3dpcGVyLWNzcy1tb2RlLnN3aXBlci1ob3Jpem9udGFsIC5zd2lwZXItd3JhcHBlcjo6YWZ0ZXJ7aGVpZ2h0OjFweDt3aWR0aDp2YXIoLS1zd2lwZXItdmlydHVhbC1zaXplKX0uc3dpcGVyLXZpcnR1YWwuc3dpcGVyLWNzcy1tb2RlLnN3aXBlci12ZXJ0aWNhbCAuc3dpcGVyLXdyYXBwZXI6OmFmdGVye3dpZHRoOjFweDtoZWlnaHQ6dmFyKC0tc3dpcGVyLXZpcnR1YWwtc2l6ZSl9OnJvb3R7LS1zd2lwZXItbmF2aWdhdGlvbi1zaXplOjQ0cHh9LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWJ1dHRvbi1wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6Y2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gNDQgKiAyNyk7aGVpZ2h0OnZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO21hcmdpbi10b3A6Y2FsYygwcHggLSAodmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDIpKTt6LWluZGV4OjEwO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb2xvcjp2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcix2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKX0uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVke29wYWNpdHk6LjM1O2N1cnNvcjphdXRvO3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWhpZGRlbiwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24taGlkZGVue29wYWNpdHk6MDtjdXJzb3I6YXV0bztwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsLnN3aXBlci1idXR0b24tcHJldjphZnRlcntmb250LWZhbWlseTpzd2lwZXItaWNvbnM7Zm9udC1zaXplOnZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO3RleHQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOjA7Zm9udC12YXJpYW50OmluaXRpYWw7bGluZS1oZWlnaHQ6MX0uc3dpcGVyLWJ1dHRvbi1wcmV2LC5zd2lwZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHR7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tcHJldjphZnRlciwuc3dpcGVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVye2NvbnRlbnQ6J3ByZXYnfS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tcHJldntyaWdodDoxMHB4O2xlZnQ6YXV0b30uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLC5zd2lwZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXJ7Y29udGVudDonbmV4dCd9LnN3aXBlci1idXR0b24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246LjNzIG9wYWNpdHk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt6LWluZGV4OjEwfS5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW57b3BhY2l0eTowfS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cywuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW57dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldnt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHR7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt3aWR0aDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtd2lkdGgsdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXNpemUsOHB4KSk7aGVpZ2h0OnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1oZWlnaHQsdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXNpemUsOHB4KSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtY29sb3IsIzAwMCk7b3BhY2l0eTp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtb3BhY2l0eSwgLjIpfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6b25seS1jaGlsZHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LW9wYWNpdHksIDEpO2JhY2tncm91bmQ6dmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSl9LnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tyaWdodDoxMHB4O3RvcDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwtNTAlLDApfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e21hcmdpbjp2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtdmVydGljYWwtZ2FwLDZweCkgMDtkaXNwbGF5OmJsb2NrfS5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYywuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3t0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjhweH0uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wfS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaG9yaXpvbnRhbC1nYXAsNHB4KX0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljLC5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQsLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHR9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOnZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfS5zd2lwZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZXt3aWR0aDoxMDAlO2hlaWdodDo0cHg7bGVmdDowO3RvcDowfS5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLC5zd2lwZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye3dpZHRoOjRweDtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjB9LnN3aXBlci1wYWdpbmF0aW9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItc2Nyb2xsYmFye2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxJTtib3R0b206M3B4O3otaW5kZXg6NTA7aGVpZ2h0OjVweDt3aWR0aDo5OCV9LnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozcHg7dG9wOjElO3otaW5kZXg6NTA7d2lkdGg6NXB4O2hlaWdodDo5OCV9LnN3aXBlci1zY3JvbGxiYXItZHJhZ3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7Ym9yZGVyLXJhZGl1czoxMHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZ3tjdXJzb3I6bW92ZX0uc3dpcGVyLXNjcm9sbGJhci1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXpvb20tY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLC5zd2lwZXItem9vbS1jb250YWluZXI+aW1nLC5zd2lwZXItem9vbS1jb250YWluZXI+c3Zne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvbnRhaW59LnN3aXBlci1zbGlkZS16b29tZWR7Y3Vyc29yOm1vdmV9LnN3aXBlci1sYXp5LXByZWxvYWRlcnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTIxcHg7bWFyZ2luLXRvcDotMjFweDt6LWluZGV4OjEwO3RyYW5zZm9ybS1vcmlnaW46NTAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6NHB4IHNvbGlkIHZhcigtLXN3aXBlci1wcmVsb2FkZXItY29sb3IsdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudH0uc3dpcGVyLXdhdGNoLXByb2dyZXNzIC5zd2lwZXItc2xpZGUtdmlzaWJsZSAuc3dpcGVyLWxhenktcHJlbG9hZGVyLC5zd2lwZXI6bm90KC5zd2lwZXItd2F0Y2gtcHJvZ3Jlc3MpIC5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7YW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXJ9LnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZXstLXN3aXBlci1wcmVsb2FkZXItY29sb3I6I2ZmZn0uc3dpcGVyLWxhenktcHJlbG9hZGVyLWJsYWNrey0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjojMDAwfUBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5zd2lwZXIgLnN3aXBlci1ub3RpZmljYXRpb257cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3otaW5kZXg6LTEwMDB9LnN3aXBlci1mcmVlLW1vZGU+LnN3aXBlci13cmFwcGVye3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O21hcmdpbjowIGF1dG99LnN3aXBlci1ncmlkPi5zd2lwZXItd3JhcHBlcntmbGV4LXdyYXA6d3JhcH0uc3dpcGVyLWdyaWQtY29sdW1uPi5zd2lwZXItd3JhcHBlcntmbGV4LXdyYXA6d3JhcDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci1mYWRlLnN3aXBlci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3dpcGVyLWZhZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eX0uc3dpcGVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY3ViZXtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY3ViZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjE7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtLW9yaWdpbjowIDA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc3dpcGVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jdWJlLnN3aXBlci1ydGwgLnN3aXBlci1zbGlkZXt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMH0uc3dpcGVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsLnN3aXBlci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCsuc3dpcGVyLXNsaWRlLC5zd2lwZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXZ7cG9pbnRlci1ldmVudHM6YXV0bzt2aXNpYmlsaXR5OnZpc2libGV9LnN3aXBlci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6LjY7ei1pbmRleDowfS5zd2lwZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93OmJlZm9yZXtjb250ZW50OicnO2JhY2tncm91bmQ6IzAwMDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtmaWx0ZXI6Ymx1cig1MHB4KX0uc3dpcGVyLWZsaXB7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWZsaXAgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxfS5zd2lwZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNyZWF0aXZlIC5zd2lwZXItc2xpZGV7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eSxoZWlnaHR9LnN3aXBlci1jYXJkc3tvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY2FyZHMgLnN3aXBlci1zbGlkZXt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b207LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtvdmVyZmxvdzpoaWRkZW59Il19 */"] });
class PetEventAudit {
    constructor(pet_name, event_name) {
        this.pet_name = pet_name;
        this.event_name = event_name;
    }
}


/***/ }),

/***/ 7742:
/*!*************************************************************************!*\
  !*** ./src/app/components/petalk-calendar/petalk-calendar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetalkCalendarComponent": () => (/* binding */ PetalkCalendarComponent)
/* harmony export */ });
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 8186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/angular */ 8245);



class PetalkCalendarComponent {
    constructor() {
        this.title = 'petalk_prj';
        this.calendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"]],
            initialView: 'dayGridMonth',
            weekends: false,
            events: [
                { title: 'Meeting', start: new Date() }
            ]
        };
    }
    ngOnInit() {
    }
}
PetalkCalendarComponent.ɵfac = function PetalkCalendarComponent_Factory(t) { return new (t || PetalkCalendarComponent)(); };
PetalkCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PetalkCalendarComponent, selectors: [["app-petalk-calendar"]], decls: 2, vars: 1, consts: [[3, "options"]], template: function PetalkCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "full-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, dependencies: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__.FullCalendarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXRhbGstY2FsZW5kYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1926:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const _c0 = ["testdiv"];
class TestComponent {
    constructor(http, renderer, nav_route_selection_el) {
        this.http = http;
        this.renderer = renderer;
        // url = "http://localhost:8002/petalk/saveUser";
        this.host = 'deeshub1';
        this.url = "http://" + this.host + ":8002/petalk/saveUser";
        this.url2 = "http://" + this.host + ":8002/petalk/savePet/";
        // this.nav_route_selection_el = {} as ElementRef;
        this.nav_route_selection_el = nav_route_selection_el;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    sentNewDeviceTriggerNotification() {
        const petNames = [
            "Buddy",
            "Charlie",
            "Lucy",
            "Max",
            "Molly",
            "Bailey",
            "Sadie",
            "Daisy",
            "Rocky",
            "Lola",
            "Zoe",
            "Chloe",
            "Coco",
            "Roxy",
            "Ginger",
            "Oliver",
            "Leo",
            "Milo",
            "Smokey",
            "Shadow"
        ];
        const petBreeds = [
            'Labrador Retriever',
            'Golden Retriever',
            'Poodle',
            'Persian',
            'Siamese',
            'Bengal',
            'Parakeet',
            'Cockatiel',
            'Hamster',
            'Guinea Pig',
        ];
        const petalk_trigger = ["wants_water", "wants_food", "wants_to_play", "bored", "wants toy"];
        let url3 = "http://" + this.host + ":8002/petalk/new/petalkEventTrigger/";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200/test'
        });
        let body = new FormData;
        let fullBodyData = {
            "trigger_ts": "2023-02-19T12:34:56",
            "device_name": "test",
            "triggerType": petalk_trigger[Math.floor(Math.random() * petalk_trigger.length)],
            "pet_name": petNames[Math.floor(Math.random() * petNames.length)],
            "petalkTriggerLocation": {
                "location_name": "5050 test grove"
            }
        };
        this.http.post(url3 + "1", fullBodyData, { headers: headers }).subscribe(() => {
            console.log("send test animal notification data");
            (error) => {
                alert(error.message);
            };
        });
        ;
    }
    sentPetAnimalNotifcation() {
        let body = new FormData;
        let fullBodyData = {
            "pet_name": "Fluffy",
            "pet_weight": 5.5,
            "weight_uom_abbr": "kg",
            "pet_height": 20.0,
            "pet_width": 15.0,
            "pet_length": 30.0,
            "lwh_uom_abbr": "cm",
            "species": "Cat"
        };
        console.log("body: " + body);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200/test'
        });
        this.http.post(this.url2 + "1", fullBodyData, { headers: headers }).subscribe(() => {
            console.log("send test animal notification data");
            (error) => {
                alert(error.message);
            };
        });
        ;
    }
    sendTestUserNotification() {
        let body = new FormData();
        const petNames = [
            "Buddy",
            "Charlie",
            "Lucy",
            "Max",
            "Molly",
            "Bailey",
            "Sadie",
            "Daisy",
            "Rocky",
            "Lola",
            "Zoe",
            "Chloe",
            "Coco",
            "Roxy",
            "Ginger",
            "Oliver",
            "Leo",
            "Milo",
            "Smokey",
            "Shadow"
        ];
        const petBreeds = [
            'Labrador Retriever',
            'Golden Retriever',
            'Poodle',
            'Persian',
            'Siamese',
            'Bengal',
            'Parakeet',
            'Cockatiel',
            'Hamster',
            'Guinea Pig',
        ];
        const petalk_trigger = ["wants_water", "wants_food", "wants_to_play", "bored", "wants toy"];
        let fullBodyData = {
            "first_name": "tim",
            "last_name": "Smith",
            "email": "Js@example.com",
            "username": "js123",
            "roles": [{
                    "role_type": "user"
                },
                { "role_type": "admin"
                }],
            "locations": [
                {
                    "address": "5000 south grove",
                    "address2": "",
                    "apartment_room_value": "",
                    "country": "United States",
                    "home_type": "House",
                    "petalkDeviceTrigger": "",
                    "state": "Nevada",
                    "zip_code": 99999,
                    "users": []
                }
            ],
            "petalkDevices": [
                {
                    "device_name": "generic_petalk_device",
                    "purchased_ts": "",
                    "first_used_ts": "",
                    "sku_value": "5asg134",
                    "upc_value": "999999999999923",
                    "users": [],
                    "pets": [],
                    "petalkDeviceTriggers": [
                        {
                            "trigger_ts": "2023-02-19T12:34:56",
                            "device_name": "test",
                            "triggerType": petalk_trigger[Math.floor(Math.random() * petalk_trigger.length)],
                            "pet_name": petNames[Math.floor(Math.random() * petNames.length)],
                            "petalkTriggerLocation": {
                                "location_name": "5050 test grove"
                            }
                        }
                    ]
                }
            ],
            "petsOwnedByUsers": [
                {
                    "pet_name": "Max",
                    "pet_weight": 20.5,
                    "weight_uom_abbr": "lb",
                    "pet_height": 20.2,
                    "pet_width": 20.1,
                    "pet_length": 20.3,
                    "lwh_uom_abbr": "in",
                    "species": petBreeds[Math.floor(Math.random() * petBreeds.length)],
                }
            ],
            "purchaseAudit": []
        };
        body.append("email", "Js@example.com");
        // body.append("username", "js123");
        // body.append("first_name", "john");
        // body.append("last_name", "smith");
        console.log("body: " + body);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200/test'
        });
        this.http.post(this.url, fullBodyData, { headers: headers }).subscribe(() => {
            console.log("send test animal notification data");
            (error) => {
                alert(error.message);
            };
        });
        ;
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], viewQuery: function TestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav_route_selection_el = _t.first);
    } }, decls: 6, vars: 0, consts: [["id", "userNotifcationbtn", 3, "click"], ["id", "petNotifcationbtn", 3, "click"], ["id", "petalkDeviceTriggerbtn", 3, "click"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_0_listener() { return ctx.sendTestUserNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Click To create new user with full data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_2_listener() { return ctx.sentPetAnimalNotifcation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Click To create a new pet for user 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_4_listener() { return ctx.sentNewDeviceTriggerNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " add a new notification to the petalk device for device 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: red;\r\n}\r\n#userNotifcationbtn[_ngcontent-%COMP%]{\r\n    background-color: rgb(72, 255, 0);\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n#petNotifcationbtn[_ngcontent-%COMP%]{\r\n    background-color: rgb(72, 255, 0);\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n#petalkDeviceTriggerbtn[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(72, 255, 0);\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n#petalk_board_section[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n#petalk_board[_ngcontent-%COMP%]\r\n{\r\n    width: 900px;\r\n    height: 500px;\r\n    background-color:rgba(35, 199, 185, 0.8);\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4jdXNlck5vdGlmY2F0aW9uYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCAyNTUsIDApO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiNwZXROb3RpZmNhdGlvbmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMjU1LCAwKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4jcGV0YWxrRGV2aWNlVHJpZ2dlcmJ0blxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsIDI1NSwgMCk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuI3BldGFsa19ib2FyZF9zZWN0aW9uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jcGV0YWxrX2JvYXJkXHJcbntcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzUsIDE5OSwgMTg1LCAwLjgpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8148:
/*!*****************************************************************************!*\
  !*** ./src/app/components/your-pet-carousel/your-pet-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourPetCarouselComponent": () => (/* binding */ YourPetCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




function YourPetCarouselComponent_ngb_carousel_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 13);
} if (rf & 2) {
    const pet_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pet_r5.pet_name, " ");
} }
function YourPetCarouselComponent_ngb_carousel_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, YourPetCarouselComponent_ngb_carousel_2_2_ng_template_0_Template, 7, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} }
function YourPetCarouselComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YourPetCarouselComponent_ngb_carousel_2_2_Template, 2, 0, null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.petalk_pets);
} }
function YourPetCarouselComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " There are no pets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class YourPetCarouselComponent {
    constructor() {
        this.has_pets = false;
        this.petalk_pets = [];
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        this.updatePetalkPets();
    }
    ngOnInit() {
    }
    updatePetalkPets() {
        let pets = Array.from(this.petalk_user.petsOwnedByUsers);
        for (const pet of pets) {
            this.petalk_pets.push(new PetalkPet(pet.pet_name));
        }
        if (pets != null && pets != undefined && pets.length > 0)
            this.has_pets = true;
    }
}
YourPetCarouselComponent.ɵfac = function YourPetCarouselComponent_Factory(t) { return new (t || YourPetCarouselComponent)(); };
YourPetCarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YourPetCarouselComponent, selectors: [["app-your-pet-carousel"]], inputs: { petalk_user: "petalk_user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [["id", "ngb_car_wrap"], ["ngb_carousel_wrap", ""], ["class", "ngb_car", 4, "ngIf", "ngIfElse"], ["display_no_pets", ""], [1, "ngb_car"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["display_pets", ""], [1, "picsum-img-wrapper"], ["id", "your_pet_box_container"], ["id", "petImage"], ["id", "pet_name"], ["pet_name", ""], [1, "carousel-caption"]], template: function YourPetCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YourPetCarouselComponent_ngb_carousel_2_Template, 3, 1, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YourPetCarouselComponent_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.has_pets)("ngIfElse", _r2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide], styles: ["#your_pet_box_container[_ngcontent-%COMP%]\n{\n    background-color: red;\n    width:1000px;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#ngb_car_wrap[_ngcontent-%COMP%]\n{\n    width: 100%;\n    height: 500px;\n    display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXItcGV0LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7QUFDM0IiLCJmaWxlIjoieW91ci1wZXQtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN5b3VyX3BldF9ib3hfY29udGFpbmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIHdpZHRoOjEwMDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNuZ2JfY2FyX3dyYXBcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
class PetalkPet {
    constructor(pet_name) {
        this.pet_name = pet_name;
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map