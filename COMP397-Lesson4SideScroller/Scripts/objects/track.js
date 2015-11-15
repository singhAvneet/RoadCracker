var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var track = (function (_super) {
        __extends(track, _super);
        function track() {
            _super.call(this, assets.getResult("track"));
            this.dy = 5;
            this.reset();
            this.x = 177;
        }
        track.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        track.prototype.reset = function () {
            this.y = -960;
        };
        track.prototype.checkbound = function () {
            if (this.y >= 0)
                this.reset();
        };
        return track;
    })(createjs.Bitmap);
    objects.track = track;
})(objects || (objects = {}));
//# sourceMappingURL=track.js.map