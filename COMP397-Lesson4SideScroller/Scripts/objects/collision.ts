module objects {
    export class collision extends objects.GameObject {
        private dy: number;
        private dx: number;
        
        constructor(str:string) {
            super(str);
           
        
            this.update();

        }

        public update(): void {
            this.y += 5;
            
            this.checkbound();

        }
        public reset(): void {
          
        }
        private checkbound(): void {
            if (this.y >= (480 + this._heigth))
                this.update();
        }

    }


} 