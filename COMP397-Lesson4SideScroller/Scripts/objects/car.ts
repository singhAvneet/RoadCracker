module objects {
    export class car extends objects.GameObject {
        private _engineSound : createjs.AbstractSoundInstance;
        constructor() {
            super("car");
            this.y = 380;
            this.x = 320;
          //  this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
            if (state === 1)
                this._engineSound = createjs.Sound.play("music2", 0, 0, 0, -1, 1, 0);
            else if (state === 3)
            {
              //  this._engineSound.stop();
               // this._engineSound = createjs.Sound.play("music", 0, 0, 0, -1, 1, 0);
                }
            /*   }
        public update(): void {
            if (200 < stage.mouseX && stage.mouseX < 450)
            this.x = stage.mouseX;

        }
       public destroy():void {
           this._engineSound.stop();
           
         //   game.removeChild();
        }
    }*/

           this._assignControls();


        }
        public destroy(): void {
            this._engineSound.stop();
            //   game.removeChild();
        }
		
		/** 
		 * Update Method for Plane Class
		*/
        public update(): void {
            // for moving with keyboard
            this._controlAction();
            // for moving with mouse
            //this.x = stage.mouseX;
        }

        public engineOff(): void {
            console.log("Engine off");
            this._engineSound.destroy();
        }
		
        // Bind key actions to player events
        private _assignControls() {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        }
		
        // Switch statement to activate movement and rotation
        private _onControlDown(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.A:
                case keys.LEFT:
                    controlls.LEFT = true;
                    break;
                case keys.D:
                case keys.RIGHT:
                    controlls.RIGHT = true;
                    break;
                case keys.UP:
                    controlls.UP = true;
                    break;
                case keys.DOWN:
                    controlls.DOWN = true;
                    break;
            }
        }

        // switch statement to reset controls
        private _onControlUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.A:
                case keys.LEFT:
                    controlls.LEFT = false;
                    break;
                case keys.D:
                case keys.RIGHT:
                    controlls.RIGHT = false;
                    break;
                case keys.UP:
                    controlls.UP = false;
                    break;
                case keys.DOWN:
                    controlls.DOWN = false;
                    break;
            }
        }
		
        // Respond to player key presses
        private _controlAction() {
          
            // Execute left turn
            if (controlls.LEFT) 
                this.moveLeft();          

            // Execute right turn
            if (controlls.RIGHT) 
                this.moveRight();
            if (controlls.UP)
                this.moveUP();
            if (controlls.DOWN)
                this.moveDown();           

        }
		
        // Turn Left Method  if (200 < stage.mouseX && stage.mouseX < 450)
        public moveLeft() {
            if (state === 3 && this.x > 250)
                this.x -= 5;
            else if (state!=3&&this.x > 200)
                this.x -= 5;
        }

        public moveUP(): void {
            this.y -= 5;
        }

        public moveDown(): void {
            this.y += 5;
        }
        // Turn Right Method
        public moveRight() {
            if (state === 3 && this.x < 370)
                this.x += 5;
            else if (state!=3&&this.x < 450)
                this.x += 5;
        }
        


    }
}