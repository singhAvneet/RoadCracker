module objects {

   export class GameObject extends createjs.Sprite {
       protected _width: number;
       protected _heigth: number;
       protected _position: createjs.Point;
       protected _isColliding: boolean;
       protected _truckColliding: boolean;
       protected objectName: string;
       protected game2: createjs.Container;
       protected blast: objects.collision;
      

       constructor(imageString: string)
        {
            super(atlas, imageString);

            this._width = this.getBounds().width;
            this._heigth = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._heigth * 0.5;
            this._position = new createjs.Point(this.x, this.y);
            this._isColliding = false;
            this._truckColliding = false;
            this.objectName = imageString;

       }
        

       public getPosition(): createjs.Point {
           var position: createjs.Point = new createjs.Point(this.x, this.y);
           return position;
       }
       public setPosition(p1:createjs.Point): void{
           this.x = p1.x;
           this.y = p1.y;
       }

       public getHalfHeigth(): number {
           return this._heigth*0.5;
       }



       public getCollision(): boolean {
           return this._isColliding;
       }
       public setCollision(isCollided: boolean){
           this._isColliding = isCollided;
       }
       public getObjectName(): string {
           return this.objectName;
       }



       public getTCollision(): boolean {
           return this._truckColliding;
       }
       public setTCollision(isCollided: boolean) {
           this._truckColliding = isCollided;

       }

       public rst(): void {
           this.x = Math.floor((Math.random() * 250) + 200);
           this.y = -this._heigth;

       }

       public rst1(): void {
           this.x = Math.floor((Math.random() * 250) + 200);
           this.y = 1000;
        //   this.x = Math.floor((Math.random() * 250) + 200);
         /*  if (p1.x < 136)
               this.x -= 2;
           else
               this.x += 2;

           if (p2.x > 136)
               this.x += 2;
           else
               this.x -= 2;*/
           //  this.y = -this._heigth;
           

       }
      
   
    }

}


