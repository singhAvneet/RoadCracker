module managers {
    export class Collision  {
        private coins: objects.coins;
       // private game: createjs.Container;
        private _tile1: createjs.Bitmap;

        constructor() {
         

        }

        update(_player: objects.GameObject, object2: objects.GameObject): void {
            this._checkCollision(_player, object2);
          



        }

        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));

        }
        private _checkCollision(_player: objects.GameObject, object2: objects.GameObject): void {
            if (this._distance(_player.getPosition(), object2.getPosition()) < (object2.getHalfHeigth())+(_player.getHalfHeigth())*0.17)//
            {
                if (!object2.getCollision()) {
                    switch (object2.getObjectName()) {
                        case "coins":
                            scoreboard.removeLives(2);
                            scoreboard.removescore(50);
                          //  createjs.Sound.play("coin");
                       // this._tile1 = new createjs.Bitmap(assets.getResult("collision"));
                           // game._tile1 = new objects.Scene("collision");
                           // game2.addChild(this._tile1);
                            
                   
                            if (state===1) {
                                game.removeChild(object2);
                            }
                            else
                                game2.removeChild(object2);
                            break;

                     
                        case "truck1":
                            createjs.Sound.play("blast");
                            scoreboard.removescore(50);
                            scoreboard.removeLives(1);
                            object2.rst();
                            break;
                        case "fuel":
                            scoreboard.addLives(2);
                            if (state === 1) {
                                game.removeChild(object2);
                            }
                            else
                                game2.removeChild(object2);
                           
                            break;

                        case "truck2":
                            createjs.Sound.play("blast");
                            if (_player.getObjectName() == "car")
                                object2.rst();
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


        }
        public _Truckcollision(truck1: objects.truck, truck2: objects.truck): boolean {
            if (this._distance(truck1.getPosition(), truck2.getPosition()) <
                (truck2.getHalfHeigth()) + (truck2.getHalfHeigth()))//
            {
                if (!truck2.getTCollision()) {
                   
                       //     createjs.Sound.play("blast");
                           
                          //  game.removeChild(truck2);  
                            //game.removeChild(truck1);
                         //   truck1.y = -80;
                    truck1.reset();
                    truck2.reset();
                            //stage.removeChild(truck1);
                            //stage.removeChild(truck2);
                        
                    }
                truck2.setTCollision(true);
                return true;
                }
                else {
                    
                truck2.setTCollision(false);
                return false;
                }
            }
        }
    }
