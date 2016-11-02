"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var figura_1 = require("../model/figura");
var Circulo = (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (radio) {
            this._radio = radio;
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.area = function () {
        this._PI = 3.1416;
        return this._radio * this._radio * this._PI;
    };
    return Circulo;
}(figura_1.Figura));
exports.Circulo = Circulo;
//# sourceMappingURL=circulo.js.map