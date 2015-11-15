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
        /*_levelLabel: objects.Label;
        _backButton: objects.Button;
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
            this._ocean = new objects.ocean();
            this.addChild(this._ocean);
            this._track = new objects.track();
            this.addChild(this._track);
            this._trucks[0] = new objects.truck("truck1");
            this.addChild(this._trucks[0]);
            this._trucks[1] = new objects.truck("truck2");
            this.addChild(this._trucks[1]);
            this._coins = new objects.coins();
            this.addChild(this._coins);
            this._fuel = new objects.fuel();
            this.addChild(this._fuel);
            this._car = new objects.car();
            this.addChild(this._car);
            stage.addChild(this);
            /*
                        // level label
                        this._levelLabel = new objects.Label("Game Play", "60px Consolas", "#000000", 320, 240);
                        this.addChild(this._levelLabel); // add label to the stage
            
                        // back button
                        this._backButton = new objects.Button("BackButton", 220, 340);
                        this._backButton.on("click", this._clickBackButton, this); // event listener
                        this.addChild(this._backButton);
            
                            // next button
                        this._nextButton = new objects.Button("NextButton", 420, 340);
                        this._nextButton.on("click", this._clickNextButton, this); // event listener
                        this.addChild(this._nextButton);
                        */
        };
        Game.prototype._distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Game.prototype._checkCollision = function (object) {
            if (this._distance(this._car.getPosition(), object.getPosition()) < (this._car.getHalfHeigth() + object.getHalfHeigth())) {
                if (!this._car.getCollision()) {
                    console.log("ddd");
                    this._car.setCollision(true);
                }
                else
                    this._car.setCollision(false);
            }
        };
        Game.prototype.update = function () {
            this._ocean.update();
            this._track.update();
            if (Math.floor(Math.random() * 10) == 2)
                this._trucks[0].update();
            else
                this._trucks[1].update();
            this._coins.update();
            this._fuel.update();
            this._car.update();
            this._checkCollision(this._coins);
            /*
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickBackButton(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
        }

        // Callback function / Event Handler for Next Button Click
        private _clickNextButton(event: createjs.MouseEvent): void {
            changeState(config.OVER_STATE);
        }
        */
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map