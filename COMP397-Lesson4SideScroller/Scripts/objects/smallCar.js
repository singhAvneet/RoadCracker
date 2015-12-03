var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var smallCar = (function (_super) {
        __extends(smallCar, _super);
        function smallCar() {
            _super.call(this, "SmallCar");
            this.y = 380;
            this.x = 100;
        }
        smallCar.prototype.update = function () {
            this.y -= 0.2;
        };
        smallCar.prototype.destroy = function () {
            this._engineSound.stop();
            //   game.removeChild();
        };
        smallCar.prototype.gety = function () {
            return this.y;
        };
        return smallCar;
    })(objects.GameObject);
    objects.smallCar = smallCar;
})(objects || (objects = {}));
//# sourceMappingURL=smallcar.js.map