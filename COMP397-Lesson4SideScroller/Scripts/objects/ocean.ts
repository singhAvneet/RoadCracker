module objects {
    export class ocean extends createjs.Bitmap {
        private dy: number;
        constructor() {
            super(assets.getResult("ocean"));
            this.dy = 5;
            this.reset();

        }
        public update(): void {
            this.y += this.dy;
            this.checkbound();

        }
        private reset(): void {
            this.y = -960;
        }
        private checkbound(): void {
            if (this.y >= 0)
                this.reset();
        }

    }


} 