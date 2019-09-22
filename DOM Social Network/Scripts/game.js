/*En este script se gestiona todo lo relacionado con las pantallas del juego, marcando cual es la actual y siendo el puente entre gameManager y las scenes para el
dibujado, actualización y comienzo de cada escena*/
var myGame = {
    scene : 0,// la pantalla actual del juego
    sceneStarted : false,
    scenes : [mySceneMechanics], //las diferentes pantallas del juego
    update : function(delta) {
        if (!this.sceneStarted) {
            this.scenes[this.scene].start();
            this.sceneStarted = true;
        }
        this.scenes[this.scene].update(delta);
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        this.scenes[this.scene].draw(interp, ctx1, ctx2, cnv1, cnv2);
        myGameMechanics.drawTraces(ctx2);
    },
    swapScene : function (num) {
        this.sceneStarted = false;
        this.scene = num;
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