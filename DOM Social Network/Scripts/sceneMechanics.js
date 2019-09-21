var mySceneMechanics = {
    update : function (delta) {
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        myGameArea.resizeImage(myPreload.images.street, cnv1, ctx1);
        myGameArea.resizeImage(myPreload.images.grid, cnv2, ctx2);
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html