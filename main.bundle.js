webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about.component.html":
/***/ (function(module, exports) {

module.exports = "blabla about"

/***/ }),

/***/ "../../../../../src/app/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/about.component.html"),
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_component__ = __webpack_require__("../../../../../src/app/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_component__ = __webpack_require__("../../../../../src/app/environment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deployment_component__ = __webpack_require__("../../../../../src/app/deployment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runtimestats_component__ = __webpack_require__("../../../../../src/app/runtimestats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] },
    { path: 'images', component: __WEBPACK_IMPORTED_MODULE_3__image_component__["a" /* ImageComponent */] },
    { path: 'environments', component: __WEBPACK_IMPORTED_MODULE_4__environment_component__["a" /* EnvironmentComponent */] },
    { path: 'deployments', component: __WEBPACK_IMPORTED_MODULE_5__deployment_component__["a" /* DeploymentComponent */] },
    { path: 'runtimestats', component: __WEBPACK_IMPORTED_MODULE_6__runtimestats_component__["a" /* RuntimestatsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n  /*margin: 0;*/\n  width: 100%;\n  /*height: 100%;*/\n  min-height: 500px;\n}\n\n.main-content{\n  margin: 10px;\n  min-height: 100%;\n}\n\n#navbar {\n  width: 240px;\n}\n\n.mat-drawer-container, .mat-drawer{\n  background-color: transparent;\n}\n\n.active {\n  font-style: italic;\n  background-color: rgba(0,0,0,0.04);\n}\n\n#main-content {\n    max-width: 1600px;\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-content\">\n  <mat-toolbar color=\"primary\">\n    <span class=\"example-spacer\"></span>\n    <span *ngIf=\"!apiurl\">\n      <mat-chip-list>\n        <mat-chip color=\"primary\" selected=\"true\" (click)=\"openSettings()\"><mat-icon>warning</mat-icon> Server configuration missing!</mat-chip>\n      </mat-chip-list>\n    </span>\n    <span>\n    <button mat-button (click)=\"openSettings()\"><mat-icon>settings</mat-icon> Settings</button>\n  </span>\n    <span *ngIf=\"user.id\">\n    <button mat-button [matMenuTriggerFor]=\"menu\"><img gravatar [email]=\"user.email\" [size]=\"20\"> {{ user.fullname }}</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item disabled>Settings</button>\n      <button mat-menu-item (click)=\"logout()\">Logout</button>\n    </mat-menu>\n  </span>\n    <span *ngIf=\"!user.id\">\n    <a routerLink=\"/login\" mat-raised-button color=\"accent\"><mat-icon>account_circle</mat-icon> LOGIN or REGISTER</a>\n  </span>\n  </mat-toolbar>\n\n  <mat-sidenav-container>\n    <mat-sidenav id=\"navbar\" disableClose mode=\"side\" opened=\"true\">\n      <mat-card>\n        <a routerLink=\"/\"><img src=\"assets/logo.png\" style=\"width:90%; margin: 10px;\"></a>\n        <mat-nav-list>\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/dashboard\">\n            <mat-icon mat-list-icon>home</mat-icon>\n            <h4>Home</h4>\n          </a>\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/images\">\n            <mat-icon mat-list-icon>photo</mat-icon>\n            <h4>Images</h4>\n          </a>\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/environments\" *ngIf=\"user\">\n            <mat-icon mat-list-icon>computer</mat-icon>\n            <h4>Environments</h4>\n          </a>\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/deployments\" *ngIf=\"user\">\n            <mat-icon mat-list-icon>cloud</mat-icon>\n            <h4>Deployments</h4>\n          </a>\n          <a mat-list-item routerLinkActive=\"active\" routerLink=\"/runtimestats\" *ngIf=\"user\">\n            <mat-icon mat-list-icon>info_outline</mat-icon>\n            <h4>Runtimestats</h4>\n          </a>\n        </mat-nav-list>\n      </mat-card>\n    </mat-sidenav>\n\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingsDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = (function () {
    function AppComponent(userService, settingsService, router, dialog) {
        var _this = this;
        this.userService = userService;
        this.settingsService = settingsService;
        this.router = router;
        this.dialog = dialog;
        this.title = 'app';
        userService.userchange$.subscribe(function (user) {
            _this.user = user;
        });
        settingsService.apiurl$.subscribe(function (apiurl) {
            _this.apiurl = apiurl;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.userService.remember();
        this.apiurl = this.settingsService.getApiurl();
    };
    AppComponent.prototype.logout = function () {
        this.user = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        };
        this.userService.forget();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.openSettings = function () {
        var _this = this;
        var url = "http://localhost:8080/v1"; // default URL
        if (this.settingsService.getApiurl() != null) {
            url = this.settingsService.getApiurl();
        }
        var dialogRef = this.dialog.open(SettingsDialog, {
            width: '350px',
            data: { apiurl: url }
        });
        dialogRef.afterClosed().subscribe(function (apiurl) {
            if (apiurl)
                _this.settingsService.changeApiurl(apiurl);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]) === "function" && _d || Object])
], AppComponent);

