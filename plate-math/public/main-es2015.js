(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _metric_calculator_metric_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metric-calculator/metric-calculator.component */ "./src/app/metric-calculator/metric-calculator.component.ts");






const routes = [
    { path: '', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"] },
    { path: 'metric', component: _metric_calculator_metric_calculator_component__WEBPACK_IMPORTED_MODULE_3__["MetricCalculatorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'plate-math';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plate Math is Hard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2em;\n  margin: 1em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkYnljelxcQW5ndWxhclxccGxhdGUtbWF0aC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDRVI7QURBUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGhlYWRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiaGVhZGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciBuYXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIG5hdiBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _calculator_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculator/diagram/diagram.component */ "./src/app/calculator/diagram/diagram.component.ts");
/* harmony import */ var _instagrambox_instagrambox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instagrambox/instagrambox.component */ "./src/app/instagrambox/instagrambox.component.ts");
/* harmony import */ var _metric_calculator_metric_calculator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metric-calculator/metric-calculator.component */ "./src/app/metric-calculator/metric-calculator.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"],
        _calculator_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_7__["DiagramComponent"],
        _instagrambox_instagrambox_component__WEBPACK_IMPORTED_MODULE_8__["InstagramboxComponent"],
        _metric_calculator_metric_calculator_component__WEBPACK_IMPORTED_MODULE_9__["MetricCalculatorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"],
                    _calculator_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_7__["DiagramComponent"],
                    _instagrambox_instagrambox_component__WEBPACK_IMPORTED_MODULE_8__["InstagramboxComponent"],
                    _metric_calculator_metric_calculator_component__WEBPACK_IMPORTED_MODULE_9__["MetricCalculatorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diagram/diagram.component */ "./src/app/calculator/diagram/diagram.component.ts");





class CalculatorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.barDefaultWeights = [
            45,
            5,
            10
        ];
        this.barType = 0;
        this.emptyBarWeight = 45;
        this.targetWeight = 45;
        this.barWidth = 25;
        this.requiredWeights = [];
        this.weightStep = 2;
        this.defaultPlates = [
            { value: 45, quantity: 10, plateColor: "#588dff" },
            { value: 35, quantity: 2, plateColor: "#FFFF99" },
            { value: 25, quantity: 2, plateColor: "#7FBF7F" },
            { value: 10, quantity: 4, plateColor: "#FFF" },
            { value: 5, quantity: 2, plateColor: "#FF9999" },
            { value: 2.5, quantity: 2, plateColor: "#e94985" },
        ];
        this.plates = this.defaultPlates;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    setBarType(barTypeId) {
        this.barType = barTypeId;
        switch (barTypeId) {
            case 0: {
                this.plates = Object.assign([], this.defaultPlates);
                this.weightStep = 2;
                this.emptyBarWeight = this.barDefaultWeights[0];
                break;
            }
            case 1: {
                this.emptyBarWeight = this.barDefaultWeights[1];
                this.weightStep = 4;
                this.plates = Object.assign([], [
                    { value: 45, quantity: 0, plateColor: "#588dff" },
                    { value: 35, quantity: 0, plateColor: "#FFFF99" },
                    { value: 25, quantity: 4, plateColor: "#7FBF7F" },
                    { value: 10, quantity: 8, plateColor: "#FFF" },
                    { value: 5, quantity: 10, plateColor: "#FF9999" },
                    { value: 2.5, quantity: 10, plateColor: "#e94985" },
                ]);
                break;
            }
            case 2: {
                this.plates = Object.assign([], this.defaultPlates);
                this.weightStep = 1;
                this.emptyBarWeight = this.barDefaultWeights[2];
                break;
            }
        }
        this.targetWeight = this.emptyBarWeight;
    }
    getTotalWeight() {
        var totalWeight = this.emptyBarWeight;
        if (this.barType === 1) {
            this.plates.forEach(function (weight) {
                totalWeight += weight.value * (weight.quantity / 2);
            });
        }
        else {
            this.plates.forEach(function (weight) {
                totalWeight += weight.value * weight.quantity;
            });
        }
        return totalWeight;
    }
    calculateRequiredPlates() {
        switch (this.barType) {
            case 0: {
                this.requiredWeights = this.calculateRequiredPlatesBarbell(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
            case 1: {
                this.requiredWeights = this.calculateRequiredPlatesDumbbells(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
            case 2: {
                this.requiredWeights = this.calculateRequiredPlatesLoadingPin(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
        }
        return this.requiredWeights;
    }
    calculateRequiredPlatesBarbell(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Round down single plates to make plate pairs */
            if (weight.quantity % 2 != 0) {
                weight.quantity--;
            }
            /* Skip empty plate and plates that don't have any pairs */
            if (weight.quantity === 0 || weight.quantity < 2) {
                return;
            }
            var platePairs = weight.quantity / 2;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
                if (weight.value * 2 <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= (weight.value * 2);
                }
            }
        });
        return requiredWeights;
    }
    calculateRequiredPlatesDumbbells(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Round down 1-3 plates to make plate quads */
            if (weight.quantity % 4 != 0) {
                weight.quantity--;
                if (weight.quantity % 4 != 0) {
                    weight.quantity--;
                    if (weight.quantity % 4 != 0) {
                        weight.quantity--;
                    }
                }
            }
            /* Skip empty plate and plates that don't have any quads */
            if (weight.quantity < 4) {
                return;
            }
            var platePairs = weight.quantity / 4;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 4 plates don't exceed requiredWeightPlateTotal */
                if (weight.value * 2 <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= (weight.value * 2);
                }
            }
        });
        return requiredWeights;
    }
    calculateRequiredPlatesLoadingPin(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Skip empty plate */
            if (weight.quantity === 0) {
                return;
            }
            var platePairs = weight.quantity;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
                if (weight.value <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= weight.value;
                }
            }
        });
        return requiredWeights;
    }
    generateRequiredPlatesString() {
        this.requiredWeights = this.calculateRequiredPlates();
        return this.getRequiredPlatesString();
    }
    getRequiredPlatesString() {
        this.calculateRequiredPlates();
        var outputString = "";
        switch (this.barType) {
            case 0: {
                outputString = this.generateBarbellPlatesString();
                break;
            }
            case 1: {
                outputString = this.generateDumbbellPlatesString();
                break;
            }
            case 2: {
                outputString = this.generateLoadingPinPlatesString();
                break;
            }
        }
        return "";
    }
    getBarbellPlatesCount() {
        var plateCount = [
            { weight: 45, count: 0 },
            { weight: 35, count: 0 },
            { weight: 25, count: 0 },
            { weight: 10, count: 0 },
            { weight: 5, count: 0 },
            { weight: 2.5, count: 0 },
        ];
        for (let i = 0; i <= this.requiredWeights.length - 1; i++) {
            plateCount.forEach(plate => {
                if (plate.weight === this.requiredWeights[i].value) {
                    plate.count++;
                }
            });
        }
        plateCount.filter(plate => plate.count != 0);
        return plateCount;
    }
    generateBarbellPlatesString() {
        /* Return string of plates in order */
        var outputString = "";
        var plateCount = this.getBarbellPlatesCount();
        plateCount.reverse().forEach(plate => {
            if (plate.count > 0) {
                outputString = outputString + plate.weight + "(x" + plate.count + ") - ";
            }
        });
        outputString = outputString + " | Barbell " + this.emptyBarWeight + "lbs | ";
        plateCount.reverse().forEach(plate => {
            if (plate.count > 0) {
                outputString = outputString + " - " + plate.weight + "(x" + plate.count + ")";
            }
        });
        return outputString;
    }
    generateDumbbellPlatesString() {
        return "";
    }
    generateLoadingPinPlatesString() {
        return "";
    }
    getPlateColor(plate) {
        return plate.plateColor;
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 57, vars: 30, consts: [[1, "container"], [1, "unit-container"], ["routerLink", "/metric", "routerLinkActive", "active", 1, "bartype-button", "bartype-active"], [1, "bartype-button-container"], [1, "bartype-button", 3, "click"], ["for", "barweight"], ["type", "number", "id", "barweight", "step", "5", "min", "0", "max", "1000", 1, "weight-input", 3, "ngModel", "ngModelChange"], [1, "plate-inventory"], ["for", "fortyfive"], ["type", "number", "id", "fortyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "thirtyfive"], ["type", "number", "id", "thirtyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "twentyfive"], ["type", "number", "id", "twentyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "ten"], ["type", "number", "id", "ten", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "five"], ["type", "number", "id", "five", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "twoandahalf"], ["type", "number", "id", "twoandahalf", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "target"], ["type", "number", "id", "target-input", "name", "target-input", "step", "5", 3, "ngModel", "min", "max", "ngModelChange"], ["type", "range", "id", "target", "name", "target", "step", "5", "required", "", 1, "slider", 3, "ngModel", "min", "max", "ngModelChange"], [3, "barType", "emptyBarWeight", "requiredWeights"], [1, "centered", "plate-string"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Imperial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bar Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_7_listener() { return ctx.setBarType(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Barbell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_9_listener() { return ctx.setBarType(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dumbbells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_11_listener() { return ctx.setBarType(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plate Inventory:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Empty Bar Weight: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.emptyBarWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "lbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "45lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_23_listener($event) { return ctx.plates[0].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "35lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.plates[1].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "25lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_31_listener($event) { return ctx.plates[2].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_35_listener($event) { return ctx.plates[3].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_39_listener($event) { return ctx.plates[4].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2.5lbs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_43_listener($event) { return ctx.plates[5].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Target Weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Desired Weight on Bar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_48_listener($event) { return ctx.targetWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "lbs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_50_listener($event) { return ctx.targetWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-diagram", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[0].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[1].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[2].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[3].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[4].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[5].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.getTotalWeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.getTotalWeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight Plate Output: ", ctx.targetWeight, "lbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("barType", ctx.barType)("emptyBarWeight", ctx.emptyBarWeight)("requiredWeights", ctx.requiredWeights);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getRequiredPlatesString());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__["DiagramComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.unit-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  max-width: 100%;\n}\n\n.bartype-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: lightgray;\n  padding: 0.3em 0.8em;\n  margin: 0.5em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n}\n\n.bartype-active[_ngcontent-%COMP%] {\n  background-color: #e94985;\n  color: white;\n}\n\n.weight-input[_ngcontent-%COMP%] {\n  width: 2.5em;\n}\n\n#target-input[_ngcontent-%COMP%] {\n  width: 3.25em;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.plate-inventory[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table-row;\n  list-style: none;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.plate-string[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n@media screen and (max-device-width: 980px) {\n  .bartype-button[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 0.5em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9DOlxcVXNlcnNcXGRieWN6XFxBbmd1bGFyXFxwbGF0ZS1tYXRoL3NyY1xcYXBwXFxjYWxjdWxhdG9yXFxjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FER0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNBUjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FER1E7RUFDSSxtQkFBQTtBQ0RaOztBRElRO0VBQ0ksbUJBQUE7QUNGWjs7QURPQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi51bml0LWNvbnRhaW5lciB7XHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFydHlwZS1idXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAuM2VtIC44ZW07XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhcnR5cGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDczLCAxMzMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ud2VpZ2h0LWlucHV0IHtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxufVxyXG5cclxuI3RhcmdldC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMy4yNWVtO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxhdGUtaW52ZW50b3J5IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBsYXRlLXN0cmluZyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTgwcHgpIHtcclxuICAgIC5iYXJ0eXBlLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IC41ZW0gYXV0bztcclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnVuaXQtY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmJhcnR5cGUtYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMC4zZW0gMC44ZW07XG4gIG1hcmdpbjogMC41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYXJ0eXBlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTQ5ODU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndlaWdodC1pbnB1dCB7XG4gIHdpZHRoOiAyLjVlbTtcbn1cblxuI3RhcmdldC1pbnB1dCB7XG4gIHdpZHRoOiAzLjI1ZW07XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBsYXRlLWludmVudG9yeSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnBsYXRlLWludmVudG9yeSBsaSB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wbGF0ZS1pbnZlbnRvcnkgbGkgbGFiZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLnBsYXRlLWludmVudG9yeSBsaSBpbnB1dCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5wbGF0ZS1zdHJpbmcge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk4MHB4KSB7XG4gIC5iYXJ0eXBlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/calculator/diagram/diagram.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculator/diagram/diagram.component.ts ***!
  \*********************************************************/
/*! exports provided: DiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramComponent", function() { return DiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DiagramComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r6.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r6.value);
} }
function DiagramComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_1_div_1_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.requiredWeights.reverse());
} }
function DiagramComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r8.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r8.value);
} }
function DiagramComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_1_div_5_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.requiredWeights.reverse());
} }
function DiagramComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DiagramComponent_div_1_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasRequiredPlates());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emptyBarWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasRequiredPlates());
} }
function DiagramComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r14.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r14.value);
} }
function DiagramComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_2_div_1_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.requiredWeights.reverse());
} }
function DiagramComponent_div_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r16.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r16.value);
} }
function DiagramComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_2_div_5_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.requiredWeights.reverse());
} }
function DiagramComponent_div_2_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r18.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r18.value);
} }
function DiagramComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_2_div_8_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.requiredWeights.reverse());
} }
function DiagramComponent_div_2_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r20.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r20.value);
} }
function DiagramComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_2_div_12_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.requiredWeights.reverse());
} }
function DiagramComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_2_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DiagramComponent_div_2_div_5_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiagramComponent_div_2_div_8_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DiagramComponent_div_2_div_12_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasRequiredPlates());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.emptyBarWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasRequiredPlates());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasRequiredPlates());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.emptyBarWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasRequiredPlates());
} }
function DiagramComponent_div_3_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plate_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", plate_r23.plateColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plate_r23.value);
} }
function DiagramComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_3_div_3_div_1_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.requiredWeights.reverse());
} }
function DiagramComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DiagramComponent_div_3_div_3_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasRequiredPlates());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.emptyBarWeight);
} }
class DiagramComponent {
    constructor() { }
    ngOnInit() {
    }
    hasRequiredPlates() {
        return this.requiredWeights.length > 0;
    }
}
DiagramComponent.ɵfac = function DiagramComponent_Factory(t) { return new (t || DiagramComponent)(); };
DiagramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagramComponent, selectors: [["app-diagram"]], inputs: { barType: "barType", emptyBarWeight: "emptyBarWeight", requiredWeights: "requiredWeights" }, decls: 4, vars: 3, consts: [["class", "barbell-graphic-container", 4, "ngIf"], [4, "ngIf"], [1, "barbell-graphic-container"], ["class", "inline-block", 4, "ngIf"], [1, "barbell-container"], [1, "barbell-graphic", "weight-plate-graphic"], [1, "inline-block"], ["class", "inline-block", 4, "ngFor", "ngForOf"], [1, "weight-plate-graphic"], [1, "loading-pin-container"], [1, "loading-pin-top"], ["class", "loading-pin-container", 4, "ngIf"], [1, "loading-pin-graphic", "loading-pin-bar"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "loading-pin-graphic"]], template: function DiagramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagramComponent_div_1_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DiagramComponent_div_2_Template, 13, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DiagramComponent_div_3_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barType == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barType == 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".barbell-graphic-container[_ngcontent-%COMP%] {\n  text-align: center;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\n\n.barbell-graphic-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.barbell-graphic[_ngcontent-%COMP%] {\n  background-color: gray;\n  margin: 0 auto;\n  padding: 0 50px !important;\n  display: inline-block;\n}\n\n.weight-plate-graphic[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: black solid 1px;\n  padding: 50px 3px;\n  min-width: 25px;\n}\n\n.barbell-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 50px 0;\n  min-width: 25px;\n}\n\n.loading-pin-bar[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.loading-pin-graphic[_ngcontent-%COMP%] {\n  background-color: gray;\n  display: block;\n  margin: 0 auto;\n  border: black solid 1px;\n  padding: 3px 50px;\n  width: 25px;\n  text-align: center;\n}\n\n.loading-pin-top[_ngcontent-%COMP%] {\n  background-color: gray;\n  width: 20px;\n  height: 20px;\n  margin: 0 auto;\n  border: black solid 1px;\n  border-bottom: none;\n}\n\n.loading-pin-container[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: none;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\n\n.loading-pin-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9kaWFncmFtL0M6XFxVc2Vyc1xcZGJ5Y3pcXEFuZ3VsYXJcXHBsYXRlLW1hdGgvc3JjXFxhcHBcXGNhbGN1bGF0b3JcXGRpYWdyYW1cXGRpYWdyYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3IvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FDRzVCOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtBQ0s1Qjs7QURGQTtFQUNJLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcmJlbGwtZ3JhcGhpYy1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgIFxyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuLmJhcmJlbGwtZ3JhcGhpYy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iYXJiZWxsLWdyYXBoaWN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDUwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndlaWdodC1wbGF0ZS1ncmFwaGljIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xyXG4gICAgcGFkZGluZzogNTBweCAzcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5iYXJiZWxsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXBpbi1iYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXBpbi1ncmFwaGljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggNTBweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1waW4tdG9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ubG9hZGluZy1waW4tY29udGFpbmVye1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47ICBcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbi5sb2FkaW5nLXBpbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iLCIuYmFyYmVsbC1ncmFwaGljLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGaXJlZm94ICovXG59XG5cbi5iYXJiZWxsLWdyYXBoaWMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5iYXJiZWxsLWdyYXBoaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA1MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLndlaWdodC1wbGF0ZS1ncmFwaGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgcGFkZGluZzogNTBweCAzcHg7XG4gIG1pbi13aWR0aDogMjVweDtcbn1cblxuLmJhcmJlbGwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIG1pbi13aWR0aDogMjVweDtcbn1cblxuLmxvYWRpbmctcGluLWJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGluZy1waW4tZ3JhcGhpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDNweCA1MHB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9hZGluZy1waW4tdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubG9hZGluZy1waW4tY29udGFpbmVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogbm9uZTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG4ubG9hZGluZy1waW4tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diagram',
                templateUrl: './diagram.component.html',
                styleUrls: ['./diagram.component.scss']
            }]
    }], function () { return []; }, { barType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emptyBarWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], requiredWeights: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/instagrambox/instagrambox.component.ts":
/*!********************************************************!*\
  !*** ./src/app/instagrambox/instagrambox.component.ts ***!
  \********************************************************/
/*! exports provided: InstagramboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramboxComponent", function() { return InstagramboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InstagramboxComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstagramboxComponent.ɵfac = function InstagramboxComponent_Factory(t) { return new (t || InstagramboxComponent)(); };
InstagramboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstagramboxComponent, selectors: [["app-instagrambox"]], decls: 0, vars: 0, template: function InstagramboxComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhZ3JhbWJveC9pbnN0YWdyYW1ib3guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstagramboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instagrambox',
                templateUrl: './instagrambox.component.html',
                styleUrls: ['./instagrambox.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/metric-calculator/metric-calculator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/metric-calculator/metric-calculator.component.ts ***!
  \******************************************************************/
/*! exports provided: MetricCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricCalculatorComponent", function() { return MetricCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _calculator_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calculator/diagram/diagram.component */ "./src/app/calculator/diagram/diagram.component.ts");





class MetricCalculatorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.barDefaultWeights = [
            20,
            2.5,
            5
        ];
        this.barType = 0;
        this.emptyBarWeight = 20;
        this.targetWeight = 20;
        this.barWidth = 25;
        this.requiredWeights = [];
        this.weightStep = 2;
        this.defaultPlates = [
            { value: 25, quantity: 10, plateColor: "#FF9999" },
            { value: 20, quantity: 10, plateColor: "#588dff" },
            { value: 15, quantity: 2, plateColor: "#FFFF99" },
            { value: 10, quantity: 2, plateColor: "#7FBF7F" },
            { value: 5, quantity: 4, plateColor: "#FFF" },
            { value: 2.5, quantity: 2, plateColor: "#FFC0CB" }
        ];
        this.plates = this.defaultPlates;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
    setBarType(barTypeId) {
        this.barType = barTypeId;
        switch (barTypeId) {
            case 0: {
                this.plates = Object.assign([], this.defaultPlates);
                this.weightStep = 2;
                this.emptyBarWeight = this.barDefaultWeights[0];
                break;
            }
            case 1: {
                this.emptyBarWeight = this.barDefaultWeights[1];
                this.weightStep = 4;
                this.plates = Object.assign([], [
                    { value: 25, quantity: 0, plateColor: "#FF9999" },
                    { value: 20, quantity: 0, plateColor: "#588dff" },
                    { value: 15, quantity: 4, plateColor: "#FFFF99" },
                    { value: 10, quantity: 8, plateColor: "#7FBF7F" },
                    { value: 5, quantity: 10, plateColor: "#FFF" },
                    { value: 2.5, quantity: 10, plateColor: "#FFC0CB" },
                ]);
                break;
            }
            case 2: {
                this.plates = Object.assign([], this.defaultPlates);
                this.weightStep = 1;
                this.emptyBarWeight = this.barDefaultWeights[2];
                break;
            }
        }
        this.targetWeight = this.emptyBarWeight;
    }
    getTotalWeight() {
        var totalWeight = this.emptyBarWeight;
        if (this.barType === 1) {
            this.plates.forEach(function (weight) {
                totalWeight += weight.value * (weight.quantity / 2);
            });
        }
        else {
            this.plates.forEach(function (weight) {
                totalWeight += weight.value * weight.quantity;
            });
        }
        return totalWeight;
    }
    calculateRequiredPlates() {
        switch (this.barType) {
            case 0: {
                this.requiredWeights = this.calculateRequiredPlatesBarbell(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
            case 1: {
                this.requiredWeights = this.calculateRequiredPlatesDumbbells(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
            case 2: {
                this.requiredWeights = this.calculateRequiredPlatesLoadingPin(this.plates, this.targetWeight, this.emptyBarWeight);
                break;
            }
        }
        return this.requiredWeights;
    }
    calculateRequiredPlatesBarbell(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Round down single plates to make plate pairs */
            if (weight.quantity % 2 != 0) {
                weight.quantity--;
            }
            /* Skip empty plate and plates that don't have any pairs */
            if (weight.quantity < 2) {
                return;
            }
            var platePairs = weight.quantity / 2;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 4 plates don't exceed requiredWeightPlateTotal */
                if (weight.value * 2 <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= (weight.value * 2);
                }
            }
        });
        return requiredWeights;
    }
    calculateRequiredPlatesDumbbells(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Round down 1-3 plates to make plate quads */
            if (weight.quantity % 4 != 0) {
                weight.quantity--;
                if (weight.quantity % 4 != 0) {
                    weight.quantity--;
                    if (weight.quantity % 4 != 0) {
                        weight.quantity--;
                    }
                }
            }
            /* Skip empty plate and plates that don't have any pairs */
            if (weight.quantity < 4) {
                return;
            }
            var platePairs = weight.quantity / 4;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
                if (weight.value * 2 <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= (weight.value * 2);
                }
            }
        });
        return requiredWeights;
    }
    calculateRequiredPlatesLoadingPin(weights, targetWeight, barbellWeight) {
        var requiredWeights = [];
        /* Subtract bar weight from desired weight. */
        var requiredWeightPlateTotal = targetWeight - barbellWeight;
        /* Loop over weights to build up weight per side */
        weights.sort((a, b) => (a.value < b.value) ? 1 : -1);
        weights.forEach(weight => {
            /* Skip empty plate */
            if (weight.quantity === 0) {
                return;
            }
            var platePairs = weight.quantity;
            for (let i = 0; i < platePairs; i += 1) {
                /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
                if (weight.value <= requiredWeightPlateTotal) {
                    requiredWeights.push(weight);
                    requiredWeightPlateTotal -= weight.value;
                }
            }
        });
        return requiredWeights;
    }
    generateRequiredPlatesString() {
        this.requiredWeights = this.calculateRequiredPlates();
        return this.getRequiredPlatesString();
    }
    getRequiredPlatesString() {
        this.calculateRequiredPlates();
        var outputString = "";
        switch (this.barType) {
            case 0: {
                outputString = this.generateBarbellPlatesString();
                break;
            }
            case 1: {
                outputString = this.generateDumbbellPlatesString();
                break;
            }
            case 2: {
                outputString = this.generateLoadingPinPlatesString();
                break;
            }
        }
        return "";
    }
    getBarbellPlatesCount() {
        var plateCount = [
            { weight: 45, count: 0 },
            { weight: 35, count: 0 },
            { weight: 25, count: 0 },
            { weight: 10, count: 0 },
            { weight: 5, count: 0 },
            { weight: 2.5, count: 0 },
        ];
        for (let i = 0; i <= this.requiredWeights.length - 1; i++) {
            plateCount.forEach(plate => {
                if (plate.weight === this.requiredWeights[i].value) {
                    plate.count++;
                }
            });
        }
        plateCount.filter(plate => plate.count != 0);
        return plateCount;
    }
    generateBarbellPlatesString() {
        /* Return string of plates in order */
        var outputString = "";
        var plateCount = this.getBarbellPlatesCount();
        plateCount.reverse().forEach(plate => {
            if (plate.count > 0) {
                outputString = outputString + plate.weight + "(x" + plate.count + ") - ";
            }
        });
        outputString = outputString + " | Barbell " + this.emptyBarWeight + "kg | ";
        plateCount.reverse().forEach(plate => {
            if (plate.count > 0) {
                outputString = outputString + " - " + plate.weight + "(x" + plate.count + ")";
            }
        });
        return outputString;
    }
    generateDumbbellPlatesString() {
        return "";
    }
    generateLoadingPinPlatesString() {
        return "";
    }
    getPlateColor(plate) {
        return plate.plateColor;
    }
}
MetricCalculatorComponent.ɵfac = function MetricCalculatorComponent_Factory(t) { return new (t || MetricCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MetricCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetricCalculatorComponent, selectors: [["app-metric-calculator"]], decls: 57, vars: 30, consts: [[1, "container"], [1, "unit-container"], ["routerLink", "/", "routerLinkActive", "active", 1, "bartype-button", "bartype-active"], [1, "bartype-button-container"], [1, "bartype-button", 3, "click"], ["for", "barweight"], ["type", "number", "id", "barweight", "step", "5", "min", "0", "max", "1000", 1, "weight-input", 3, "ngModel", "ngModelChange"], [1, "plate-inventory"], ["for", "fortyfive"], ["type", "number", "id", "fortyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "thirtyfive"], ["type", "number", "id", "thirtyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "twentyfive"], ["type", "number", "id", "twentyfive", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "ten"], ["type", "number", "id", "ten", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "five"], ["type", "number", "id", "five", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "twoandahalf"], ["type", "number", "id", "twoandahalf", "min", "0", "max", "20", 1, "weight-input", 3, "ngModel", "step", "ngModelChange"], ["for", "target"], ["type", "number", "id", "target-input", "name", "target-input", "step", "5", 3, "ngModel", "min", "max", "ngModelChange"], ["type", "range", "id", "target", "name", "target", "step", "5", "required", "", 1, "slider", 3, "ngModel", "min", "max", "ngModelChange"], [3, "barType", "emptyBarWeight", "requiredWeights"], [1, "centered", "plate-string"]], template: function MetricCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bar Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetricCalculatorComponent_Template_div_click_7_listener() { return ctx.setBarType(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Barbell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetricCalculatorComponent_Template_div_click_9_listener() { return ctx.setBarType(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dumbbells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MetricCalculatorComponent_Template_div_click_11_listener() { return ctx.setBarType(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plate Inventory:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Empty Bar Weight: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.emptyBarWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "kgs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "25kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_23_listener($event) { return ctx.plates[0].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "20kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.plates[1].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "15kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_31_listener($event) { return ctx.plates[2].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "10kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_35_listener($event) { return ctx.plates[3].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_39_listener($event) { return ctx.plates[4].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2.5kgs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_43_listener($event) { return ctx.plates[5].quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Target Weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Desired Weight on Bar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_48_listener($event) { return ctx.targetWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "kgs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MetricCalculatorComponent_Template_input_ngModelChange_50_listener($event) { return ctx.targetWeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-diagram", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bartype-active", ctx.barType === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[0].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[1].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[2].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[3].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[4].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", ctx.weightStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.plates[5].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.getTotalWeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.emptyBarWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.getTotalWeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight Plate Output: ", ctx.targetWeight, "kgs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("barType", ctx.barType)("emptyBarWeight", ctx.emptyBarWeight)("requiredWeights", ctx.requiredWeights);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getRequiredPlatesString());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _calculator_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_3__["DiagramComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.unit-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  max-width: 100%;\n}\n\n.bartype-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: lightgray;\n  padding: 0.3em 0.8em;\n  margin: 0.5em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n}\n\n.bartype-active[_ngcontent-%COMP%] {\n  background-color: #e94985;\n  color: white;\n}\n\n.weight-input[_ngcontent-%COMP%] {\n  width: 2.5em;\n}\n\n#target-input[_ngcontent-%COMP%] {\n  width: 3.25em;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.plate-inventory[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table-row;\n  list-style: none;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.plate-inventory[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.plate-string[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n@media screen and (max-device-width: 980px) {\n  .bartype-button[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 0.5em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0cmljLWNhbGN1bGF0b3IvQzpcXFVzZXJzXFxkYnljelxcQW5ndWxhclxccGxhdGUtbWF0aC9zcmNcXGFwcFxcbWV0cmljLWNhbGN1bGF0b3JcXG1ldHJpYy1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXRyaWMtY2FsY3VsYXRvci9tZXRyaWMtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURHSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURHUTtFQUNJLG1CQUFBO0FDRFo7O0FESVE7RUFDSSxtQkFBQTtBQ0ZaOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUNKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWV0cmljLWNhbGN1bGF0b3IvbWV0cmljLWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udW5pdC1jb250YWluZXIge1xyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmJhcnR5cGUtYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogLjNlbSAuOGVtO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYXJ0eXBlLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA3MywgMTMzKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndlaWdodC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbn1cclxuXHJcbiN0YXJnZXQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDMuMjVlbTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBsYXRlLWludmVudG9yeSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGF0ZS1zdHJpbmcge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk4MHB4KSB7XHJcbiAgICAuYmFydHlwZS1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtIGF1dG87XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi51bml0LWNvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iYXJ0eXBlLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xuICBtYXJnaW46IDAuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFydHlwZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk0OTg1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWlnaHQtaW5wdXQge1xuICB3aWR0aDogMi41ZW07XG59XG5cbiN0YXJnZXQtaW5wdXQge1xuICB3aWR0aDogMy4yNWVtO1xufVxuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wbGF0ZS1pbnZlbnRvcnkge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5wbGF0ZS1pbnZlbnRvcnkgbGkge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucGxhdGUtaW52ZW50b3J5IGxpIGxhYmVsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5wbGF0ZS1pbnZlbnRvcnkgbGkgaW5wdXQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ucGxhdGUtc3RyaW5nIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5ODBweCkge1xuICAuYmFydHlwZS1idXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetricCalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-metric-calculator',
                templateUrl: './metric-calculator.component.html',
                styleUrls: ['./metric-calculator.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


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
const environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dbycz\Angular\plate-math\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map