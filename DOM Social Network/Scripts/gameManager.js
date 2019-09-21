function preloadGame() {
    myPreload.loadImages(startGame);
}

function startGame() {
    myGameArea.start();
    myInputsManager.start();
    myGameManager.start();

    //myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameManager = {
    lastFrameTimeMs : 0,
    maxFPS : 60,
    delta : 0,
    timestep : 1000 / 60,
    fps : 60,
    framesThisSecond : 0,
    lastFpsUpdate : 0,
    start : function () {
        window.requestAnimationFrame(mainLoop);
    }
}

var mainLoop = function(timestamp) {
    // Limita los fps 
    if (timestamp < myGameManager.lastFrameTimeMs + (1000 / myGameManager.maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    myGameManager.delta += timestamp - myGameManager.lastFrameTimeMs;//tiempo transcurrido
    myGameManager.lastFrameTimeMs = timestamp;//cuando occurrio el ultimo frame

    //para trackear los fps
    if (timestamp > myGameManager.lastFpsUpdate + 1000) {
        myGameManager.fps = 0.25 * myGameManager.framesThisSecond + 0.75 * myGameManager.fps;

        myGameManager.lastFpsUpdate = timestamp;
        myGameManager.framesThisSecond = 0;
    }
    myGameManager.framesThisSecond++;

    //realiza los pasos necesarios antes de pintar y controla spiral of death
    var numUpdateSteps = 0;
    while (myGameManager.delta >= myGameManager.timestep) {
        myGame.update(myGameManager.delta);
        myGameManager.delta -= myGameManager.timestep;
        if (++numUpdateSteps >= 240) {
            myGameManager.delta = 0;
            break;
        }
    }
    myGame.draw(myGameManager.delta / myGameManager.timestep, myGameArea.context1, myGameArea.context2, myGameArea.canvas1, myGameArea.canvas2);
    window.requestAnimationFrame(mainLoop);
}

//referencias: https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing#panic-spiral-death