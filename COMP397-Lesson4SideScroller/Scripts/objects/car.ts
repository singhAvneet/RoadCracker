module objects {
    export class car extends objects.GameObject {
        private _engineSound : createjs.AbstractSoundInstance;
        constructor() {
            super("car");
            this.y = 380;
           this._engineSound= createjs.Sound.play("engine",0,0,0,-1,1,0);
        }

        public update(): void {
            if (200 < stage.mouseX && stage.mouseX < 450)
            this.x = stage.mouseX;

        }
       public destroy():void {
           this._engineSound.stop();
         //   game.removeChild();
        }
    }
}