var SettingsDialog = (function () {
    function SettingsDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return SettingsDialog;
}());
SettingsDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'settings-dialog',
        template: __webpack_require__("../../../../../src/app/app.components.settings-dialog.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]) === "function" && _e || Object, Object])
], SettingsDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.components.settings-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Settings</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" placeholder=\"Server URL\" [(ngModel)]=\"data.apiurl\" required>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.apiurl\" tabindex=\"2\">Ok</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_gravatar_directive__ = __webpack_require__("../../../../ng2-gravatar-directive/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_gravatar_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_gravatar_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_component__ = __webpack_require__("../../../../../src/app/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment_component__ = __webpack_require__("../../../../../src/app/environment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__runtimestats_component__ = __webpack_require__("../../../../../src/app/runtimestats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deployment_component__ = __webpack_require__("../../../../../src/app/deployment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_component__ = __webpack_require__("../../../../../src/app/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__deployment_service__ = __webpack_require__("../../../../../src/app/deployment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__runtimestats_service__ = __webpack_require__("../../../../../src/app/runtimestats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* SettingsDialog */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__environment_component__["a" /* EnvironmentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__deployment_component__["a" /* DeploymentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__runtimestats_component__["a" /* RuntimestatsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_gravatar_directive__["GravatarModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatTooltipModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_16__environment_service__["a" /* EnvironmentService */],
            __WEBPACK_IMPORTED_MODULE_18__deployment_service__["a" /* DeploymentService */],
            __WEBPACK_IMPORTED_MODULE_19__runtimestats_service__["a" /* RuntimestatsService */],
            __WEBPACK_IMPORTED_MODULE_20__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_21__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_22__settings_service__["a" /* SettingsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* SettingsDialog */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n    /*height: 90%;*/\n    width: 100%;\n}\n\nmat-card-content{\n    height: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"240px\">\n\n    <mat-grid-tile colspan=\"2\">\n        <!--\n        <mat-grid-tile-header>\n            <h1>Welcome to ViCE Registry</h1>\n        </mat-grid-tile-header>\n        <p>\n            The image registry that allows to share images of Virtual environments across platforms.\n            <br/> To start right away, please choose one of the following next steps.\n        </p>\n        <mat-grid-tile-footer>\n            <button mat-button>EXPLORE IMAGES</button>\n        </mat-grid-tile-footer>\n        -->\n\n        <mat-card>\n            <mat-card-header class=\"mat-primary\">\n                <mat-card-title>\n                    <h1>Welcome to VICE Registry</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    The image registry that allows to share images of Virtual environments across platforms.\n                    <br/> To start right away, please choose one of the following next steps.\n                </p>\n            </mat-card-content>            \n        </mat-card>\n\n    </mat-grid-tile>\n\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Explore Images</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    Explore the images stored in the ViCE registry. For public images, no registration is required to browse and explore available\n                    images.\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <a routerLink=\"/images\" mat-raised-button color=\"primary\">EXPLORE IMAGES</a>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Register</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    To use the full feature set of the ViCE registry, please register an account. Registered users can deploy and import images.\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <a routerLink=\"/login\" mat-raised-button color=\"primary\">REGISTER NOW</a>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>About ViCE</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    ViCE is a national project with universities in the federal state of Baden-Württemberg, Germany, in the field of research\n                    data management.\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <a routerLink=\"/about\" mat-raised-button color=\"primary\">READ MORE</a>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Contact & Feedback</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    For questions, comments and feedback, please contact us. We're happy to learn about your experiences with the ViCE registry.\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <a routerLink=\"/about\" mat-raised-button color=\"primary\">CONTACT INFORMATION</a>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        styles: [__webpack_require__("../../../../../src/app/dashboard.component.css")],
        template: __webpack_require__("../../../../../src/app/dashboard.component.html"),
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/deployment.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title *ngIf=!deployment.id>\n            <h3>Create Deployment</h3>\n        </mat-card-title>\n        <mat-card-title *ngIf=deployment.id>\n            <h3>Show Deployment {{deployment.title}} (ID {{deployment.id}})</h3>\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form #createImageForm=\"ngForm\">\n            <div class=\"formcard\">\n                <div>\n                    <mat-form-field>\n                        <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"deployment.title\">\n                    </mat-form-field>\n                    \n                    <mat-form-field>\n                        <mat-select name=\"imageid\" placeholder=\"Image\" [(ngModel)]=\"deployment.imageid\" [compareWith]=\"compareImages\">\n                            <mat-option *ngFor=\"let image of images\" [value]=\"image.id\">\n                                {{ image.title }}\n                            </mat-option>                            \n                        </mat-select>\n                    </mat-form-field>                    \n\n                    <mat-form-field>\n                        <mat-select name=\"environmentId\" placeholder=\"Target Environment\" [(ngModel)]=\"deployment.environmentId\" [compareWith]=\"compareEnvironments\">\n                            <mat-option *ngFor=\"let environment of environments\" [value]=\"environment.id\">\n                                {{ environment.title }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <button mat-raised-button (click)=\"clear()\" *ngIf=deployment.id>CLEAR</button>\n                <button mat-raised-button color=\"primary\" (click)=\"store()\">SUBMIT</button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-table #table [dataSource]=\"deploymentDataSource\">\n\n        <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"imageid\">\n            <mat-header-cell *matHeaderCellDef> Image ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.imageid}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"environmentId\">\n            <mat-header-cell *matHeaderCellDef> Environment ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.environmentId}} </mat-cell>\n        </ng-container>        \n\n        <ng-container matColumnDef=\"environmentReference\">\n            <mat-header-cell *matHeaderCellDef> Reference ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.environmentReference}} </mat-cell>\n        </ng-container>        \n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <button mat-icon-button color=\"primary\" (click)=\"edit(element)\">\n                        <mat-icon aria-label=\"edit\">mode_edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"warn\" (click)=\"delete(element)\">\n                      <mat-icon aria-label=\"delete\">delete_forever</mat-icon>\n                </button>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    </mat-table>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/deployment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeploymentComponent; });
/* unused harmony export DeploymentDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deployment_service__ = __webpack_require__("../../../../../src/app/deployment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DeploymentComponent = (function () {
    function DeploymentComponent(deploymentService, imageService, environmentService, snackBar) {
        this.deploymentService = deploymentService;
        this.imageService = imageService;
        this.environmentService = environmentService;
        this.snackBar = snackBar;
        this.displayedColumns = ['title', 'imageid', 'environmentId', 'environmentReference', 'actions'];
        this.clear();
    }
    DeploymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deploymentDataSource = new DeploymentDataSource(this.deploymentService, this.snackBar);
        this.environmentService.getList().then(function (res) {
            _this.environments = res;
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
        this.imageService.getList().then(function (res) {
            _this.images = res;
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    DeploymentComponent.prototype.store = function () {
        var _this = this;
        this.deploymentService.store(this.deployment).
            then(function (environment) {
            _this.snackBar.open("Image stored successfully", "OK", { duration: 500 });
            _this.deploymentDataSource = new DeploymentDataSource(_this.deploymentService, _this.snackBar);
            _this.clear();
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    DeploymentComponent.prototype.delete = function (deployment) {
        var _this = this;
        this.deploymentService.delete(deployment).then(function (result) {
            _this.snackBar.open("Image deleted successfully", "OK", { duration: 500 });
            _this.deploymentDataSource = new DeploymentDataSource(_this.deploymentService, _this.snackBar);
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    DeploymentComponent.prototype.clear = function () {
        this.deployment = this.deploymentService.getStub();
    };
    DeploymentComponent.prototype.edit = function (deployment) {
        this.deployment = deployment;
    };
    DeploymentComponent.prototype.compareEnvironments = function (env1, env2) {
        return env1 && env2 && env1.id === env2.id;
    };
    DeploymentComponent.prototype.compareImages = function (img1, img2) {
        console.info(img1, img2);
        return img1 && img2 && img1.id === img2.id;
    };
    return DeploymentComponent;
}());
DeploymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'deployment-list',
        template: __webpack_require__("../../../../../src/app/deployment.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__deployment_service__["a" /* DeploymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__deployment_service__["a" /* DeploymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__image_service__["a" /* ImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__environment_service__["a" /* EnvironmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__environment_service__["a" /* EnvironmentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]) === "function" && _d || Object])
], DeploymentComponent);

var DeploymentDataSource = (function (_super) {
    __extends(DeploymentDataSource, _super);
    function DeploymentDataSource(deploymentService, snackBar) {
        var _this = _super.call(this) || this;
        _this.deploymentService = deploymentService;
        _this.snackBar = snackBar;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_10_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    DeploymentDataSource.prototype.connect = function () {
        var _this = this;
        if (!this.subject.isStopped)
            this.deploymentService.getList().then(function (res) {
                _this.subject.next(res);
            }, function (error) {
                {
                    _this.snackBar.open("Server Error: " + error, "OK");
                }
            });
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].merge(this.subject);
    };
    DeploymentDataSource.prototype.disconnect = function () {
        this.subject.complete();
        this.subject.observers = [];
    };
    return DeploymentDataSource;
}(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=deployment.component.js.map

/***/ }),

/***/ "../../../../../src/app/deployment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeploymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
};
var headerObj = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
};
var DeploymentService = (function () {
    function DeploymentService(http, settingsService, userService) {
        this.http = http;
        this.settingsService = settingsService;
        this.userService = userService;
    }
    DeploymentService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl() + '/deployments', { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    DeploymentService.prototype.getStub = function () {
        var deployment = {
            id: ''
        };
        return deployment;
    };
    DeploymentService.prototype.store = function (deployment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (deployment.id) {
            console.error("Option not allowed!");
            // update
            /*return this.http.put(this.settingsService.getApiurl() + '/deployments', JSON.stringify(deployment), { headers: headers })
                .toPromise()
                .then((response) => {
                    return response.json() as Deployment
                }).catch(this.handleError);*/
        }
        else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/deploy', JSON.stringify(deployment), { headers: headers })
                .toPromise()
                .then(function (response) {
                return response.json();
            }).catch(this.handleError);
        }
    };
    DeploymentService.prototype.delete = function (deployment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });
        return this.http.delete(this.settingsService.getApiurl() + '/deployment/' + deployment.id, { headers: headers })
            .toPromise()
            .then(function (response) {
            return response;
        }).catch(this.handleError);
    };
    DeploymentService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return DeploymentService;
}());
DeploymentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], DeploymentService);

