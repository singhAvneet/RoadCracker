var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var car = (function (_super) {
        __extends(car, _super);
        function car() {
            _super.call(this, "car");
            this.y = 380;
            this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
        }
        car.prototype.update = function () {
            if (200 < stage.mouseX && stage.mouseX < 450)
                this.x = stage.mouseX;
        };
        car.prototype.destroy = function () {
            this._engineSound.stop();
            //   game.removeChild();
        };
        return car;
    })(objects.GameObject);
    objects.car = car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map