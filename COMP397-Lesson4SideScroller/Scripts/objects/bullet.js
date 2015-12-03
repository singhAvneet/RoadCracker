var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var bullet = (function (_super) {
        __extends(bullet, _super);
        function bullet() {
            _super.call(this, "bullet1");
            this.y = 280;
            this.x = 620;
        }
        bullet.prototype.update = function () {
            this.x -= 1;
            this.y += 0.5;
            this.checkbound();
        };
        bullet.prototype.reset = function () {
        };
        bullet.prototype.checkbound = function () {
            if (this.x >= 480)
                this.reset();
        };
        return bullet;
    })(objects.GameObject);
    objects.bullet = bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map