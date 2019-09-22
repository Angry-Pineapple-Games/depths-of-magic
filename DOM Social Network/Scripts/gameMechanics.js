/*En este script se establecen las diferentes mecánicas que se puedan dar en el juego*/
var myGameMechanics = {
    traces: [],
    tracks: [],
    lineDecay: 0.02,
    sizeGridX: 4,
    sizeGridY: 4,
    drawTraces: function (ctx2) {
        let that = myGameMechanics;
        that.traces.forEach(trace => {
            ctx2.beginPath();
            ctx2.lineWidth = trace[0][0];
            trace[0][0] -= that.lineDecay;
            ctx2.moveTo(trace[1][0], trace[1][1]);
            for (x=2; x<trace.length; x++) {
                ctx2.lineTo(trace[x][0], trace[x][1]);
            }
            ctx2.stroke();
        });
        if (that.traces.length > 0 && that.traces[0][0][0] <= that.traces[0][0][1]) {
            that.traces.shift();
        }
    }, 
    generateGridRopes: function(gridRopes) {
        gridRopes.forEach(rope => {
            rope[1] = myPreload.images[rope[1]]
        });
    },
    drawRopes: function(gridRopes) {
        myGameArea.drawInBackgroundAGrid(2, this.getPositionRope, gridRopes);
    },
    trackingTraces: function(bg) {
        let that = myGameMechanics;
        that.tracks = [];
        that.traces.forEach(trace => {
            let z = 1;
            let diffPeroneWidth = (bg.width/that.sizeGridX)/bg.width;
            let diffPeroneHeight = (bg.height/that.sizeGridY)/bg.height;
            let newTrack = [];
            while (z<trace.length) {
                let found = false;
                let y = 0;
                while(y<that.sizeGridY && !found) {
                    let x = 0;
                    while(x<that.sizeGridX && !found) {
                        let leftLimit = bg.drawPosX + bg.width*diffPeroneWidth*x;
                        let rightLimit = bg.drawPosX + bg.width*diffPeroneWidth*(x+1);
                        let upLimit = bg.drawPosY + bg.height*diffPeroneHeight*y;
                        let downLimit = bg.drawPosY + bg.height*diffPeroneHeight*(y+1);
                        if((upLimit <= trace[z][1]) && (trace[z][1] <= downLimit)) {
                            if((leftLimit <= trace[z][0]) && (trace[z][0] <= rightLimit)) {
                                let target = x + y * that.sizeGridX
                                if(newTrack[newTrack.length-1] !== target) {
                                    newTrack.push(target);
                                    console.log(that.tracks);
                                }
                                found = true;
                            }
                        }
                        x++;
                    }
                    y++;
                }
                z++;
            }
            that.tracks.push(newTrack);
        });        
    },
    getPositionRope: function(bg, num) {
        switch(num) {
            case 0:
                return [bg.width*0.21875, 0];
            case 1:
                return [bg.width*0.46875, 0];
            case 2:
                return [bg.width*0.71875, 0];
            case 3:
                return [0, bg.height*0.21875];
            case 4:
                return [bg.width*0.25, bg.height*0.21875];
            case 5:
                return [bg.width*0.50, bg.height*0.21875];  
            case 6:
                return [bg.width*0.75, bg.height*0.21875]; 
            case 7:
                return [bg.width*0.21875, bg.height*0.25]; 
            case 8:
                return [bg.width*0.46875, bg.height*0.25];  
            case 9:
                return [bg.width*0.71875, bg.height*0.25];
            case 10:
                return [0, bg.height*0.46875];
            case 11:
                return [bg.width*0.25, bg.height*0.46875];
            case 12:
                return [bg.width*0.50, bg.height*0.46875]; 
            case 13:
                return [bg.width*0.75, bg.height*0.46875];
            case 14:
                return [bg.width*0.21875, bg.width*0.5];  
            case 15:
                return [bg.width*0.46875, bg.width*0.5]; 
            case 16:
                return [bg.width*0.71875, bg.width*0.5];
            case 17:
                return [0, bg.height*0.71875];  
            case 18:
                return [bg.width*0.25, bg.height*0.71875]; 
            case 19:
                return [bg.width*0.50, bg.height*0.71875];
            case 20:
                return [bg.width*0.75, bg.height*0.71875];  
            case 21:
                return [bg.width*0.21875, bg.width*0.75]; 
            case 22:
                return [bg.width*0.46875, bg.width*0.75]; 
            case 23:
                return [bg.width*0.71875, bg.width*0.75];
        }
    }
}