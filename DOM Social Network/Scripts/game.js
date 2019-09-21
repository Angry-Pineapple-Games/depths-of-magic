var myGame = {
    scene : 0,// la pantalla actual del juego
    scenes : [mySceneMechanics], //las diferentes pantallas del juego
    update : function(delta) {
        this.scenes[this.scene].update(delta);
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        this.scenes[this.scene].draw(interp, ctx1, ctx2, cnv1, cnv2);
        myGameMechanics.drawTraces(ctx2);
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