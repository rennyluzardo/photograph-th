webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"doc-loader\">\n    <tr>\n        <td>\n            <img src=\"assets/images/ajax-document-loader.gif\" alt=\"Loading...\" />\n        </td>\n    </tr>\n</table>\n\n<!-- Menu -->\n<div class=\"menu-wrapper center-relative\">\n    <nav id=\"header-main-menu\">\n        <div class=\"mob-menu\">MENU</div>\n        <ul class=\"main-menu sm sm-clean\">\n            <li>\n                <a href=\"#home\">Inicio</a>\n            </li>\n            <li>\n                <a href=\"#portfolio\">Portafolio</a>\n            </li>\n            <li>\n                <a href=\"#skills\">Skills</a>\n            </li>\n            <li>\n                <a href=\"#news\">Noticias</a>\n            </li>\n            <li>\n                <a href=\"#contact\">Contacto</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n\n\n<!-- Home -->\n\n<div id=\"home\" class=\"section intro-page\">\n    <div class=\"block content-1170 center-relative center-text\">\n        <!-- <img class=\"top-logo\" src=\"assets/demo-images/logo.png\" alt=\"Boxus\" />\n        <br> -->\n        <h1 class=\"big-title\">Photograph\n            <span>TH</span>\n        </h1>\n        <p class=\"title-desc\">Mariel Rotondaro</p>\n    </div>\n</div>\n\n<!-- Portafolio -->\n<div id=\"portfolio\" class=\"section\">\n    <div class=\"block content-1170 center-relative\">\n        <div class=\"section-title-holder right\">\n            <div class=\"section-num\">\n                <span>01</span>\n            </div>\n            <h2 class=\"entry-title\">Portafolio</h2>\n        </div>\n        <div class=\"section-content-holder portfolio-holder left\">\n            <div class=\"grid\" id=\"portfolio-grid\">\n                <div class=\"grid-sizer\"></div>\n                <!-- <div class=\"grid-item element-item p_one\">\n                    <a href=\"single-portfolio.html\">\n                        <img src=\"assets/demo-images/portfolio_item_01.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div> -->\n                <!-- <div class=\"grid-item element-item p_one_half\">\n                    <a href=\"single-portfolio2.html\">\n                        <img src=\"assets/demo-images/portfolio_item_02.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div> -->\n                <div class=\"grid-item element-item p_one\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_05.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_05.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"grid-item element-item p_one_half\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_08.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_08.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"grid-item element-item p_one_half\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_08.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_08.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"grid-item element-item p_one\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_05.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_05.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"grid-item element-item p_one_half\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_08.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_08.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"grid-item element-item p_one_half\">\n                    <a data-rel=\"prettyPhoto[gallery1]\" href=\"assets/demo-images/portfolio_item_08.jpg\">\n                        <img src=\"assets/demo-images/portfolio_item_08.jpg\" alt=\"\">\n                        <div class=\"portfolio-text-holder\">\n                            <div class=\"portfolio-text-wrapper\">\n                                <p class=\"portfolio-type\">\n                                    <img src=\"assets/images/icon_post.svg\" alt=\"\">\n                                </p>\n                                <p class=\"portfolio-text\">PSD MOCKUP</p>\n                                <p class=\"portfolio-sec-text\">Smart Watch</p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"clear\"></div>\n            <div class=\"block portfolio-load-more-holder\">\n                <a target=\"_self\" class=\"more-posts\">VER MAS</a>\n                <img src=\"assets/images/icon_infinity.svg\" alt=\"Load more\">\n            </div>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n    <div class=\"clear\"></div>\n</div>\n\n<!-- Skills -->\n\n<div id=\"skills\" class=\"section\">\n    <div class=\"block content-1170 center-relative\">\n        <div class=\"section-title-holder right\">\n            <div class=\"section-num\">\n                <span>02</span>\n            </div>\n            <h2 class=\"entry-title\">EXPERIENCIA</h2>\n        </div>\n        <div class=\"section-content-holder left\">\n            <div class=\"content-wrapper\">\n                <div class=\"content-title-holder\">\n                    <p class=\"content-title\">Skills</p>\n                </div>\n                <p>Desarrollo actividades creativas, profesionales y económicas que exigen tanto de conocimientos técnicos y\n                    del dominio de la imagen como del desarrollo de la capacidad expresiva y comunicacional.</p>\n                <p>Me apasionan los temas de la imagen, y mantengo un fuerte interés en diferentes aspectos sociales y culturales\n                     como la lectura, el cine, la fotografía, la televisión cultural y \n                    científica, el arte, el teatro y el arte de la conversación, por nombrar algunos.</p>\n                <br>\n                <div class=\"progress_bar \">\n                    <div class=\"progress_bar_field_holder\" style=\"width:81%;\">\n                        <div class=\"progress_bar_title\" style=\"color: #55B286\">HTML</div>\n                        <div class=\"progress_bar_percent_text\" style=\"color: #55B286\">81%</div>\n                        <div class=\"progress_bar_field_perecent\" style=\"background-color:#32DB8A;\"></div>\n                    </div>\n                </div>\n                <div class=\"progress_bar \">\n                    <div class=\"progress_bar_field_holder\" style=\"width:93%;\">\n                        <div class=\"progress_bar_title\" style=\"color: #E3A536\">CSS</div>\n                        <div class=\"progress_bar_percent_text\" style=\"color: #E3A536\">93%</div>\n                        <div class=\"progress_bar_field_perecent\" style=\"background-color:#FFBB42;\"></div>\n                    </div>\n                </div>\n                <div class=\"progress_bar \">\n                    <div class=\"progress_bar_field_holder\" style=\"width:72%;\">\n                        <div class=\"progress_bar_title\" style=\"color: #B24564\">PSD</div>\n                        <div class=\"progress_bar_percent_text\" style=\"color: #B24564\">72%</div>\n                        <div class=\"progress_bar_field_perecent\" style=\"background-color:#E74C78;\"></div>\n                    </div>\n                </div>\n                <div class=\"progress_bar \">\n                    <div class=\"progress_bar_field_holder\" style=\"width:99%;\">\n                        <div class=\"progress_bar_title\" style=\"color: #468ac7\">DISEÑO</div>\n                        <div class=\"progress_bar_percent_text\" style=\"color: #468ac7\">99%</div>\n                        <div class=\"progress_bar_field_perecent\" style=\"background-color:#4C9EE7;\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</div>\n\n\n<!-- News -->\n<div id=\"news\" class=\"section\">\n    <div class=\"block content-1170 center-relative\">\n        <div class=\"section-title-holder right\">\n            <div class=\"section-num\">\n                <span>\n                    03\n                </span>\n            </div>\n            <h2 class=\"entry-title\">NOTICIAS</h2>\n        </div>\n        <div class=\"section-content-holder left\">\n            <div class=\"content-wrapper\">\n                <div class=\"blog-holder block center-relative\">\n                    <!-- Componente Noticias -->\n                    <app-noticias></app-noticias>\n                    <div class=\"latest-post-bottom-text\">\n                        <a href=\"#\">GO TO BLOG</a>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n\n    <div class=\"block content-1170 center-relative\">\n        <!-- slider -->\n        <div class=\"extra-content-full-width\">\n            <script>\n                var fwslider1_speed = \"500\";\n                var fwslider1_auto = \"false\";\n                var fwslider1_hover = \"true\";\n                var fwslider1_start = \"0\";\n                var fwslider1_width = \"400\";\n                var fwslider1_num = \"5\";\n            </script>\n            <div class=\"fwslider1 fw-image-slider-holder list_carousel relative\">\n                <div class=\"caroufredsel_wrapper\">\n                    <ul id=\"fwslider1\" class=\"fw-image-slider\">\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_editing.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Edicion de Video</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_clear.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Premium Cleer</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_display.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Para Todas las Pantallas</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_time.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Siempre A Tiempo</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_ideas.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Innovando Ideas</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_sound.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Sonido Perfecto</p>\n                        </li>\n                        <li class=\"fw-slide\">\n                            <img src=\"assets/demo-images/icon_solution.png\" alt=\"\">\n                            <p class=\"fw-slide-text\">Soluciones HD</p>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"clear\"></div>\n                <div id=\"fwslider1_fw_image_slide_pager\" class=\"fw_carousel_pagination\"></div>\n            </div>\n            <a id=\"fwslider1_fw_next\" class=\"carousel_fw_next\" href=\"#\"></a>\n            <div class=\"clear\"></div>\n        </div>\n\n    </div>\n</div>\n\n\n\n\n<!-- Contact -->\n<div id=\"contact\" class=\"section\">\n    <div class=\"block content-1170 center-relative\">\n        <div class=\"section-title-holder left\">\n            <div class=\"section-num\">\n                <span>\n                    04\n                </span>\n            </div>\n            <h2 class=\"entry-title\">Contacto</h2>\n        </div>\n        <div class=\"section-content-holder right\">\n            <div class=\"content-wrapper\">\n                <div class=\"one_half \">\n                    <p>Si tienes preguntas, dudas o sugerencias por favor enviame un mensaje; normalmente respondo entre 4 a\n                        6 horas.</p>\n                    <br>\n                    <p>\n                        <strong>\n                            <span style=\"color: #e64b77;\">Tambien estoy por otras redes!</span>\n                        </strong> al final de la pagina podras ver los iconos de las redes donde podemos contactar.</p>\n                </div>\n                <div class=\"one_half last\">\n                    <div class=\"contact-form\">\n                        <p>\n                            <input id=\"name\" type=\"text\" name=\"your-name\" placeholder=\"Nombre\">\n                        </p>\n                        <p>\n                            <input id=\"contact-email\" type=\"email\" name=\"your-email\" placeholder=\"Email\">\n                        </p>\n                        <p>\n                            <input id=\"subject\" type=\"text\" name=\"your-subject\" placeholder=\"Motivo\">\n                        </p>\n                        <p>\n                            <textarea id=\"message\" name=\"your-message\" placeholder=\"Mensaje\"></textarea>\n                        </p>\n                        <p>\n                            <input type=\"submit\" onClick=\"SendMail()\" value=\"ENVIAR\">\n                        </p>\n                    </div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"full-width\">\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255347.0233773414!2d-78.57062665484433!3d-0.18625044036938004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1sen!2sec!4v1524092723260\"\n                    width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</div>\n\n<!-- Footer -->\n\n<footer>\n    <div class=\"footer content-1170 center-relative\">\n        <ul>\n            <li class=\"copyright-footer\">\n                © 2018 All rights reserved. | PhotographerTH.com by\n                <a href=\"https://github.com/rennyluzardo\" target=\"_blank\">Renny Luzardo</a>\n            </li>\n            <li class=\"social-footer\">\n                <a href=\"#\">\n                    <span class=\"fa fa-twitter\"></span>\n                </a>\n                <a href=\"#\">\n                    <span class=\"fa fa-behance\"></span>\n                </a>\n                <a href=\"#\">\n                    <span class=\"fa fa-dribbble\"></span>\n                </a>\n                <a href=\"https://www.facebook.com/PhotographerTH/\">\n                    <span class=\"fa fa-facebook\"></span>\n                </a>\n                <a href=\"#\">\n                    <span class=\"fa fa-rss\"></span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticias_noticias_component__ = __webpack_require__("./src/app/noticias/noticias.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__noticias_noticias_component__["a" /* NoticiasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/noticias.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        var _this = this;
        this.http = http;
        this.getTwts = function () {
            // console.log(__dirname)
            return new Promise(function (resolve, reject) {
                _this.http.get('/tweets_list').subscribe(function (data) {
                    var twtsTotales = [];
                    // Filtro
                    for (var i = 0; twtsTotales.length < 4; i++) {
                        twtsTotales.push(data[i]);
                        if (twtsTotales.length === 4) {
                            resolve(twtsTotales);
                        }
                    }
                }, function (err) { return reject(err); });
            });
        };
    }
    NoticiasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/app/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"relative blog-item-holder center-relative\" *ngFor=\"let twt of totaltwts\">\n  <div class=\"num\">{{twt.created_at | date}}</div>\n  <div class=\"info\">\n      <div class=\"author vcard \">{{twt.user.name}}</div>\n      <div class=\"cat-links\">\n          <ul>\n              <li>\n                  <a href=\"#\">BRANDING</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n  <h3 class=\"entry-title\">\n      <a href=\"#\">{{twt.text}}</a>\n  </h3>\n  <div class=\"clear\"></div>\n</article>\n"

/***/ }),

/***/ "./src/app/noticias/noticias.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noticias_service__ = __webpack_require__("./src/app/noticias.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(noticias) {
        this.noticias = noticias;
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noticias.getTwts().then(function (tweets) { _this.totaltwts = tweets; }).catch(function (err) { return console.log(err); });
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-noticias',
            template: __webpack_require__("./src/app/noticias/noticias.component.html"),
            styles: [__webpack_require__("./src/app/noticias/noticias.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__noticias_service__["a" /* NoticiasService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__noticias_service__["a" /* NoticiasService */]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map