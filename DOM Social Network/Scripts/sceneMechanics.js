var mySceneMechanics = {
    update : function (delta) {
        $( "#canvas2" ).click(function() {
            switch (event.which) {
                case 1:
                    console.log('Left Mouse button pressed.');
                    break;
                case 2:
                    console.log('Middle Mouse button pressed.');
                    break;
                case 3:
                    console.log('Right Mouse button pressed.');
                    break;
                default:
                    console.log('You have a strange Mouse!');
            }
        });
    },
    draw : function(interp, ctx1, ctx2, cnv1, cnv2) {
        ctx1.drawImage(images.street, cnv1.width/2 - images.street.width/2, cnv1.height/2 - images.street.height/2);
        ctx2.drawImage(images.grid, cnv2.width/2 - images.grid.width/2, cnv2.height/2 - images.grid.height/2);
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html