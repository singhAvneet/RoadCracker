module objects {
    export class bullet extends objects.GameObject {
        private _engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super("bullet1");
            this.y = 280;
            this.x = 620;
        }

        public update(): void {
            this.x -= 1;
            this.y += 0.5;
            this.checkbound();

        }
        public reset(): void {
          
        }
        private checkbound(): void {
            if (this.x >= 480 )
                this.reset();
        }
    }
}