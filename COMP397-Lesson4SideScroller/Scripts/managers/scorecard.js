var managers;
(function (managers) {
    var Scorecard = (function () {
        function Scorecard() {
        }
        Scorecard.prototype.setScore = function (score) {
            this._score = score;
        };
        Scorecard.prototype.getScore = function () {
            return this._score;
        };
        Scorecard.prototype.setLives = function (score) {
            this._lives = score;
        };
        Scorecard.prototype.getLives = function () {
            return this._lives;
        };
        Scorecard.prototype.update = function () { };
        Scorecard.prototype.addScore = function (score) {
            this._score += score;
        };
        Scorecard.prototype.addLives = function (score) {
            this._lives += score;
        };
        Scorecard.prototype.removeLives = function (score) {
            this._lives -= score;
        };
        Scorecard.prototype.removescore = function (score) {
            this._score -= score;
        };
        return Scorecard;
    })();
    managers.Scorecard = Scorecard;
})(managers || (managers = {}));
//# sourceMappingURL=scorecard.js.map