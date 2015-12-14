
/// <reference path="references.ts" />


// GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var winning: boolean;
var state: number;
var currentState: objects.Scene; // alias for our current state
var atlas: createjs.SpriteSheet;

//managers
var scoreboard: managers.Scorecard;

// GAME OBJECTS
var menu: states.Menu;
var game: states.Game;
var game2: states.game2;
var game3: states.game3;
var over: states.Over;
var state: number;
var TruckCollided1: boolean;
var carCollided: boolean;//tbd
var p1: createjs.Point;
var blast: objects.collision;
var carblast: objects.collision;
var instruction: states.instruction;
var data = {

    "images": [
        "../../Assets/images/atlas.png"
    ],

    "frames": [
        [2, 2, 80, 80, 0, 0, 0],
        [2, 84, 8, 18, 0, 0, 0],
        [12, 84, 15, 8, 0, 0, 0],
        [84, 2, 70, 80, 0, 0, 0],
        [156, 2, 70, 70, 0, 0, 0],
        [156, 74, 30, 30, 0, 0, 0],
        [188, 74, 30, 29, 0, 0, 0],
        [228, 2, 65, 65, 0, 0, 0],
        [295, 2, 149, 50, 0, 0, 0],
        [295, 54, 149, 50, 0, 0, 0],
        [446, 2, 149, 50, 0, 0, 0],
        [597, 2, 130, 50, 0, 0, 0],
        [446, 54, 149, 50, 0, 0, 0],
        [597, 54, 40, 50, 0, 0, 0],
        [639, 54, 30, 49, 0, 0, 0]
    ],

    "animations": {
        "truck1": [0],
        "bullet2": [1],
        "bullet1": [2],
        "truck2": [3],
        "collision": [4],
        "SmallCar": [5],
        "coins": [6],
        "car": [7],
        "BackButton": [8],
        "StartButton": [9],
        "instructionButton": [10],
        "NextButton": [11],
        "quit": [12],
        "fuel": [13],
        "gun": [14]
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
    { id: "instruction", src: "../../Assets/images/INSTRUCTIONS.png" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "blast", src: "Assets/audio/blast.wav" },
    { id: "music", src: "Assets/audio/music.wav" },
    { id: "coin", src: "Assets/audio/coin.flac" },
    { id: "drift", src: "../../Assets/audio/drift.wav" },
    { id: "ending", src: "../../Assets/images/ending.png" }
   // { id: "collision", src: "../../Assets/images/collision.png" }
];

function preload(): void {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    atlas = new createjs.SpriteSheet(data);
}

function init():void {
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
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting
    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}


// state machine prep
function changeState(state): void {
    // Launch various scenes

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
 