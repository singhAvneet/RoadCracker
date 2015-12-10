var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this._blast = new objects.collision("collision");
        }
        Collision.prototype.update = function (_player, object2) {
            this._checkCollision(_player, object2);
        };
        Collision.prototype._distance = function (p1, p2) {
            this._p1 = p1;
            this._p2 = p2;
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Collision.prototype._checkCollision = function (_player, object2) {
            if (this._distance(_player.getPosition(), object2.getPosition()) < (object2.getHalfHeigth()) + (_player.getHalfHeigth()) * 0.17) {
                if (!object2.getCollision()) {
                    switch (object2.getObjectName()) {
                        case "coins":
                            scoreboard.removeLives(2);
                            scoreboard.removescore(50);
                            //  createjs.Sound.play("coin");
                            // this._tile1 = new createjs.Bitmap(assets.getResult("collision"));
                            // game._tile1 = new objects.Scene("collision");
                            // game2.addChild(this._tile1);
                            if (state === 1) {
                                game.removeChild(object2);
                            }
                            else if (state === 2)
                                game2.removeChild(object2);
                            else
                                game3.removeChild(object2);
                            break;
                        case "truck1":
                            createjs.Sound.play("blast");
                            scoreboard.removescore(50);
                            scoreboard.removeLives(1);
                            object2.rst();
                            carblast.update1(this._p2);
                            game.addChild(carblast);
                            carblast.reset();
                            break;
                        case "fuel":
                            scoreboard.addLives(2);
                            if (state === 1) {
                                game.removeChild(object2);
                            }
                            else if (state === 2)
                                game2.removeChild(object2);
                            else
                                game3.removeChild(object2);
                            break;
                        case "truck2":
                            createjs.Sound.play("blast");
                            if (_player.getObjectName() == "car") {
                                object2.rst();
                                carblast.update1(this._p2);
                                game.addChild(carblast);
                                carblast.reset();
                            }
                            else {
                                object2.rst();
                                _player.rst();
                            }
                            scoreboard.removeLives(1);
                            break;
                    }
                    object2.setCollision(true);
                }
                else {
                    scoreboard.addScore(50);
                    object2.setCollision(false);
                }
            }
        };
        Collision.prototype._Truckcollision = function (truck1, truck2, blast) {
            //  if (this._distance(truck1.getX(), truck2.getPosition()))
            if (this._distance(truck1.getPosition(), truck2.getPosition()) < (truck2.getHalfHeigth()) + (truck2.getHalfHeigth()) * 0.27) {
                //  truck1.rst1(this._p1,this._p2);
                // truck2.rst1(this._p1, this._p2
                this._p1.x = truck1.getPosition().x;
                this._p1.y = truck2.getPosition().y;
                //     blast = new objects.collision("collision");
                //  game.addChild(blast);
                //blast.update(truck1.getPosition());
                TruckCollided1 = true;
                truck1.rst();
                truck2.rst1();
            }
            return this._p1;
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map