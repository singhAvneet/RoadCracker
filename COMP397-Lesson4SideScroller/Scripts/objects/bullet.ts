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
            this.y += 0.4;
            this.checkbound();

        }
        public reset(): void {
            this.y = 280;
            this.x = 620;
        }
        private checkbound(): void {
            if (this.x <= 200 )
                this.reset();
        }
    }
}