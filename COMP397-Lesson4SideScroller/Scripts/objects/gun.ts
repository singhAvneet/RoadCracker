module objects {
    export class gun extends objects.GameObject {
        private _engineSound: createjs.AbstractSoundInstance;
        constructor(yaxis:number) {
            super("gun");
            this.y = yaxis;
            this.x = 630;
        }

        public update(yaxis: number): void {
            this.y = yaxis;
        }
       
    }
}