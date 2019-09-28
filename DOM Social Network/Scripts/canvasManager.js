/*En este script se gestona todo lo relacionado con los tamaños de los canvas, fondos e imagenes que se usan en el juego*/
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
    resizeBackground: function(img, cnv, ctx, num) {
        let aspectRatio = img.initWidth / img.initHeight;
        let possibleHight = cnv.width/aspectRatio;
        let possibleWidth = cnv.height * aspectRatio;
        let newHeight = 0;
        let newWidth = 0;
        let drawPosInCnvWidth = cnv.width/2 - possibleWidth * 0.5;
        let drawPosInCnvHeight = cnv.height/2 - possibleHight * 0.5;
        if ((cnv.width < img.initWidth && cnv.height > possibleHight)|| cnv.width < possibleWidth) {
          ctx.drawImage(img, 0, drawPosInCnvHeight, cnv.width, possibleHight);
          newHeight = possibleHight;
          newWidth = cnv.width;
          drawPosInCnvWidth = 0;
        } else {
          ctx.drawImage(img, drawPosInCnvWidth, 0, possibleWidth, cnv.height);
          newHeight = cnv.height;
          newWidth = possibleWidth;
          drawPosInCnvHeight = 0;
        }
        if (num === 1) {
            myGameArea.background1 = {
                ctx: this.context1,
                aspectRatio : aspectRatio,
                width : newWidth,
                iniWidth : img.initWidth,
                height : newHeight,
                iniHeight : img.initHeight,
                drawPosX : drawPosInCnvWidth,
                drawPosY : drawPosInCnvHeight
            }
        } else if (num === 2) {
            myGameArea.background2 = {
                ctx: this.context2,
                aspectRatio : aspectRatio,
                width : newWidth,
                iniWidth : img.initWidth,
                height : newHeight,
                iniHeight : img.initHeight,
                drawPosX : drawPosInCnvWidth,
                drawPosY : drawPosInCnvHeight
            }
        }
    },
    drawInBackgroundAGrid: function(num, callback, grid) {
        let bg;
        if (num===1){bg = this.background1;}
        else if (num===2){bg = this.background2;}
        else {console.log("Error en canvasManager/drawInBackground/num");}
        if (bg !== undefined) {
            grid.forEach(g => {
                if(g!==undefined) {
                    let pos = callback(bg, g[0]);//[posx, posy]
                    let resizePerOne = this.resizeBackgroundPerOne(bg);
                    bg.ctx.drawImage(g[1], bg.drawPosX + pos[0], bg.drawPosY + pos[1], g[1].initWidth * resizePerOne, g[1].initHeight * resizePerOne);
                }
            });
        }
    },
    drawInBackground: function(num, pos, img) {
        let bg;
        if (num===1){bg = this.background1;}
        else if (num===2){bg = this.background2;}
        else {console.log("Error en canvasManager/drawInBackground/num");}
        if (bg !== undefined) {
            let resizePerOne = this.resizeBackgroundPerOne(bg);
            bg.ctx.drawImage(img, bg.drawPosX + pos[0], bg.drawPosY + pos[1], img.initWidth * resizePerOne, img.initHeight * resizePerOne);
        }
    }, 
    resizeBackgroundPerOne: function(bg) {
        return bg.width/bg.iniWidth;
    }
}