var _a, _b, _c;
//# sourceMappingURL=deployment.service.js.map

/***/ }),

/***/ "../../../../../src/app/environment.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    Suche hier\n</mat-card>\n\n<mat-card>\n    <mat-card-header>\n        <mat-card-title *ngIf=!environment.id>\n            <h3>Create Environment</h3>\n        </mat-card-title>\n        <mat-card-title *ngIf=environment.id>\n                <h3>Update Environment {{environment.title}} (ID {{environment.id}})</h3>\n            </mat-card-title>        \n    </mat-card-header>\n    <mat-card-content>\n        <form #createEnvironmentForm=\"ngForm\">\n            <div class=\"formcard\">\n                <div>\n                    <mat-form-field>\n                        <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"environment.title\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select name=\"management\" placeholder=\"Management Layer\" [(ngModel)]=\"environment.managementlayer.software\">\n                            <mat-option value=\"openstack\">OpenStack</mat-option>\n                            <mat-option value=\"bwlehrpool\">bwLehrpool</mat-option>\n                            <mat-option value=\"docker\">Docker</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select name=\"runtime\" placeholder=\"Runtime Technology\" [(ngModel)]=\"environment.runtimetechnology.software\">\n                            <mat-option value=\"kvm\">KVM</mat-option>\n                            <mat-option value=\"esxi\">ESXi</mat-option>\n                            <mat-option value=\"docker\">Docker</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div>\n                    <mat-form-field>\n                        <input matInput name=\"location\" placeholder=\"Location\" [(ngModel)]=\"environment.credentials.location\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"environment.credentials.username\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput name=\"password\" placeholder=\"Password\" [(ngModel)]=\"environment.credentials.password\">\n                    </mat-form-field>\n                </div>\n\n                <div *ngIf=\"environment.managementlayer.software=='openstack'\">\n                    <mat-form-field>\n                        <input matInput name=\"tenant\" placeholder=\"Tenant\" [(ngModel)]=\"environment.credentials.specifics.tenant\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput name=\"region\" placeholder=\"Region\" value=\"RegionOne\" [(ngModel)]=\"environment.credentials.specifics.region\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput name=\"domain\" placeholder=\"Domain\" value=\"Default\" [(ngModel)]=\"environment.credentials.specifics.domain\">\n                    </mat-form-field>\n                </div>\n\n                <button mat-raised-button (click)=\"clear()\" *ngIf=environment.id>CLEAR</button>\n                <button mat-raised-button color=\"primary\" (click)=\"store()\">SUBMIT</button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-table #table [dataSource]=\"environmentsDataSource\">\n        <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"managementlayer\">\n            <mat-header-cell *matHeaderCellDef> Management Layer </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.managementlayer.software}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"runtimetechnology\">\n            <mat-header-cell *matHeaderCellDef> Runtime Technology </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.runtimetechnology.software}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"location\">\n            <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.credentials.location}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"username\">\n            <mat-header-cell *matHeaderCellDef> Username </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.credentials.username}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <button mat-icon-button color=\"primary\" (click)=\"edit(element)\">\n                    <mat-icon aria-label=\"edit\">mode_edit</mat-icon>\n                </button>                \n                <button mat-icon-button color=\"warn\" (click)=\"delete(element)\">\n                  <mat-icon aria-label=\"delete\">delete_forever</mat-icon>\n                </button>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/environment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentComponent; });
/* unused harmony export EnvironmentDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EnvironmentComponent = (function () {
    function EnvironmentComponent(environmentService, snackBar, router) {
        this.environmentService = environmentService;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['title', 'managementlayer', 'runtimetechnology', 'location', 'username', 'actions'];
        this.clear();
    }
    EnvironmentComponent.prototype.ngOnInit = function () {
        this.environmentsDataSource = new EnvironmentDataSource(this.environmentService, this.snackBar);
    };
    EnvironmentComponent.prototype.store = function () {
        var _this = this;
        this.environmentService.store(this.environment).
            then(function (environment) {
            _this.snackBar.open("Environment stored successfully", "OK", { duration: 500 });
            _this.environmentsDataSource = new EnvironmentDataSource(_this.environmentService, _this.snackBar);
            _this.clear();
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    EnvironmentComponent.prototype.delete = function (environment) {
        var _this = this;
        this.environmentService.delete(environment).then(function (result) {
            _this.snackBar.open("Environment deleted successfully", "OK", { duration: 500 });
            _this.environmentsDataSource = new EnvironmentDataSource(_this.environmentService, _this.snackBar);
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    EnvironmentComponent.prototype.clear = function () {
        this.environment = this.environmentService.getStub();
    };
    EnvironmentComponent.prototype.edit = function (environment) {
        this.environment = environment;
    };
    return EnvironmentComponent;
}());
EnvironmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'environment-list',
        template: __webpack_require__("../../../../../src/app/environment.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__environment_service__["a" /* EnvironmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__environment_service__["a" /* EnvironmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */]) === "function" && _c || Object])
], EnvironmentComponent);

