webpackJsonp([0],{

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, afAuth, fb, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.fb = fb;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.displayName = null;
                _this.photoURL = null;
                _this.email = null;
                _this.refreshToken = null;
                return;
            }
            _this.displayName = user.displayName;
            _this.photoURL = user.photoURL;
            _this.email = "Email: " + user.email;
            _this.refreshToken = "Token: " + user.refreshToken;
        });
    }
    HomePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.signInWithFacebook = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            return this.fb.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(facebookCredential);
            });
        }
        else {
            return this.afAuth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider()).then(function (res) {
                console.log(res);
                _this.showToast("Seja Bem vindo " + res.user.displayName);
            });
        }
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (res) {
            _this.showToast("Logout feito com sucesso!");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\IONIC\sou_do_bairro\src\pages\home\home.html"*/'<ion-header>\n	<ion-navbar color="primary">\n      <button ion-button menuToggle icon-only>\n          <ion-icon name=\'menu\'></ion-icon>\n        </button>\n		<ion-title>\n			SouDoBairro\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n\n    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <div class="splash-bg" *ngIf="refreshToken != null">\n      <img src="./assets/imgs/logo.png" class="slide-image" />\n    </div>\n\n  <div *ngIf="refreshToken == null">\n    \n    <ion-slides pager="true">\n      <ion-slide>\n        <img src="./assets/imgs/logo_bairro.png" class="slide-image"/>\n        <div id="bairro">SANTA BÁRBARA</div>\n        <div id="slogan">Valorize o comércio do seu Bairro!!!</div>\n        <h2 class="slide-title">Agora o seu Bairro tem um App</h2>\n        <p class="slide-descricao">Chegou o SouDoBairro, um app para unir consumidor e comerciante que moram no mesmo bairro e que por algum motivo ainda não se conhecem.</p>\n        <p class="slide-descricao">Deslize para continuar...</p>\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/ica-slidebox-img-2.png" class="slide-image"/>\n        <h2 class="slide-title">O que temos no App?</h2>\n        <p class="slide-descricao">Aqui você poderá se conectar com os chamados "papa-táxis" do bairro e contratar uma corrida. Você também pode encontrar um produto de forma rápida, se conectando com vendedores do seu bairro.</p>\n        <p class="slide-descricao">Deslize para continuar...</p>\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/ica-slidebox-img-3.png" class="slide-image"/>\n        <h2 class="slide-title">Saia na frente...</h2>\n        <p class="slide-descricao">Você pode fazer uma pesquisa e saber quais produtos estão sendo vendidos no seu bairro e quais produtos não possuem vendedores perto de você, criando assim uma excelente estratégia de negócio.</p>\n        <p class="slide-descricao">Deslize para continuar...</p>\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/ica-slidebox-img-4.png" class="slide-image ultima"/>\n        <h2 class="slide-title">Vamos começar?</h2>\n        <div class="comecar">É incrivelmente grátis... Clique em Entrar com Facebook para começar...</div>            \n        <div class="comecar-button">\n          <button ion-button icon-left (click)="signInWithFacebook()" large full>\n            <ion-icon name="logo-facebook"></ion-icon>\n            Entrar com Facebook\n          </button>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  \n  <div *ngIf="refreshToken != null">\n\n      <ion-menu [content]="content">          \n          <ion-header>              \n            <ion-toolbar>                \n                <img src="{{photoURL}}" class="photoURL"/>\n              <ion-title>\n                    {{displayName}}\n              </ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <ion-content>\n            <ion-list>\n              <button ion-item (click)="openPage(homePage)">\n                Home\n              </button>\n              <button ion-item (click)="signOut()">\n                Sair\n              </button>\n            </ion-list>\n          </ion-content>\n        </ion-menu>        \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\IONIC\sou_do_bairro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(302);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var firebaseConfig = {
    apiKey: "AIzaSyCxlkS7NsCcaiv_MFfxa8yOOMWmt6716bg",
    authDomain: "sou-do-bairro.firebaseapp.com",
    databaseURL: "https://sou-do-bairro.firebaseio.com",
    projectId: "sou-do-bairro",
    storageBucket: "sou-do-bairro.appspot.com",
    messagingSenderId: "730190443565"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\IONIC\sou_do_bairro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\IONIC\sou_do_bairro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map