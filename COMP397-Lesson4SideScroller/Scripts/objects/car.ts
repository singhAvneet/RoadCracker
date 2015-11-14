module objects {
    export class car extends objects.GameObject {
        constructor() {
            super("car");
            this.y = 430;
            //430
        }

        public  update():void {
            this.x = stage.mouseX;

        }

    }
}