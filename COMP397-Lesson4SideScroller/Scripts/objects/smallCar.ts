module objects {
    export class smallCar extends objects.GameObject {
        private _engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super("SmallCar");
            this.y = 380;
            this.x = 100;
           }

        public update(): void {
            this.y -= 1;
        }
        public destroy(): void {
            this._engineSound.stop();
           
            //   game.removeChild();
        }
        public gety(): number {
            return this.y;
        }
    }
}