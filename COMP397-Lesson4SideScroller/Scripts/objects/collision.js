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
            this.dy = 5;
            this.reset();
        }
        collision.prototype.update = function (p) {
            this.x = p.x;
            this.y = p.y;
            /*if (this.x > 209.00 && this.x < 412) {
                this.x += this.dx;
            }
            */
            TruckCollided1 = false;
        };
        collision.prototype.update1 = function (p) {
            this.x = p.x;
            this.y = p.y;
        };
        collision.prototype.reset = function () {
            this.y += this.dy;
            if (this.y > 350) {
                game.removeChild(this);
            }
        };
        collision.prototype.checkbound = function () {
            if (this.y >= (480))
                this.reset();
        };
        return collision;
    })(objects.GameObject);
    objects.collision = collision;
})(objects || (objects = {}));
//# sourceMappingURL=collision.js.map