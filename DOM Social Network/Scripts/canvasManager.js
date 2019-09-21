var myGameArea = {
    canvas1 : document.getElementById("canvas1"),
    context1 : canvas1.getContext("2d"),
    canvas2 : document.getElementById("canvas2"),
    context2 : canvas2.getContext("2d"),
    start : function() {
        window.addEventListener('resize', this.resizeCanvas, false);
        this.resizeCanvas();
    },
    resizeCanvas : function () {
        let tam1 = 0.65;
        let tam2 = 0.35;
        if (window.innerWidth > window.innerHeight*1.5) {
            myGameArea.canvas1.width = window.innerWidth*tam1;
            myGameArea.canvas2.width = window.innerWidth*tam2;
            myGameArea.canvas1.height = window.innerHeight;
            myGameArea.canvas2.height = window.innerHeight;
            myGameArea.canvas2.style.left = window.innerWidth*tam1 + 'px';
            myGameArea.canvas2.style.top = 0 + 'px';
        } else {
            myGameArea.canvas1.width = window.innerWidth;
            myGameArea.canvas2.width = window.innerWidth;
            myGameArea.canvas1.height = window.innerHeight*tam1;
            myGameArea.canvas2.height = window.innerHeight*tam2;
            myGameArea.canvas2.style.left = 0+ 'px';
            myGameArea.canvas2.style.top = window.innerHeight*tam1 + 'px';
        }
    },
    resizeImage: function(img, cnv, ctx) {
        let aspectRatio = img.initWidth / img.initHeight;
        let newHight = cnv.width/aspectRatio;
        let newWidth = cnv.height * aspectRatio;
        if ((cnv.width < img.initWidth && cnv.height > newHight)|| cnv.width < newWidth) {
          ctx.drawImage(img, 0, cnv.height/2 - newHight * 0.5, cnv.width, newHight);
        } else {
          ctx.drawImage(img, cnv.width/2 - newWidth * 0.5, 0, newWidth, cnv.height);
        }
    }
}

