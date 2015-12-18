module states {
    // OVER CLASS
    export class Over extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _backButton: objects.Button;
        endingScreen: createjs.Bitmap;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            this.endingScreen = new createjs.Bitmap(assets.getResult("ending"));
            this.addChild(this.endingScreen);

            // level label
            if (state === 3 && winning) {
                this._levelLabel = new objects.Label("You Won", "60px" + config.FONT_FAMILY, config.FONT_COLOR, 320, 240, true);
                this.addChild(this._levelLabel);
            }
            else {
                this._levelLabel = new objects.Label("Game Over", "60px" + config.FONT_FAMILY, config.FONT_COLOR, 320, 240, true);
                this.addChild(this._levelLabel); // add label to the stage
            }
            this._levelLabel = new objects.Label("Your Total Score :"+scoreboard.getScore(), "60px" + config.FONT_FAMILY, config.FONT_COLOR, 320, 340, true);
            this.addChild(this._levelLabel); // add label to the stage
            this.addChild(this._levelLabel);
            this._backButton = new objects.Button("BackButton", 320, 340);
            this._backButton.on("click", this._clickBackButton, this); // event listener
            this.addChild(this._backButton);

            stage.addChild(this);

        }


        public update(): void {
            //this._levelLabel.rotation += 5;
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickBackButton(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
           
        }


    }


}  