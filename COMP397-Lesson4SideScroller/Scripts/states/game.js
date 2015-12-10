var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        /*  _backButton: objects.Button;
          _nextButton: objects.Button;
          */
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
            // private _truck: objects.truck;
            this._trucks = [];
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            TruckCollided1 = false;
            scoreboard.setLives(15);
            scoreboard.setScore(100);
            this._nextButton = new objects.Button("NextButton", 420, 440);
            stage.addChild(this);
            this._ocean = new objects.ocean();
            this.addChild(this._ocean);
            this._track = new objects.track();
            this.addChild(this._track);
            this._trucks[0] = new objects.truck("truck1");
            this.addChild(this._trucks[0]);
            this._smallCar = new objects.smallCar();
            this.addChild(this._smallCar);
            this._trucks[1] = new objects.truck("truck2");
            this.addChild(this._trucks[1]);
            this._car = new objects.car();
            this.addChild(this._car);
            this._coins = new objects.coins("coins");
            this.addChild(this._coins);
            this._fuel = new objects.fuel();
            this.addChild(this._fuel);
            blast = new objects.collision("collision");
            this.addChild(blast);
            carblast = new objects.collision("collision");
            this.addChild(carblast);
            this._scoreLabel = new objects.Label("Score: ", "40px " + config.FONT_FAMILY, config.FONT_COLOR, 5, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: ", "40px " + config.FONT_FAMILY, config.FONT_COLOR, 350, 5, false);
            this.addChild(this._livesLabel);
            this._collision = new managers.Collision();
            stage.addChild(this);
            /*   // next button
                        this._nextButton = new objects.Button("NextButton", 420, 340);
                        this._nextButton.on("click", this._clickNextButton, this); // event listener
                        this.addChild(this._nextButton);
                        */
        };
        Game.prototype.update = function () {
            if (TruckCollided1) {
                blast.update(p1);
                this.addChild(blast);
            }
            blast.reset();
            carblast.reset();
            //   this.addChild(this._trucks[0]);
            //  this.addChild(this._trucks[1]);
            if (scoreboard.getLives() < 10 || scoreboard.getScore() < 100) {
                this.addChild(this._coins);
                this.addChild(this._fuel);
            }
            this._ocean.update();
            this._track.update();
            this._trucks[1].update();
            this._trucks[0].update();
            /*
            if (Math.floor(Math.random() * 7) === 2) {
                this._trucks[0].update();
            }
            else {
                this._trucks[1].update();
            }

              if(scoreboard.getScore()>1000)
            if (Math.floor(Math.random() * 3) === 2) {
                this._trucks[1].update();
            }
            else {
                this._trucks[0].update();
            }
            */
            this._coins.update();
            this._fuel.update();
            this._car.update();
            this._smallCar.update();
            p1 = this._collision._Truckcollision(this._trucks[0], this._trucks[1], blast);
            this._collision.update(this._car, this._trucks[1]);
            this._collision.update(this._car, this._trucks[0]);
            this._collision.update(this._car, this._coins);
            this._collision.update(this._car, this._fuel);
            //   this._collision.update(this._trucks[0], this._trucks[1]);
            /*
        // Callback function / Event Handler for Next Button Click
        private _clickNextButton(event: createjs.MouseEvent): void {
            changeState(config.OVER_STATE);
        }
        */
            this.updateScore();
            if (this._smallCar.gety() < 0) {
                this._car.destroy();
                this._nextButton.on("click", this._clickNextButton, this); // event listener
                this.addChild(this._nextButton);
                stage.addChild(this);
            }
            if (scoreboard.getLives() <= -1) {
                this._car.destroy();
                this.removeAllChildren();
                changeState(config.OVER_STATE);
            }
        };
        Game.prototype.updateScore = function () {
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
        };
        Game.prototype._clickNextButton = function (event) {
            changeState(config.PLAY_STATE2);
            this.removeAllChildren();
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map