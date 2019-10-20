/*En este script se gestiona el motor del juego, controlando el gameloop y siendo por tanto el core*/
function preloadGame() {//preinicializa el juego
    myGameArea.start();
    myTextManager.changeLang();
    myLoading.loadImages(startGame);
}

function startGame() {//arranca el juego
    myInputsManager.start();
    myGameManager.start();
}

var myGameManager = {//gestiona los timers dentro del juego y las propiedades principales del juego
    debug: false,
    lastFrameTimeMs: 0,
    maxFPS: 30,
    delta: 0,
    timestep: 1000 / 30,
    fps: 30,
    framesThisSecond: 0,
    lastFpsUpdate: 0,
    timersSwap: [],
    timersOrderPattern: [],
    pause: false,
    start: function () {
        window.requestAnimationFrame(mainLoop);
    },
    addTimer: function (callback, timeMilis, timerType) {
        if (timerType === "timersSwap") { this.timersSwap.push(new myTimer(callback, timeMilis)); }
        else if (timerType === "timersOrderPattern") { this.timersOrderPattern.push(new myTimer(callback, timeMilis)); }
        else {console.log("Fail gameManager/mygamemanager/addTimer/parameter timerType");}
    },
    pauseTimers: function (timerType) {
        let list;
        if (timerType === "timersSwap") { list = this.timersSwap;}
        else if (timerType === "timersOrderPattern") { list = this.timersOrderPattern;}
        else if (timerType === "all") { this.pauseTimers("timersSwap"); this.pauseTimers("timersOrderPattern");return;}
        else {console.log("Fail gameManager/mygamemanager/pauseTimers/parameter");}

        for (var idx = 0; idx < list.length; idx++) {
            list[idx].pause();
            if(this.debug){console.log("timerPause: " + idx);}
        }
    },
    resumeTimers: function (timerType) {
        let list;
        if (timerType === "timersSwap") { list = this.timersSwap; }
        else if (timerType === "timersOrderPattern") { list = this.timersOrderPattern; }
        else if (timerType === "all") { this.resumeTimers("timersSwap"); this.resumeTimers("timersOrderPattern");return;}
        else {console.log("Fail gameManager/mygamemanager/resumeTimers/parameter");}
        
        for (var idx = 0; idx < list.length; idx++) {
            if (list[idx].timeMilis < 0) {
                list.splice(idx, 1);
                idx--;
                if(this.debug){console.log("timerDelete: " + idx);}
            } else {
                list[idx].resume();
                if(this.debug){console.log("timerResume: " + idx);}
            }
        }
    },
    clearTimers: function (timerType) {
        let list;
        if (timerType === "timersSwap") { list = this.timersSwap;}
        else if (timerType === "timersOrderPattern") { list = this.timersOrderPattern;}
        else if (timerType === "all") { this.clearTimers("timersSwap"); this.clearTimers("timersOrderPattern");return;}
        else {console.log("Fail gameManager/mygamemanager/clearTimers/parameter");}
        this.pauseTimers(timerType);
        list.length = 0;
    }
}

var mainLoop = function (timestamp) {//game loop del juego
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

function myTimer(callback, timeMilis) {//gestion de las funciones internas de los timers
    this.debug = false;
    this.callback = callback;
    this.timerID = 0;
    this.timeMilis = timeMilis;
    this.start = Date.now();
    this.paused = 1;
    this.pause = function () {
        if (++this.paused === 1) {
            clearTimeout(this.timerID);
            this.timeMilis = this.timeMilis - (Date.now() - this.start);
            if(this.debug && this.timeMilis>0){console.log("timerPause: " + this.timeMilis);} // if the diference is 0 the task was performed
        }
    }
    this.resume = function () {
        if (--this.paused === 0) {
            this.start = Date.now();
            if (this.timeMilis > 0) { 
                this.timerID = setTimeout(this.callback, this.timeMilis); 
                if(this.debug){console.log("timerResume: " + this.timeMilis);}
            }
        }
    }
    this.resume();
}

//referencias: https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing#panic-spiral-death