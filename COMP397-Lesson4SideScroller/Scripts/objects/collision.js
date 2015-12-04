var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var collision = (function (_super) {
        __extends(collision, _super);
        function collision(str) {
            _super.call(this, str);
            this.update();
        }
        collision.prototype.update = function () {
            this.y += 5;
            this.checkbound();
        };
        collision.prototype.reset = function () {
        };
        collision.prototype.checkbound = function () {
            if (this.y >= (480 + this._heigth))
                this.update();
        };
        return collision;
    })(objects.GameObject);
    objects.collision = collision;
})(objects || (objects = {}));
//# sourceMappingURL=collision.js.map