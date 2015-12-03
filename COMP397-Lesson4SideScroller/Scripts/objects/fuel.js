var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var fuel = (function (_super) {
        __extends(fuel, _super);
        function fuel() {
            _super.call(this, "fuel");
            this.dy = 5;
            this.reset();
        }
        fuel.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        fuel.prototype.reset = function () {
            this.x = Math.floor((Math.random() * 280) + 200);
            this.y = -this._heigth;
        };
        fuel.prototype.checkbound = function () {
            if (this.y >= (480 + this._heigth))
                this.reset();
        };
        fuel.prototype.destroy = function () {
            game.removeChild();
        };
        return fuel;
    })(objects.GameObject);
    objects.fuel = fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map