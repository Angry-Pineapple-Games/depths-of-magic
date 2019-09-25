/*En este script se establecen las diferentes mecánicas que se puedan dar en el juego*/
var myGameMechanics = {
    traces: [],//se componen de un primer array con el grosor del trazo y si ya ha sido analizado para su seguimiento
    tracks: [],
    mapTrack: [
        [[1,4],[0,3]],
        [[0,2,5],[0,1,4]],
        [[1,3,6],[1,2,5]],
        [[2,7],[2,6]],
        [[0,5,8],[3,7,10]],
        [[1,4,6,9],[4,7,8,11]],
        [[2,5,7,10],[5,8,9,12]],
        [[3,6,11],[6,9,13]],
        [[4,9,12],[10,14,17]],
        [[5,8,10,13],[11,14,15,18]],
        [[6,9,11,14],[12,15,16,19]],
        [[7,10,15],[13,16,20]],
        [[8,13],[17,21]],
        [[9,12,14],[18,21,22]],
        [[10,13,15],[19,22,23]],
        [[11,14],[20,23]]
    ],
    lineDecay: 0.1,
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
        if (that.traces.length > 0 && that.traces[0][0][0] <= 0) {
            that.traces.shift();
        }
    }, 
    generateGridRopes: function(gridRopes) {
        gridRopes.forEach(rope => {
            if (rope!==undefined) {rope[1] = myPreload.images[rope[1]];}
        });
    },
    drawRopes: function(gridRopes) {
        myGameArea.drawInBackgroundAGrid(2, this.getPositionRope, gridRopes);
    },
    deleteRope: function(gridRopes) { //elimina la cuerda analizando los tracks con el mapa de seguimiento
        while(this.tracks.length > 0){
            let lastPosTrace = this.tracks[0][0];
            for (var x=1; x<this.tracks[0].length; x++) {
                let neighbour = this.mapTrack[lastPosTrace];
                let y=0;
                let ropeFound = false;
                while (y<neighbour[0].length && !ropeFound) {
                    if (neighbour[0][y] === this.tracks[0][x]) {
                        mySceneMechanics.gridRopes0[neighbour[1][y]] = undefined;
                        ropeFound = true;
                    }
                    y++;
                }
                lastPosTrace = this.tracks[0][x];
            }
            this.tracks.shift();
        }
    },
    trackingTraces: function(bg) {
        let that = myGameMechanics;
        that.tracks = [];
        that.traces.forEach(trace => {
            if (trace[0][1] === 0) {
                let z = 1;
                let diffPeroneWidth = (bg.width / that.sizeGridX) / bg.width;
                let diffPeroneHeight = (bg.height / that.sizeGridY) / bg.height;
                let newTrack = [];
                while (z < trace.length) {
                    let found = false;
                    let y = 0;
                    while (y < that.sizeGridY && !found) {
                        let x = 0;
                        while (x < that.sizeGridX && !found) {
                            let leftLimit = bg.drawPosX + bg.width * diffPeroneWidth * x;
                            let rightLimit = bg.drawPosX + bg.width * diffPeroneWidth * (x + 1);
                            let upLimit = bg.drawPosY + bg.height * diffPeroneHeight * y;
                            let downLimit = bg.drawPosY + bg.height * diffPeroneHeight * (y + 1);
                            if ((upLimit <= trace[z][1]) && (trace[z][1] <= downLimit)) {
                                if ((leftLimit <= trace[z][0]) && (trace[z][0] <= rightLimit)) {
                                    let target = x + y * that.sizeGridX
                                    if (newTrack[newTrack.length - 1] !== target) {
                                        newTrack.push(target);
                                        //console.log(that.tracks);
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
                trace[0][1]++;
            }
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