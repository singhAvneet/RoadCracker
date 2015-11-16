module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.ocean;
        private _track: objects.track;
       // private _truck: objects.truck;
        private _trucks: objects.truck[]=[];
        private _coins: objects.coins;
        private _fuel: objects.fuel;
        private _car: objects.car;
        private _collision: managers.Collision;
        

        _scoreLabel: objects.Label;
        _livesLabel: objects.Label;
      /*  _backButton: objects.Button;
        _nextButton: objects.Button;
        */
        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            scoreboard.setLives(15);
            scoreboard.setScore(100);

            this._ocean = new objects.ocean();
            this.addChild(this._ocean);
            
            this._track = new objects.track();
            this.addChild(this._track);
                                 
            this._trucks[0] = new objects.truck("truck1");
            this.addChild(this._trucks[0]);

            this._trucks[1] = new objects.truck("truck2");
            this.addChild(this._trucks[1]);            

            this._car = new objects.car();
            this.addChild(this._car);

            this._coins = new objects.coins("coins");
                this.addChild(this._coins);

                this._fuel = new objects.fuel();
                this.addChild(this._fuel);

            this._scoreLabel = new objects.Label("Score: ", "40px Consolas", "#FFFF00", 5, 5, false);
            this.addChild(this._scoreLabel);

            this._livesLabel = new objects.Label("Lives: ", "40px Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._livesLabel);


            this._collision = new managers.Collision();

            stage.addChild(this);

            /*                // next button
                        this._nextButton = new objects.Button("NextButton", 420, 340);
                        this._nextButton.on("click", this._clickNextButton, this); // event listener
                        this.addChild(this._nextButton);
                        */

        }

        public update(): void {
            if (scoreboard.getLives() < 10) {
                this.addChild(this._coins);
                this.addChild(this._fuel);
            }



            this._ocean.update();
            this._track.update();
            

            if (Math.floor(Math.random() * 7) === 2) {
                this._trucks[0].update();
                this._collision.update(this._car,this._trucks[0]);
            }
            else {
                this._trucks[1].update();
                this._collision.update(this._car,this._trucks[1]);
            }
            this._coins.update();
            this._fuel.update();
            this._car.update();
        
          //  this._collision.update(this._trucks[0], this._trucks[1]);
            this._collision.update(this._car, this._coins);
            this._collision.update(this._car, this._fuel);
           // this._collision.update(this._trucks[0], this._trucks[1]);
                /*
               
            // Callback function / Event Handler for Next Button Click
            private _clickNextButton(event: createjs.MouseEvent): void {
                changeState(config.OVER_STATE);
            }
            */
            this.updateScore();

            if (scoreboard.getLives() <= 1) {
                stage.removeChild(game);
                this._car.destroy();
                game.removeAllChildren();
                game.removeAllEventListeners();
                
              //  currentState = constants.GAME_OVER_STATE;
                changeState(config.OVER_STATE);
            }
        }

        private updateScore(): void {
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
        }

    }
} 