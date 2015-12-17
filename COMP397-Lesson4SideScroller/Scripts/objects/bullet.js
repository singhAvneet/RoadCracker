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
            this.y += 0.4;
            this.checkbound();
        };
        bullet.prototype.reset = function (yaxsis) {
            this._yaxsis = yaxsis;
            this.y = yaxsis;
            this.x = 620;
        };
        bullet.prototype.checkbound = function () {
            if (this.x <= 200)
                this.reset(this._yaxsis);
        };
        return bullet;
    })(objects.GameObject);
    objects.bullet = bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map