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
require("rxjs/add/operator/map");
var servicio_1 = require('../model/servicio');
var CalculoServicio = (function () {
    function CalculoServicio() {
        this.servicio = new servicio_1.Servicio();
    }
    CalculoServicio.prototype.getAreaCirculo = function (radio) {
        return this.servicio.getAreaCirculo(radio);
    };
    CalculoServicio.prototype.getAreaRectangulo = function (base, altura) {
        return this.servicio.getAreaRectangulo(base, altura);
    };
    CalculoServicio = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CalculoServicio);
    return CalculoServicio;
}());
exports.CalculoServicio = CalculoServicio;
//# sourceMappingURL=calculo.service.js.map