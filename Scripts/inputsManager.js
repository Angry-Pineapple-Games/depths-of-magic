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
        //canvas1, toque
        document.getElementById("canvas1").onmouseup = function (event) {
            event.stopPropagation();
            that.passCertainScenes();
        };

        document.getElementById("canvas1").ontouchend = function (event) {
            event.stopPropagation();
            event.preventDefault();
            that.passCertainScenes();
        }
        //empieza a detectar el inicio de los trazos en el canvas2
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
            event.preventDefault();
            if (!pause && !that.blocked) {
                that.trace = [];
                that.trace.push(that.traceLive.slice());
                that.leftMouseDown = true;
            }
        }
        //detecta el movimiento del jugador
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
            event.preventDefault();
            if (!pause && !that.blocked) {
                if (that.leftMouseDown) {
                    that.trace.push([event.touches[0].clientX - parseInt(myGameArea.canvas2.style.left), event.touches[0].clientY - parseInt(myGameArea.canvas2.style.top)])
                }
            }
        }
        //detecta la finalización del trazo
        document.getElementById("canvas2").onmouseup = function (event) {
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
        };
        document.getElementById("canvas2").ontouchend = function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (!pause && !that.blocked) {
                that.leftMouseDown = false;
                if (that.trace.length > 1) {
                    myGameMechanics.traces.push(that.trace);
                }
            }
        }
        //eventos de teclado
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
    passCertainScenes: function () {//control de escenas
        if (myIntro === myGame.scenes[myGame.scene] || myEnding === myGame.scenes[myGame.scene] || myTransitionScene === myGame.scenes[myGame.scene] /*|| myLevel1 === myGame.scenes[myGame.scene] || myLevel2 === myGame.scenes[myGame.scene] || myLevel3 === myGame.scenes[myGame.scene]*/) { myGame.swapScene(); }
        else if (myGameOver === myGame.scenes[myGame.scene]) { myGame.restart(); }
        else {this.Pause(event);}
    },
    Pause: function () {//pausa todos los timers del juego
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