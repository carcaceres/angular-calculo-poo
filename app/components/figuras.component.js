"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var calculo_service_1 = require('../servicio/calculo.service');
var FigurasComponent = (function () {
    function FigurasComponent(_servicio) {
        this._servicio = _servicio;
        this.radio = 44;
        this.areaCirculo();
        this.base = 100;
        this.altura = 50;
    }
    FigurasComponent.prototype.areaCirculo = function () {
        this.areaC = this._servicio.getAreaCirculo(this.radio);
    };
    FigurasComponent.prototype.areaRectangulo = function () {
        this.areaR = this._servicio.getAreaRectangulo(this.base, this.altura);
    };
    FigurasComponent = __decorate([
        core_1.Component({
            selector: 'figura-componente',
            templateUrl: "app/vista/calculo.html",
            providers: [calculo_service_1.CalculoServicio]
        }), 
        __metadata('design:paramtypes', [calculo_service_1.CalculoServicio])
    ], FigurasComponent);
    return FigurasComponent;
}());
exports.FigurasComponent = FigurasComponent;
//# sourceMappingURL=figuras.component.js.map