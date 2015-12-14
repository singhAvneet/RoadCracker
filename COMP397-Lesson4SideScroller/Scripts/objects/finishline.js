var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var finish = (function (_super) {
        __extends(finish, _super);
        function finish() {
            _super.call(this, assets.getResult("finish"));
            this.update();
        }
        finish.prototype.update = function () {
            this.y = 30;
            this.x = 70;
        };
        return finish;
    })(createjs.Bitmap);
    objects.finish = finish;
})(objects || (objects = {}));
//# sourceMappingURL=finishline.js.map