var EnvironmentDataSource = (function (_super) {
    __extends(EnvironmentDataSource, _super);
    function EnvironmentDataSource(environmentService, snackBar) {
        var _this = _super.call(this) || this;
        _this.environmentService = environmentService;
        _this.snackBar = snackBar;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    EnvironmentDataSource.prototype.connect = function () {
        var _this = this;
        if (!this.subject.isStopped)
            this.environmentService.getList().then(function (res) {
                _this.subject.next(res);
            }, function (error) {
                {
                    _this.snackBar.open("Server Error: " + error, "OK");
                }
            });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].merge(this.subject);
    };
    EnvironmentDataSource.prototype.disconnect = function () {
        this.subject.complete();
        this.subject.observers = [];
    };
    return EnvironmentDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=environment.component.js.map

/***/ }),

/***/ "../../../../../src/app/environment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
};
var headerObj = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
};
var EnvironmentService = (function () {
    function EnvironmentService(http, settingsService, userService) {
        this.http = http;
        this.settingsService = settingsService;
        this.userService = userService;
    }
    EnvironmentService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl() + '/environments', { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    EnvironmentService.prototype.getStub = function () {
        var credentials = {
            specifics: {}
        };
        var runtimetechnology = {};
        var managementlayer = {};
        var environment = {
            id: '',
            userid: '',
            credentials: credentials,
            runtimetechnology: runtimetechnology,
            managementlayer: managementlayer
        };
        return environment;
    };
    EnvironmentService.prototype.store = function (environment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (environment.id) {
            // update
            return this.http.put(this.settingsService.getApiurl() + '/environments', JSON.stringify(environment), { headers: headers })
                .toPromise()
                .then(function (response) {
                return response.json();
            }).catch(this.handleError);
        }
        else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/environments', JSON.stringify(environment), { headers: headers })
                .toPromise()
                .then(function (response) {
                return response.json();
            }).catch(this.handleError);
        }
    };
    EnvironmentService.prototype.delete = function (environment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });
        return this.http.delete(this.settingsService.getApiurl() + '/environment/' + environment.id, { headers: headers })
            .toPromise()
            .then(function (response) {
            return response;
        }).catch(this.handleError);
    };
    EnvironmentService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return EnvironmentService;
}());
EnvironmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], EnvironmentService);

