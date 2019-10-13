/*En este script se gestiona todo lo relacionado con los tamaños de los canvas, fondos e imagenes que se usan en el juego*/
var myGameArea = {
    canvas1: document.getElementById("canvas1"),
    context1: canvas1.getContext("2d"),
    canvas2: document.getElementById("canvas2"),
    context2: canvas2.getContext("2d"),
    tam1: 1,
    tam2: 0,
    start: function () {
        window.addEventListener('resize', this.resizeCanvas, false);
        this.resizeCanvas();
        myFade.addCanvas(this.canvas1, this.context1);
        myFade.addCanvas(this.canvas2, this.context2);
    },
    editTams: function (tam1) {
        if (tam1 > 1 || tam1 < 0) { console.log("Fail mygamearea/edittams/tam1"); }
        this.tam1 = tam1;
        this.tam2 = 1 - tam1;
        this.resizeCanvas();
    },
    resizeCanvas: function () {//en tanto por uno
        let that = myGameArea;
        if (window.innerWidth > window.innerHeight * 1.5) {
            myGameArea.canvas1.width = window.innerWidth * that.tam1;
            myGameArea.canvas2.width = window.innerWidth * that.tam2;
            myGameArea.canvas1.height = window.innerHeight;
            myGameArea.canvas2.height = window.innerHeight;
            myGameArea.canvas2.style.left = window.innerWidth * that.tam1 + 'px';
            myGameArea.canvas2.style.top = 0 + 'px';
        } else {
            myGameArea.canvas1.width = window.innerWidth;
            myGameArea.canvas2.width = window.innerWidth;
            myGameArea.canvas1.height = window.innerHeight * that.tam1;
            myGameArea.canvas2.height = window.innerHeight * that.tam2;
            myGameArea.canvas2.style.left = 0 + 'px';
            myGameArea.canvas2.style.top = window.innerHeight * that.tam1 + 'px';
        }
    },
    resizeBackground: function (img, num) {
        let cnv, ctx;
        let background = {
            iniWidth: img.initWidth,
            iniHeight: img.initHeight
        }

        if (num === 1) {
            myGameArea.background1 = background;
            cnv = this.canvas1;
            ctx = this.context1;
        } else {
            myGameArea.background2 = background;
            cnv = this.canvas2;
            ctx = this.context2;
        }

        background.cnv = cnv;
        background.ctx = ctx;
        let aspectRatio = img.initWidth / img.initHeight;
        background.aspectRatio = aspectRatio;
        let possibleHight = cnv.width / aspectRatio;
        let possibleWidth = cnv.height * aspectRatio;
        let drawPosInCnvWidth = cnv.width / 2 - possibleWidth * 0.5;
        let drawPosInCnvHeight = cnv.height / 2 - possibleHight * 0.5;

        if ((cnv.width < img.initWidth && cnv.height > possibleHight) || cnv.width < possibleWidth) {
            ctx.drawImage(img, 0, drawPosInCnvHeight, cnv.width, possibleHight);
            background.height = possibleHight;
            background.width = cnv.width;
            drawPosInCnvWidth = 0;
        } else {
            ctx.drawImage(img, drawPosInCnvWidth, 0, possibleWidth, cnv.height);
            background.height = cnv.height;
            background.width = possibleWidth;
            drawPosInCnvHeight = 0;
        }

        background.drawPosX = drawPosInCnvWidth;
        background.drawPosY = drawPosInCnvHeight;
    },
    drawInBackgroundAGrid: function (num, callback, grid) {
        let bg;
        if (num === 1) { bg = this.background1; }
        else if (num === 2) { bg = this.background2; }
        else { console.log("Error en canvasManager/drawInBackground/num"); }
        if (bg !== undefined) {
            for (var idx = 0; idx < grid.length; idx++) {
                if (grid[idx][0] !== -1) {
                    let pos = callback(bg, grid[idx][1]);//[posx, posy]
                    let resizePerOne = this.resizeBackgroundPerOne(bg);
                    bg.ctx.drawImage(grid[idx][2], bg.drawPosX + pos[0], bg.drawPosY + pos[1], grid[idx][2].initWidth * resizePerOne, grid[idx][2].initHeight * resizePerOne);
                }
            }
        }
    },
    drawInBackground: function (num, pos, img) {
        let bg;
        if (num === 1) { bg = this.background1; }
        else if (num === 2) { bg = this.background2; }
        else { console.log("Error en canvasManager/drawInBackground/num"); }
        if (bg !== undefined) {
            let resizePerOne = this.resizeBackgroundPerOne(bg);
            bg.ctx.drawImage(img, bg.drawPosX + pos[0], bg.drawPosY + pos[1], img.initWidth * resizePerOne, img.initHeight * resizePerOne);
        }
    },
    drawTextInBackground: function (num, text, pos, color = "white", textHeight = 20, textAlign = "center", textAlpha=1) {
        let bg;
        if (num === 1) { bg = myGameArea.background1; }
        else if (num === 2) { bg = myGameArea.background2; }
        else { console.log("Error en canvasManager/drawTextInBackground/num"); }
        if (bg !== undefined) {
            let resizePerOne = this.resizeBackgroundPerOne(bg);
            let height = Math.trunc(textHeight * resizePerOne);
            bg.ctx.font = String(height) + "px jamestandinawanao";
            bg.cnv.style.letterSpacing = String(Math.trunc(2*resizePerOne))+'px';
            bg.ctx.fillStyle = color;
            bg.ctx.textAlign = textAlign;
            bg.ctx.globalAlpha = textAlpha;
            bg.ctx.fillText(text, bg.drawPosX + pos[0] * bg.width, bg.drawPosY + pos[1] * bg.height);
            bg.ctx.globalAlpha = 1;
        }
    },
    animateInBackground: function (num, pos, img, animation, resize) {
        let bg;
        if (num === 1) { bg = this.background1; }
        else if (num === 2) { bg = this.background2; }
        else { console.log("Error en canvasManager/animateInBackground/num"); }
        if (bg !== undefined) {
            let resizePerOne = this.resizeBackgroundPerOne(bg);
            animation.animate(bg.ctx, img, bg.drawPosX + pos[0] * resizePerOne , bg.drawPosY + pos[1] * resizePerOne, resizePerOne*resize);
        }
    },
    resizeBackgroundPerOne: function (bg) {
        return bg.width / bg.iniWidth;
    }
}

var myFade = {
    canvas: [], //cnv, ctx, fade
    in: function (num) {
        this.canvas[num - 1][2] = [1, -0.08];
    },
    out: function (num) {
        this.canvas[num - 1][2] = [0, 0.08];
    },
    addCanvas: function (cnv, ctx) {
        this.canvas.push([cnv, ctx, [1, -0.08]]);
    },
    fade: function (num) {
        let cnv = this.canvas[num - 1][0];
        let ctx = this.canvas[num - 1][1];
        let fade = this.canvas[num - 1][2];
        if (fade[0] > 0 && fade[1] < 0) {
            ctx.globalAlpha = fade[0];
            fade[0] += fade[1];
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            ctx.globalAlpha = 1;
        } else if (fade[0] < 1 && fade[1] > 0) {
            ctx1.globalAlpha = fade[0];
            fade[0] += fade[1];
            ctx1.fillStyle = "black";
            ctx1.fillRect(0, 0, cnv.width, cnv.height);
            ctx1.globalAlpha = 1;
        }
    }
}