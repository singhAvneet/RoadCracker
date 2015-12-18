module objects {
    export class truck extends objects.GameObject {
        private dy: number;
        private dx: number;
       
        constructor(str:string) {
            super(str);
            this.dy = 2;
            this.reset();

        }
       
        public update(): void {
            if (state === 3) {
                if (this.x < 200.00)
                    this.x += this.dx;
                else if (this.x > 250)
                    this.x -= this.dx;
            }
            else if (this.x > 209.00 && this.x < 412) 
                this.x += this.dx;            

            this.y += this.dy;
            this.checkbound();

        }
        public reset(): void {
            if (state === 3)
                this.dx = Math.floor(Math.random() * 0) + 1;      
            else
                 this.dx = Math.floor(Math.random() * 4) - 2;           
            this.dy = Math.floor(Math.random() * 5) + 5;
            if (state === 3)
                this.x = 320;
            else
                 this.x = Math.floor((Math.random() * 250) + 200);
            this.y = -this._heigth;
        }
        private checkbound(): void {
            if (this.y >= (480+this._heigth))
                this.reset();
        }

        public setX(): void {
            this.x = 320;
        }

    }


} 