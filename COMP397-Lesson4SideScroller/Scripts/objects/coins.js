var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var coins = (function (_super) {
        __extends(coins, _super);
        function coins(str) {
            _super.call(this, str);
            this.dy = 5;
            this.reset();
        }
        coins.prototype.update = function () {
            this.y += this.dy;
            this.checkbound();
        };
        coins.prototype.reset = function () {
            this.x = Math.floor((Math.random() * 280) + 200);
            this.y = -this._heigth;
        };
        coins.prototype.checkbound = function () {
            if (this.y >= (480 + this._heigth))
                this.reset();
        };
        coins.prototype.destroy = function () {
            createjs.Sound.play("");
            game.removeChild();
        };
        return coins;
    })(objects.GameObject);
    objects.coins = coins;
})(objects || (objects = {}));
//# sourceMappingURL=coins.js.map