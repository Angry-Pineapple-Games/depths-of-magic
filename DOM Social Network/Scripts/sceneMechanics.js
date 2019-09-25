var mySceneMechanics = {
    gridRopes0 : [
        [0, "ropeV"],
        [1, "ropeV"],
        [2, "ropeV"],
        [3, "ropeH"],
        [4, "ropeH"],
        undefined,
        [6, "ropeH"],
        [7, "ropeV"],
        [8, "ropeV"],
        [9, "ropeV"],
        [10, "ropeH"],
        undefined,
        [12, "ropeH"],
        [13, "ropeH"],
        [14, "ropeV"],
        [15, "ropeV"],
        [16, "ropeV"],
        [17, "ropeH"],
        [18, "ropeH"],
        [19, "ropeH"],
        [20, "ropeH"],
        [21, "ropeV"],
        [22, "ropeV"],
        [23, "ropeV"]
    ],
    start : function () {
        myGameMechanics.generateGridRopes(this.gridRopes0);
    },
    update : function (delta) {
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        myGameArea.resizeBackground(myPreload.images.street, cnv1, ctx1, 1);
        myGameArea.resizeBackground(myPreload.images.grid, cnv2, ctx2, 2);
        myGameMechanics.drawRopes(this.gridRopes0);
        myGameMechanics.trackingTraces(myGameArea.background2);
        myGameMechanics.deleteRope(this.gridRopes0);
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html