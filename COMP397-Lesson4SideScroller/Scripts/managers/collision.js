var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
        }
        Collision.prototype.update = function (_player, object2) {
            this._checkCollision(_player, object2);
        };
        Collision.prototype._distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Collision.prototype._checkCollision = function (_player, object2) {
            if (this._distance(_player.getPosition(), object2.getPosition()) < (object2.getHalfHeigth())) {
                if (!object2.getCollision()) {
                    switch (object2.getObjectName()) {
                        case "coins":
                            scoreboard.removeLives(2);
                            createjs.Sound.play("coin");
                            game.removeChild(object2);
                            break;
                        case "truck2":
                            createjs.Sound.play("blast");
                            scoreboard.removescore(50);
                            scoreboard.removeLives(1);
                            //stage.removeChild(object2);    
                            break;
                        case "truck1":
                            createjs.Sound.play("blast");
                            scoreboard.removescore(50);
                            scoreboard.removeLives(1);
                            break;
                        case "fuel":
                            scoreboard.addLives(2);
                            //    scoreboard.addScore(50);
                            console.log("fuel");
                            game.removeChild(object2);
                            break;
                    }
                    object2.setCollision(true);
                }
                else {
                    scoreboard.addScore(1);
                    object2.setCollision(false);
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map