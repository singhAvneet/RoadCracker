module managers {
    export class Collision  {
        
        public _p1: createjs.Point;
        private _p2: createjs.Point;
        private _blast: objects.collision;
        constructor() {
            this._blast = new objects.collision("collision"); 
        }

        update(_player: objects.GameObject, object2: objects.GameObject): void {
            this._checkCollision(_player, object2);
}
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            this._p1 = p1;
            this._p2 = p2;
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }
        private _checkCollision(_player: objects.GameObject, object2: objects.GameObject): void {
            if (this._distance(_player.getPosition(), object2.getPosition()) < (object2.getHalfHeigth())+(_player.getHalfHeigth())*0.30)
            {
                if (!object2.getCollision()) {
                    switch (object2.getObjectName()) {
                        case "coins":
                            carCollided = true;
                              createjs.Sound.play("coin");
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
                            object2.rst();
                            carblast.update1(this._p2);
                            this.addBlast();
                            carblast.reset();
                            carCollided = false;
                            break;
                        case "fuel":
                            
                            if (state == 1) {
                                game.removeChild(object2);
                            }
                            else if (state == 2)
                                game2.removeChild(object2);
                            else
                                game3.removeChild(object2);
                            scoreboard.addLives(1);
                            break;

                        case "truck2":
                            createjs.Sound.play("blast");
                            if (_player.getObjectName() == "car") {
                                object2.rst();
                                carblast.update1(this._p2);
                                this.addBlast();
                                carblast.reset();
                            } else {
                                object2.rst();
                                _player.rst();
                            }
                            carCollided = true;
                            break;
                        case "bullet1":
                            carCollided = true;  
                            createjs.Sound.play("blast");                         
                            carblast.update1(this._p2);
                            if (state == 1) {
                                game.removeChild(object2);
                            }
                            else if (state == 2) {
                                game2.removeChild(object2);
                              
                            }
                            else
                                game3.removeChild(object2);
                            this.addBlast();
                            break;
                    }
                    object2.setCollision(true);
                }
                else { 
                    object2.setCollision(false);
                }
            }

        }

        public _Truckcollision(truck1: objects.truck, truck2: objects.truck, blast:objects.collision): createjs.Point {
          //  if (this._distance(truck1.getX(), truck2.getPosition()))
            if (this._distance(truck1.getPosition(), truck2.getPosition()) < (truck1.getHalfHeigth()) + (truck2.getHalfHeigth())) {
              //  truck1.rst1(this._p1,this._p2);
               // truck2.rst1(this._p1, this._p2
                this._p1.x = truck1.getPosition().x;
                this._p1.y = truck2.getPosition().y;
                createjs.Sound.play("blast");
             //     blast = new objects.collision("collision");
                this.addBlast();
                //blast.update(truck1.getPosition());
                TruckCollided1 = true;
                truck1.rst();
                truck2.rst1();
                }
            return this._p1;
        }

        public addBlast(): void{
            if (state == 1)
                game.addChild(carblast);
            else if (state == 2)
                game2.addChild(carblast);
            else
                game3.addChild(carblast);

        }
        }
    } 
