module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _ocean: objects.ocean;
        private _track: objects.track;
        private _car: objects.car;


        /*_levelLabel: objects.Label;
        _backButton: objects.Button;
        _nextButton: objects.Button;
        */
        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            this._ocean = new objects.ocean();
            this.addChild(this._ocean);


            this._track = new objects.track();
            this.addChild(this._track);

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

        }


        public update(): void {
            this._ocean.update();
            this._track.update();
            this._car.update();
        
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
        }


    }
} 