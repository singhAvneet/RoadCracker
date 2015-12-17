module objects {
    export class bullet extends objects.GameObject {
        private _engineSound: createjs.AbstractSoundInstance;
        private _yaxsis: number;
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
        public reset(yaxsis: number): void {
            this._yaxsis = yaxsis;
            this.y = yaxsis;
            this.x = 620;
        }
        private checkbound(): void {
            if (this.x <= 200 )
                this.reset(this._yaxsis);
        }
    }
}