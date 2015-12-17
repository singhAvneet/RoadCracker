var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var game3 = (function (_super) {
        __extends(game3, _super);
        /*  _backButton: objects.Button;
          _nextButton: objects.Button;
          */
        // CONSTRUCTOR
        function game3() {
            _super.call(this);
            // private _truck: objects.truck;
            this._trucks = [];
        }
        // PUBLIC METHODS
        game3.prototype.start = function () {
            state = 3;
            scoreboard.setLives(15);
            scoreboard.setScore(100);
            this._nextButton = new objects.Button("NextButton", 420, 440);
            this.TruckCollided = false;
            this._desert = new objects.desert();
            this.addChild(this._desert);
            this._trucks[0] = new objects.truck("truck1");
            this.addChild(this._trucks[0]);
            this._smallCar = new objects.smallCar();
            this.addChild(this._smallCar);
            this._gun = new objects.gun(300);
            this.addChild(this._gun);
            this._bullet = new objects.bullet();
            this.addChild(this._bullet);
            this._trucks[1] = new objects.truck("truck2");
            this.addChild(this._trucks[1]);
            this._car = new objects.car();
            this.addChild(this._car);
            this._coins = new objects.coins("coins");
            this.addChild(this._coins);
            this._fuel = new objects.fuel();
            this.addChild(this._fuel);
            this._scoreLabel = new objects.Label("Score: ", "40px " + config.FONT_FAMILY, config.FONT_COLOR, 5, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: ", "40px " + config.FONT_FAMILY, config.FONT_COLOR, 350, 5, false);
            this.addChild(this._livesLabel);
            this._collision = new managers.Collision();
            stage.addChild(this);
            /*                // next button
                        this._nextButton = new objects.Button("NextButton", 420, 340);
                        this._nextButton.on("click", this._clickNextButton, this); // event listener
                        this.addChild(this._nextButton);
                        */
        };
        game3.prototype.update = function () {
            this._desert.update();
            this.addChild(this._trucks[0]);
            this.addChild(this._trucks[1]);
            if (scoreboard.getLives() < 10 || scoreboard.getScore() < 100) {
                this.addChild(this._coins);
                this.addChild(this._fuel);
            }
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
            this._bullet.update();
            this._collision.update(this._car, this._trucks[1]);
            this._collision.update(this._car, this._trucks[0]);
            this._collision.update(this._car, this._coins);
            this._collision.update(this._car, this._fuel);
            this._collision.update(this._trucks[0], this._trucks[1]);
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
                //  currentState = constants.GAME_OVER_STATE;
                changeState(config.OVER_STATE);
            }
        };
        game3.prototype.updateScore = function () {
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
        };
        game3.prototype._clickNextButton = function (event) {
            changeState(config.OVER_STATE);
            this.removeAllChildren();
        };
        return game3;
    })(objects.Scene);
    states.game3 = game3;
})(states || (states = {}));
//# sourceMappingURL=game3.js.map