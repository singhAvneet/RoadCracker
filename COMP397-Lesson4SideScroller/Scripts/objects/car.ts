module objects {
    export class car extends objects.GameObject {
        constructor() {
            super("car");
            this.y = 430;
            //430
        }

        public update(): void {
            if (200 < stage.mouseX && stage.mouseX < 450)
            this.x = stage.mouseX;

        }

    }
}