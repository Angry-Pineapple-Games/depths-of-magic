var mySceneMechanics = {
    update : function (delta) {
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        ctx1.drawImage(images.street, cnv1.width/2 - images.street.width/2, cnv1.height/2 - images.street.height/2);
        ctx2.drawImage(images.grid, cnv2.width/2 - images.grid.width/2, cnv2.height/2 - images.grid.height/2);
        myGameMechanics.drawTraces(ctx2);
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html