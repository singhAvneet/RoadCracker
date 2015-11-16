var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imageString) {
            _super.call(this, atlas, imageString);
            this._width = this.getBounds().width;
            this._heigth = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._heigth * 0.5;
            this._position = new createjs.Point(this.x, this.y);
            this._isColliding = false;
            this.objectName = imageString;
        }
        GameObject.prototype.getPosition = function () {
            var position = new createjs.Point(this.x, this.y);
            return position;
        };
        GameObject.prototype.getHalfHeigth = function () {
            return this._heigth * 0.5;
        };
        GameObject.prototype.getCollision = function () {
            return this._isColliding;
        };
        GameObject.prototype.setCollision = function (isCollided) {
            this._isColliding = isCollided;
        };
        GameObject.prototype.getObjectName = function () {
            return this.objectName;
        };
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map