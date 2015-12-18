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

            
            this._helloLabel = new objects.Label("move your keyboard keys ", "20px Consolas", "#000000", 320, 248, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label("to move car right, left, up and down", "20px Consolas", "#000000", 320, 268, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label(" Press RIGHT key to move right", "30px Consolas", "#000000", 320, 148, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label(" Press LEFT key to move left", "30px Consolas", "#000000", 320, 118, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label(" Press UP key to move up", "30px Consolas", "#000000", 320, 88, true);
            this.addChild(this._helloLabel); // add label to the stage
            this._helloLabel = new objects.Label(" Press DOWN key to move down", "30px Consolas", "#000000", 320, 68, true);
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