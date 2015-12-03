var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var ground = (function (_super) {
        __extends(ground, _super);
        function ground() {
            _super.call(this, assets.getResult("ground"));
            this.dy = 5;
            this.reset();
        }
        ground.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        ground.prototype.reset = function () {
            this.y = -960;
        };
        ground.prototype.checkbound = function () {
            if (this.y >= 0)
                this.reset();
        };
        return ground;
    })(createjs.Bitmap);
    objects.ground = ground;
})(objects || (objects = {}));
//# sourceMappingURL=ground.js.map