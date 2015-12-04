var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var desert = (function (_super) {
        __extends(desert, _super);
        function desert() {
            _super.call(this, assets.getResult("desert"));
            this.dy = 5;
            this.reset();
        }
        desert.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        desert.prototype.reset = function () {
            this.y = -960;
        };
        desert.prototype.checkbound = function () {
            if (this.y >= 0)
                this.reset();
        };
        return desert;
    })(createjs.Bitmap);
    objects.desert = desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map