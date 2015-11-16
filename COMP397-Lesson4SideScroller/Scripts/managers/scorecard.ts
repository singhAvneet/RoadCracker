module managers {
    export class Scorecard {
        private _score: number;
        private _lives: number;

        public setScore(score:number): void {
            this._score = score;
        }

        public getScore(): number {

            return this._score;
        }

        public setLives(score: number): void {
            this._lives = score;
        }

        public getLives(): number {

            return this._lives;
        }  public 
        constructor() { }
        public update(): void { }

        public addScore(score: number): void {
            this._score += score;
        }
        public addLives(score: number): void {
            this._lives += score;
        }
        public removeLives(score: number): void {
            this._lives -= score;
        }

        public removescore(score: number): void {
            this._score -= score;
        }
    } 
} 