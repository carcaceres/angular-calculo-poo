"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var figura_1 = require("../model/figura");
var Rectangulo = (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Rectangulo.prototype, "base", {
        get: function () {
            return this._base;
        },
        set: function (base) {
            this._base = base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "altura", {
        get: function () {
            return this._base;
        },
        set: function (base) {
            this._base = base;
        },
        enumerable: true,
        configurable: true
    });
    Rectangulo.prototype.area = function () {
        return this.base * this._altura;
    };
    return Rectangulo;
}(figura_1.Figura));
exports.Rectangulo = Rectangulo;
//# sourceMappingURL=rectangulo.js.map