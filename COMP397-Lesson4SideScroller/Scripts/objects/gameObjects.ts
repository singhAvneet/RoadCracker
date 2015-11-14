module objects {

   export class GameObject extends createjs.Sprite {
       protected _width: number;
       protected _heigth: number;

       constructor(imageString: string)
        {
            super(atlas, imageString);

            this._width = this.getBounds().width;
            this._heigth = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._heigth * 0.5;

    }
    }

}


