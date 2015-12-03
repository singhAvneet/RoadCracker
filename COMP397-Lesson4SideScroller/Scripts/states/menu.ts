module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _helloLabel: objects.Label;
        _startButton: objects.Button;
        _instructionButton: objects.Button;
     //   _startButton: createjs.Bitmap;
        welcomeImage: createjs.Bitmap;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            this.welcomeImage = new createjs.Bitmap(assets.getResult("welcome"));
            this.addChild(this.welcomeImage);
           
            
            this._helloLabel = new objects.Label("Speed Racer", "50px" +  config.FONT_FAMILY, config.FONT_COLOR, 320, 248,true);
            this.addChild(this._helloLabel); // add label to the stage

            this._instructionButton = new objects.Button("instructionButton", 320, 290)
            this._instructionButton.on("click", this._instructionClick, this); // event listener
            this.addChild(this._instructionButton);
            // start button
           this._startButton = new objects.Button("StartButton", 320, 340);
       //     this._startButton = new createjs.Bitmap("START");
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("yay"); // activate static class play 
            changeState(config.PLAY_STATE);
        }
        private _instructionClick(event: createjs.MouseEvent): void {
            changeState(config.INSTRUCTION_STATE);

        }

    }


}