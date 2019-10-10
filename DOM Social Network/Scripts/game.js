/*En este script se gestiona todo lo relacionado con las pantallas del juego, marcando cual es la actual y siendo el puente entre gameManager y las scenes para el
dibujado, actualización y comienzo de cada escena*/
var myGame = {
    debug: false,
    scene : 0,// la pantalla actual del juego
    sceneStarted : false,
    scenes : [myIntro, myLevel1, myTransitionScene, myLevel2, myTransitionScene, myLevel3, myEnding, myTransitionScene, myGameOver], //las diferentes pantallas del juego
    update : function(delta) { //simulacion de fisicas e inicializar a traves del start una vez
        if (!this.sceneStarted) {
            this.scenes[this.scene].start();
            this.sceneStarted = true;
        }
        this.scenes[this.scene].update(delta);
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {//pintar cada frame
        this.scenes[this.scene].draw(interp, ctx1, ctx2, cnv1, cnv2);
        myGameMechanics.drawTraces(ctx2);
    },
    swapScene : function () {
        let that = myGame;
        that.sceneStarted = false;
        if (that.scene < that.scenes.length-2) {that.scene++;}
        else {
            that.scene= 0;
            myStatsController.loops++;
        }
        if(that.debug){console.log("SwapScene");}
    },
    gameOver : function() {
        this.sceneStarted = false;
        this.scene = this.scenes.length - 1;
        if(this.debug){console.log("GameOver");}
    },
    restart: function() {
        this.sceneStarted = false;
        this.scene = 0;
        if(this.debug){console.log("GameRestart");}
    }
}