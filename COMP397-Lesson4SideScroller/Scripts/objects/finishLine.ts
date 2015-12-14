module objects {
    export class finish extends createjs.Bitmap {
        private dy: number;
        constructor() {
            super(assets.getResult("finish"));
           
            this.update();
        }
        public update(): void {
           
            this.y = 30;
            this.x = 70;
        }
      

    }


}  