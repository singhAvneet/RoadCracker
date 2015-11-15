var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var ocean = (function (_super) {
        __extends(ocean, _super);
        function ocean() {
            _super.call(this, assets.getResult("ocean"));
            this.dy = 5;
            this.reset();
        }
        ocean.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        ocean.prototype.reset = function () {
            this.y = -960;
        };
        ocean.prototype.checkbound = function () {
            if (this.y >= 0)
                this.reset();
        };
        return ocean;
    })(createjs.Bitmap);
    objects.ocean = ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map