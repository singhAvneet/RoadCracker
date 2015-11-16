/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../managers/scorecard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/gameobjects.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/truck.ts" />
/// <reference path="../objects/coins.ts" />
/// <reference path="../objects/fuel.ts" />
/// <reference path="../objects/track.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var assets;
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for our current state
var atlas;
//managers
var scoreboard;
// GAME OBJECTS
var menu;
var game;
var over;
var data = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [2, 2, 70, 146, 0, 0, 0],
        [2, 150, 150, 50, 0, 0, 0],
        [2, 202, 150, 50, 0, 0, 0],
        [74, 2, 70, 140, 0, 0, 0],
        [146, 2, 150, 50, 0, 0, 0],
        [146, 54, 65, 80, 0, 0, 0],
        [154, 136, 67, 108, 0, 0, 0],
        [213, 54, 70, 70, 0, 0, 0],
        [285, 54, 40, 50, 0, 0, 0],
        [285, 106, 30, 29, 0, 0, 0],
        [223, 137, 65, 100, 0, 0, 0]
    ],
    "animations": {
        "truck1": [0],
        "BackButton": [1],
        "NextButton": [2],
        "truck2": [3],
        "StartButton": [4],
        "car": [5],
        "truck4": [6],
        "collision": [7],
        "fuel": [8],
        "coins": [9],
        "truck3": [10]
    }
};
// manifest of all our assets
var manifest = [
    { id: "welcome", src: "../../Assets/images/welcome.png" },
    { id: "track", src: "../../Assets/images/track.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "blast", src: "Assets/audio/blast.wav" },
    { id: "coin", src: "Assets/audio/coin.flac" },
    { id: "drift", src: "../../Assets/audio/drift.wav" },
    { id: "ending", src: "../../Assets/images/ending.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    atlas = new createjs.SpriteSheet(data);
}
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting
    scoreboard = new managers.Scorecard();
    state = config.MENU_STATE;
    changeState(state);
}
// Main Game Loop
function gameLoop(event) {
    stats.begin(); // start counting
    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// state machine prep
function changeState(state) {
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
//# sourceMappingURL=game.js.map