var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var gun = (function (_super) {
        __extends(gun, _super);
        function gun(yaxis) {
            _super.call(this, "gun");
            this.y = yaxis;
            this.x = 630;
        }
        gun.prototype.update = function (yaxis) {
            this.y = yaxis;
        };
        return gun;
    })(objects.GameObject);
    objects.gun = gun;
})(objects || (objects = {}));
//# sourceMappingURL=gun.js.map