var _a, _b, _c;
//# sourceMappingURL=environment.service.js.map

/***/ }),

/***/ "../../../../../src/app/image.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    Suche hier\n</mat-card>\n\n<mat-card>\n    <mat-card-header>\n        <mat-card-title *ngIf=!image.id>\n            <h3>Create Image</h3>\n        </mat-card-title>\n        <mat-card-title *ngIf=image.id>\n            <h3>Update Image {{image.title}} (ID {{image.id}})</h3>\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <form #createImageForm=\"ngForm\">\n            <div class=\"formcard\">\n                <div>\n                    <mat-form-field>\n                        <input matInput name=\"title\" placeholder=\"Title\" [(ngModel)]=\"image.title\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-select name=\"originEnvironment\" placeholder=\"Origin Environment\" [(ngModel)]=\"image.originEnvironment\" [compareWith]=\"compareEnvironments\">\n                            <mat-option *ngFor=\"let environment of environments\" [value]=\"environment\">\n                                {{ environment.title }}\n                            </mat-option>                            \n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field>\n                            <input matInput name=\"environmentReference\" placeholder=\"Environment Reference\" [(ngModel)]=\"image.environmentReference\">\n                    </mat-form-field>                    \n                </div>\n\n                <button mat-raised-button (click)=\"clear()\" *ngIf=image.id>CLEAR</button>\n                <button mat-raised-button color=\"primary\" (click)=\"store()\">SUBMIT</button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-table #table [dataSource]=\"imagesDataSource\">\n\n        <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"environmentReference\">\n            <mat-header-cell *matHeaderCellDef> Reference ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.environmentReference}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"origin\">\n            <mat-header-cell *matHeaderCellDef> Origin </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.originEnvironment.title}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"managementlayer\">\n            <mat-header-cell *matHeaderCellDef> Management Layer </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.originEnvironment.managementlayer.software}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"runtimetechnology\">\n            <mat-header-cell *matHeaderCellDef> Runtime Technology </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.originEnvironment.runtimetechnology.software}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"imported\">\n            <mat-header-cell *matHeaderCellDef> imported </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <mat-checkbox checked=\"{{element.imported}}\" disabled=\"disabled\"></mat-checkbox>\n            </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <button mat-icon-button color=\"primary\" (click)=\"upload(element)\">\n                        <mat-icon aria-label=\"upload\">backup</mat-icon>\n                    </button>\n                <button mat-icon-button color=\"primary\" (click)=\"edit(element)\">\n                        <mat-icon aria-label=\"edit\">mode_edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"warn\" (click)=\"delete(element)\">\n                      <mat-icon aria-label=\"delete\">delete_forever</mat-icon>\n                </button>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    </mat-table>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* unused harmony export ImagesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ImageComponent = (function () {
    function ImageComponent(imageService, snackBar, environmentService) {
        this.imageService = imageService;
        this.snackBar = snackBar;
        this.environmentService = environmentService;
        this.displayedColumns = ['title', 'environmentReference', 'origin', 'managementlayer', 'runtimetechnology', 'imported', 'actions'];
        this.clear();
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagesDataSource = new ImagesDataSource(this.imageService, this.snackBar);
        this.environmentService.getList().then(function (res) {
            _this.environments = res;
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    ImageComponent.prototype.store = function () {
        var _this = this;
        this.imageService.store(this.image).
            then(function (image) {
            _this.snackBar.open("Image stored successfully", "OK", { duration: 500 });
            _this.imagesDataSource = new ImagesDataSource(_this.imageService, _this.snackBar);
            _this.clear();
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    ImageComponent.prototype.delete = function (image) {
        var _this = this;
        this.imageService.delete(image).then(function (result) {
            _this.snackBar.open("Image deleted successfully", "OK", { duration: 500 });
            _this.imagesDataSource = new ImagesDataSource(_this.imageService, _this.snackBar);
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    ImageComponent.prototype.clear = function () {
        this.image = this.imageService.getStub();
    };
    ImageComponent.prototype.edit = function (image) {
        this.image = image;
    };
    ImageComponent.prototype.compareEnvironments = function (env1, env2) {
        return env1 && env2 && env1.id === env2.id;
    };
    return ImageComponent;
}());
ImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'image-list',
        template: __webpack_require__("../../../../../src/app/image.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__environment_service__["a" /* EnvironmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__environment_service__["a" /* EnvironmentService */]) === "function" && _c || Object])
], ImageComponent);

var ImagesDataSource = (function (_super) {
    __extends(ImagesDataSource, _super);
    function ImagesDataSource(imageService, snackBar) {
        var _this = _super.call(this) || this;
        _this.imageService = imageService;
        _this.snackBar = snackBar;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    ImagesDataSource.prototype.connect = function () {
        var _this = this;
        if (!this.subject.isStopped)
            this.imageService.getList().then(function (res) {
                _this.subject.next(res);
            }, function (error) {
                {
                    _this.snackBar.open("Server Error: " + error, "OK");
                }
            });
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].merge(this.subject);
    };
    ImagesDataSource.prototype.disconnect = function () {
        this.subject.complete();
        this.subject.observers = [];
    };
    return ImagesDataSource;
}(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "../../../../../src/app/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
};
var headerObj = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
};
var ImageService = (function () {
    function ImageService(http, settingsService, userService) {
        this.http = http;
        this.settingsService = settingsService;
        this.userService = userService;
    }
    ImageService.prototype.getList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl() + '/images', { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ImageService.prototype.getStub = function () {
        var credentials = {
            specifics: {}
        };
        var runtimetechnology = {};
        var managementlayer = {};
        var environment = {
            id: '',
            userid: '',
            credentials: credentials,
            runtimetechnology: runtimetechnology,
            managementlayer: managementlayer
        };
        var image = {
            id: '',
            userid: ''
        };
        return image;
    };
    ImageService.prototype.store = function (image) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
            'Content-type': 'application/json'
        });
        if (image.id) {
            // update
            return this.http.put(this.settingsService.getApiurl() + '/images', JSON.stringify(image), { headers: headers })
                .toPromise()
                .then(function (response) {
                return response.json();
            }).catch(this.handleError);
        }
        else {
            // create
            return this.http.post(this.settingsService.getApiurl() + '/images', JSON.stringify(image), { headers: headers })
                .toPromise()
                .then(function (response) {
                return response.json();
            }).catch(this.handleError);
        }
    };
    ImageService.prototype.delete = function (image) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth(),
        });
        return this.http.delete(this.settingsService.getApiurl() + '/image/' + image.id, { headers: headers })
            .toPromise()
            .then(function (response) {
            return response;
        }).catch(this.handleError);
    };
    ImageService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], ImageService);

var _a, _b, _c;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n    width: 100%;\n}\n\n.formcard {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.formcard > * {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\">\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Login</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <form #loginForm=\"ngForm\">\n                    <div class=\"formcard\">\n                        <mat-form-field>\n                            <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"loginCredentials.username\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput name=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"loginCredentials.password\"\n                                required>\n                            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                        </mat-form-field>\n\n                        <mat-checkbox name=\"save\" [(ngModel)]=\"storeCredentials\">Store credentials </mat-checkbox>\n\n                        <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"login()\">LOGIN</button>\n                    </div>\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Register</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <form #registerForm=\"ngForm\">\n                    <div class=\"formcard\">\n                        <mat-form-field>\n                            <input matInput name=\"username\" required placeholder=\"Username\" [(ngModel)]=\"registerUser.username\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput name=\"email\" required placeholder=\"e-Mail address\" [(ngModel)]=\"registerUser.email\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput name=\"fullname\" required placeholder=\"Full name\" [(ngModel)]=\"registerUser.fullname\">\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input matInput name=\"password\" required placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"registerUser.password\">\n                            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                        </mat-form-field>\n                        <button mat-raised-button color=\"primary\" (click)=\"register()\">CREATE ACCOUNT</button>\n                    </div>\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Credentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());

var LoginComponent = (function () {
    function LoginComponent(loginService, userService, router, snackBar) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.hide = true;
        this.storeCredentials = true;
        this.loginCredentials = new Credentials();
        this.registerUser = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.loginService.login(this.loginCredentials.username, this.loginCredentials.password)
            .then(function (user) {
            _this.userService.change(user, _this.storeCredentials);
            _this.router.navigate(['/']);
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.loginService.create(this.registerUser).
            then(function (user) {
            _this.userService.change(user, true);
            _this.router.navigate(['/']);
        }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSnackBar */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
};
var headerObj = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
};
var LoginService = (function () {
    function LoginService(http, settingsService, userService) {
        this.http = http;
        this.settingsService = settingsService;
        this.userService = userService;
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        });
        return this.http.get(this.settingsService.getApiurl() + '/user', { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    LoginService.prototype.create = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-type': 'application/json'
        });
        return this.http.post(this.settingsService.getApiurl() + '/user', JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/runtimestats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n    /*height: 90%;*/\n    width: 100%;\n}\n\nmat-card-content{\n    height: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/runtimestats.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"200px\">\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Import</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>Worker: {{runtimestats?.importWorker || 0 }}</div>\n                <div>Pending: {{runtimestats?.importsPending || 0 }}</div>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Export</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>Worker: {{runtimestats?.exportWorker || 0 }}</div>\n                <div>Pending: {{runtimestats?.exportsPending || 0 }}</div>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Store</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>Worker: {{runtimestats?.storeWorker || 0 }}</div>\n                <div>Pending: {{runtimestats?.storePending || 0 }}</div>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Version</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <div>Server: unknown</div>\n                <div>Client: unknown</div>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/runtimestats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimestatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtimestats_service__ = __webpack_require__("../../../../../src/app/runtimestats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RuntimestatsComponent = (function () {
    function RuntimestatsComponent(runtimestatsService, snackBar) {
        this.runtimestatsService = runtimestatsService;
        this.snackBar = snackBar;
        this.displayedColumns = ['id'];
    }
    RuntimestatsComponent.prototype.ngOnInit = function () {
        this.updateRuntimestats();
    };
    RuntimestatsComponent.prototype.updateRuntimestats = function () {
        var _this = this;
        this.runtimestatsService.get().then(function (runtimestats) { return _this.runtimestats = runtimestats; }, function (error) {
            {
                _this.snackBar.open("Server Error: " + error, "OK");
            }
        });
    };
    return RuntimestatsComponent;
}());
RuntimestatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'runtimestats',
        styles: [__webpack_require__("../../../../../src/app/runtimestats.component.css")],
        template: __webpack_require__("../../../../../src/app/runtimestats.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__runtimestats_service__["a" /* RuntimestatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__runtimestats_service__["a" /* RuntimestatsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]) === "function" && _b || Object])
], RuntimestatsComponent);

var _a, _b;
//# sourceMappingURL=runtimestats.component.js.map

/***/ }),

/***/ "../../../../../src/app/runtimestats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuntimestatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__("../../../../../src/app/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
};
var headerObj = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
};
var RuntimestatsService = (function () {
    function RuntimestatsService(http, settingsService, userService) {
        this.http = http;
        this.settingsService = settingsService;
        this.userService = userService;
    }
    RuntimestatsService.prototype.get = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.userService.getBasicAuth()
        });
        return this.http.get(this.settingsService.getApiurl() + '/runtimestats', { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    RuntimestatsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return RuntimestatsService;
}());
RuntimestatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _c || Object])
], RuntimestatsService);

