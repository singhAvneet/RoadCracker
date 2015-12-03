module objects {
    export class fuel extends objects.GameObject {
        private dy: number;
        constructor() {
            super("fuel");
            this.dy = 5;
            this.reset();

        }
        public update(): void {
            this.y += this.dy;
            this.checkbound();

        }
        private reset(): void {
            this.x = Math.floor((Math.random() * 280) + 200);
            this.y = -this._heigth;
        }
        private checkbound(): void {
            if (this.y >= (480 + this._heigth))
                this.reset();
        }
        public destroy(): void {

            game.removeChild();
        }

    }


} 