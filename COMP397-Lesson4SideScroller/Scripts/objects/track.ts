module objects{
    export class track extends createjs.Bitmap {
        private dy: number;
        constructor(speed:number) {
            super(assets.getResult("track"));
            this.dy = speed;
            this.reset();
            this.x = 177;

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