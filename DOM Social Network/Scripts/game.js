/*En este script se gestiona todo lo relacionado con las pantallas del juego, marcando cual es la actual y siendo el puente entre gameManager y las scenes para el
dibujado, actualización y comienzo de cada escena*/
var myGame = {
    debug: false,
    scene : 0,// la pantalla actual del juego
    sceneStarted : false,
    scenes : [myLevel1, myGameOver], //las diferentes pantallas del juego
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
        this.sceneStarted = false;
        if (this.scene < this.scenes.length-2) {this.scene++;}
        else {this.scene=0;}
        if(this.debug){console.log("SwapScene");}
    },
    gameOver : function() {
        this.sceneStarted = false;
        this.scene = this.scenes[this.scenes.length-1];
        if(this.debug){console.log("GameOver");}
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context1;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}