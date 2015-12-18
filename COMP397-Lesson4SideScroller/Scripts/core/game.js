/// <reference path="references.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var assets;
var canvas;
var stage;
var stats;
var winning;
var state;
var currentState; // alias for our current state
var atlas;
//managers
var scoreboard;
// GAME OBJECTS
var menu;
var game;
var game2;
var game3;
var over;
var state;
var TruckCollided1;
var carCollided; //tbd
var p1;
var blast;
var carblast;
var fire = [];
var instruction;
var data = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [2, 2, 560, 380, 0, 0, 0],
        [564, 2, 149, 50, 0, 0, 0],
        [715, 2, 65, 65, 0, 0, 0],
        [564, 54, 149, 50, 0, 0, 0],
        [715, 69, 40, 50, 0, 0, 0],
        [564, 106, 149, 50, 0, 0, 0],
        [757, 69, 15, 8, 0, 0, 0],
        [757, 79, 8, 18, 0, 0, 0],
        [715, 121, 30, 49, 0, 0, 0],
        [564, 158, 149, 50, 0, 0, 0],
        [747, 121, 30, 30, 0, 0, 0],
        [747, 153, 30, 29, 0, 0, 0],
        [564, 210, 67, 108, 0, 0, 0],
        [633, 210, 80, 80, 0, 0, 0],
        [633, 292, 70, 80, 0, 0, 0],
        [705, 292, 70, 70, 0, 0, 0]
    ],
    "animations": {
        "NextButton": [0],
        "BackButton": [1],
        "car": [2],
        "StartButton": [3],
        "fuel": [4],
        "instructionButton": [5],
        "bullet1": [6],
        "bullet2": [7],
        "gun": [8],
        "quit": [9],
        "SmallCar": [10],
        "coins": [11],
        "truck4": [12],
        "truck1": [13],
        "truck2": [14],
        "collision": [15]
    }
};
// manifest of all our assets
var manifest = [
    { id: "welcome", src: "../../Assets/images/welcome.png" },
    { id: "finish", src: "../../Assets/images/finish.png" },
    { id: "track", src: "../../Assets/images/track.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "desert", src: "../../Assets/images/desert.png" },
    { id: "ground", src: "../../Assets/images/ground.png" },
    { id: "instruction", src: "../../Assets/images/instruction.png" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "blast", src: "Assets/audio/blast.wav" },
    { id: "music", src: "Assets/audio/music.wav" },
    { id: "music2", src: "Assets/audio/music2.mp3" },
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
    switch (state) {
        case config.MENU_STATE:
            state = 1;
            winning = false;
            TruckCollided1 = false;
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            TruckCollided1 = false;
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            state = 1;
            winning = false;
            break;
        case config.PLAY_STATE2:
            TruckCollided1 = false;
            stage.removeAllChildren();
            game2 = new states.game2();
            currentState = game2;
            state = 2;
            winning = false;
            break;
        case config.PLAY_STATE3:
            // show the play scene
            stage.removeAllChildren();
            game3 = new states.game3();
            state = 3;
            currentState = game3;
            winning = false;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
        case config.INSTRUCTION_STATE:
            // show the game over scene            
            instruction = new states.instruction();
            currentState = instruction;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
//# sourceMappingURL=game.js.map