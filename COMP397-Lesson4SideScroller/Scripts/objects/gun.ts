module objects {
    export class gun extends objects.GameObject {
        private _engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super("gun");
            this.y = 300;
            this.x = 630;
        }

        public update(): void {
            //this.y -= 0.5;
        }
       
    }
}