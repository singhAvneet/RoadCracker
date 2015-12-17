var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var car = (function (_super) {
        __extends(car, _super);
        function car() {
            _super.call(this, "car");
            this.y = 380;
            this.x = 320;
            //  this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
            if (state === 1)
                this._engineSound = createjs.Sound.play("music2", 0, 0, 0, -1, 1, 0);
            else if (state === 3) {
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
        car.prototype.destroy = function () {
            this._engineSound.stop();
            //   game.removeChild();
        };
        /**
         * Update Method for Plane Class
        */
        car.prototype.update = function () {
            // for moving with keyboard
            this._controlAction();
            // for moving with mouse
            //this.x = stage.mouseX;
        };
        car.prototype.engineOff = function () {
            console.log("Engine off");
            this._engineSound.destroy();
        };
        // Bind key actions to player events
        car.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        car.prototype._onControlDown = function (event) {
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
        };
        // switch statement to reset controls
        car.prototype._onControlUp = function (event) {
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
        };
        // Respond to player key presses
        car.prototype._controlAction = function () {
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
        };
        // Turn Left Method  if (200 < stage.mouseX && stage.mouseX < 450)
        car.prototype.moveLeft = function () {
            if (state === 3 && this.x > 250)
                this.x -= 5;
            else if (state != 3 && this.x > 200)
                this.x -= 5;
        };
        car.prototype.moveUP = function () {
            this.y -= 5;
        };
        car.prototype.moveDown = function () {
            this.y += 5;
        };
        // Turn Right Method
        car.prototype.moveRight = function () {
            if (state === 3 && this.x < 370)
                this.x += 5;
            else if (state != 3 && this.x < 450)
                this.x += 5;
        };
        return car;
    })(objects.GameObject);
    objects.car = car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map