"use strict";
var circulo_1 = require('../model/circulo');
var rectangulo_1 = require('../model/rectangulo');
var Servicio = (function () {
    function Servicio() {
        this.circulo = new circulo_1.Circulo();
        this.rectangulo = new rectangulo_1.Rectangulo();
    }
    Servicio.prototype.getAreaRectangulo = function (base, altura) {
        this.rectangulo.base = base;
        this.rectangulo.altura = altura;
        return this.rectangulo.area();
    };
    Servicio.prototype.getAreaCirculo = function (radio) {
        this.circulo.radio = radio;
        return this.circulo.area();
    };
    return Servicio;
}());
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.js.map