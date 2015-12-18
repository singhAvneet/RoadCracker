var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var truck = (function (_super) {
        __extends(truck, _super);
        function truck(str) {
            _super.call(this, str);
            this.dy = 2;
            this.reset();
        }
        truck.prototype.update = function () {
            if (state === 3) {
                if (this.x < 200.00)
                    this.x += this.dx;
                else if (this.x > 250)
                    this.x -= this.dx;
            }
            else if (this.x > 209.00 && this.x < 412)
                this.x += this.dx;
            this.y += this.dy;
            this.checkbound();
        };
        truck.prototype.reset = function () {
            if (state === 3)
                this.dx = Math.floor(Math.random() * 0) + 1;
            else
                this.dx = Math.floor(Math.random() * 4) - 2;
            this.dy = Math.floor(Math.random() * 5) + 5;
            if (state === 3)
                this.x = 320;
            else
                this.x = Math.floor((Math.random() * 250) + 200);
            this.y = -this._heigth;
        };
        truck.prototype.checkbound = function () {
            if (this.y >= (480 + this._heigth))
                this.reset();
        };
        truck.prototype.setX = function () {
            this.x = 320;
        };
        return truck;
    })(objects.GameObject);
    objects.truck = truck;
})(objects || (objects = {}));
//# sourceMappingURL=truck.js.map