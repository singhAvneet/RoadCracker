module objects {
    export class collision extends objects.GameObject {
        private dy: number;
        private dx: number;
        constructor(str:string) {
            super(str);
            this.dy = 5;
            this.reset();

        }

        public update(p:createjs.Point): void {

            this.x = p.x;
            this.y = p.y;

            /*if (this.x > 209.00 && this.x < 412) {
                this.x += this.dx;
            }
            */
            TruckCollided1 = false;
           
               
        }
        public reset(): void {
            this.y += this.dy;
      

            if (this.y > 350) {
                game.removeChild(this);
            
                TruckCollided2 = false;
            }
        }
        public checkbound(): void {
            if (this.y >= (480))
                this.reset();
        }

    }


} 