var _a, _b, _c;
//# sourceMappingURL=runtimestats.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsService = (function () {
    function SettingsService() {
        this.apiurlSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.apiurl$ = this.apiurlSource.asObservable();
    }
    // Service message commands
    SettingsService.prototype.changeApiurl = function (apiurl) {
        this.apiurlSource.next(apiurl);
        localStorage.setItem('apiurl', apiurl);
    };
    SettingsService.prototype.getApiurl = function () {
        var data = localStorage.getItem('apiurl');
        if (!data) {
            return undefined;
        }
        return data;
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserService = (function () {
    function UserService() {
        this.userchangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.userchange$ = this.userchangeSource.asObservable();
    }
    // Service message commands
    UserService.prototype.change = function (user, store) {
        if (store === void 0) { store = false; }
        this.userchangeSource.next(user);
        if (store) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    };
    UserService.prototype.forget = function () {
        localStorage.removeItem('user');
    };
    UserService.prototype.remember = function () {
        var data = JSON.parse(localStorage.getItem('user'));
        if (!data) {
            var user = {
                email: "",
                username: "",
                password: "",
                fullname: "",
                id: ""
            };
            return user;
        }
        var user = {
            email: data['email'],
            username: data['username'],
            password: data['password'],
            fullname: data['fullname'],
            id: data['id']
        };
        return user;
    };
    UserService.prototype.getBasicAuth = function () {
        var user = this.remember();
        return btoa(user.username + ':' + user.password);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map