module states {
    // MENU CLASS
    export class instruction extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _helloLabel: objects.Label;
        _BACKButton: objects.Button;
        //   _startButton: createjs.Bitmap;
        INSTRUCTIONImage: createjs.Bitmap;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            this.INSTRUCTIONImage = new createjs.Bitmap(assets.getResult("instruction"));
            this.addChild(this.INSTRUCTIONImage);

            
            this._helloLabel = new objects.Label("Speed Racer", "50px" + config.FONT_FAMILY, config.FONT_COLOR, 320, 248, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label("Speed Racer2", "50px" + config.FONT_FAMILY, config.FONT_COLOR, 320, 148, true);
            this.addChild(this._helloLabel); // add label to the stage
            
            // start button*/
            this._BACKButton = new objects.Button("BackButton", 420, 440);
            //     this._startButton = new createjs.Bitmap("START");
            this._BACKButton.on("click", this._clickbACKButton, this); // event listener
            this.addChild(this._BACKButton);

            stage.addChild(this);
        }

              
        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickbACKButton(event: createjs.MouseEvent): void {
           
            changeState(config.MENU_STATE);
            this.removeAllChildren();
        }

    }


}