/*En este script se gestionan todos los inputs que pueda recibir el juego, para servirselo al resto del programa*/
var myInputsManager = {
    debugAnimationTransitions: false,
    leftMouseDown: false,
    rightMouseDown: false,
    middleMouseDown: false,
    blocked: false,
    traceLive: [5, 0],//limitacion de vida del trazo
    trace: [],
    start: function () {
        let that = myInputsManager;
        let pause = myGameManager.pause;

        document.getElementById("canvas1").onmouseup = function (event) {
            console.log("ya");
            event.stopPropagation();
            that.passCertainScenes(event);
        };

        document.getElementById("canvas1").ontouchend = function (event) {
            event.stopPropagation();
            that.passCertainScenes(event);
        }
        document.getElementById("canvas2").onmousedown = function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                switch (event.which) {
                    case 1:
                        that.trace = [];
                        that.trace.push(that.traceLive.slice());
                        that.leftMouseDown = true;
                        break;
                    case 2:
                        that.middleMouseDown = true;
                        break;
                    case 3:
                        that.rightMouseDown = true;
                        break;
                    default:
                        console.log('Error in inputsManager/myInputsManager/start/mousedown');
                }
            }
        };

        document.getElementById("canvas2").ontouchstart = function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                that.trace = [];
                that.trace.push(that.traceLive.slice());
                that.leftMouseDown = true;
            }
        }
        document.getElementById("canvas2").onmousemove = function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                if (that.leftMouseDown) {
                    that.trace.push([event.pageX - parseInt(myGameArea.canvas2.style.left), event.pageY - parseInt(myGameArea.canvas2.style.top)])
                }
            }
        };

        document.getElementById("canvas2").ontouchmove = function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                if (that.leftMouseDown) {
                    that.trace.push([event.touches[0].clientX - parseInt(myGameArea.canvas2.style.left), event.touches[0].clientY - parseInt(myGameArea.canvas2.style.top)])
                }
            }
        }

        $("#canvas2").mouseup(function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                switch (event.which) {
                    case 1:
                        that.leftMouseDown = false;
                        if (that.trace.length > 1) {
                            myGameMechanics.traces.push(that.trace);
                        }
                        break;
                    case 2:
                        that.middleMouseDown = false;
                        break;
                    case 3:
                        that.rightMouseDown = false;
                        break;
                    default:
                        console.log('Error in inputsManager/myInputsManager/start/mouseup');
                }
            }
        });

        document.getElementById("canvas2").onmouseup = function (event) {
            event.stopPropagation();
            if (!pause && !that.blocked) {
                that.leftMouseDown = false;
                if (that.trace.length > 1) {
                    myGameMechanics.traces.push(that.trace);
                }
            }
        }

        $(document).keyup(function (e) {
            event.stopPropagation();
            if (e.key === "Backspace") { //si la tecla era "retroceso" vuelve a la pagina anterior
                window.history.back();
            } else if (e.key === "a" && that.debugAnimationTransitions) {//Para debuggear transiciones entre animaciones
                myAnimManager.changeAnimation(myHeroCharacter, "attack", function () {
                    myAnimManager.changeAnimation(myHeroCharacter, "idle");
                });
            } else if (e.key === "s" && that.debugAnimationTransitions) {
                mySFX.playSFX("damage", myLevel1.posHero, function () {
                    console.log("Efect ended");
                });
            }
        });
    },
    passCertainScenes: function (event) {
        event.stopPropagation();
        if (myIntro === myGame.scenes[myGame.scene] || myEnding === myGame.scenes[myGame.scene] || myTransitionScene === myGame.scenes[myGame.scene]) { myGame.swapScene(); }
        else if (myGameOver === myGame.scenes[myGame.scene]) { myGame.restart(); }
        else {this.Pause(event);}
    },
    Pause: function (event) {
        event.stopPropagation();
        if (!myGameManager.pause) {
            myGameManager.pause = true;
            myGameManager.pauseTimers("all");
            mySoundManager.pauseAll();
        }
        else {
            myGameManager.pause = false;
            myGameManager.resumeTimers("all");
            mySoundManager.unPauseAll();
        }
    }
}