/*En este script se establecen las diferentes mecánicas que se puedan dar en el juego*/
var myGameMechanics = {
    debug: false,
    traces: [],//se componen de un primer array con el grosor del trazo y si ya ha sido analizado para su seguimiento
    tracks: [],
    mapTrack: [ //mapa de caminos para detectar y seleccionar las cuerdas cortadas
        [[1, 4], [0, 3]],
        [[0, 2, 5], [0, 1, 4]],
        [[1, 3, 6], [1, 2, 5]],
        [[2, 7], [2, 6]],
        [[0, 5, 8], [3, 7, 10]],
        [[1, 4, 6, 9], [4, 7, 8, 11]],
        [[2, 5, 7, 10], [5, 8, 9, 12]],
        [[3, 6, 11], [6, 9, 13]],
        [[4, 9, 12], [10, 14, 17]],
        [[5, 8, 10, 13], [11, 14, 15, 18]],
        [[6, 9, 11, 14], [12, 15, 16, 19]],
        [[7, 10, 15], [13, 16, 20]],
        [[8, 13], [17, 21]],
        [[9, 12, 14], [18, 21, 22]],
        [[10, 13, 15], [19, 22, 23]],
        [[11, 14], [20, 23]]
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
            for (x = 2; x < trace.length; x++) {
                ctx2.lineTo(trace[x][0], trace[x][1]);
            }
            ctx2.stroke();
        });
        if (that.traces.length > 0 && that.traces[0][0][0] <= 0) {
            that.traces.shift();
        }
    },
    generateGridRopes: function (enemy) {//coge un nuevo grid aleatorio y lo pinta, contando el número de cuerdas totales
        enemy.gridRopeNow = Math.floor(Math.random() * enemy.gridRopes.length);
        enemy.gridRopes[enemy.gridRopeNow].forEach(function (rope) {
            if (typeof rope[2] === "string") {
                rope[2] = myPreload.images[rope[2]];
                myCombatMechanics.totalRopes++;
            } else if (rope[0] === -1) {
                rope[0] = 0;
            }
        });
    },
    generateEnemy: function (enemies, enemiesMax, nEnemies) {
        let nextEnemy = enemies[Math.floor(Math.random() * nEnemies)];
        if (myRoomMechanics.countSwaps === myRoomMechanics.nRooms && myCombatMechanics.countCombats === nEnemies) {
            nextEnemy = enemies[enemiesMax -1];
        }
        nextEnemy.hp = nextEnemy.hpMax;
        nextEnemy.buf = 0;
        return nextEnemy;
    },
    generateRooms: function (roomsMax) {
        let rooms = [];
        for (var r = 0; r < roomsMax; r++) {
            rooms.push(myPreload.images['room' + String(r)]);
        }
        return rooms;
    },
    drawRopes: function (gridRopes) { //pinta las cuerdas en función del tamaño de la imagen de fondo
        myGameArea.drawInBackgroundAGrid(2, this.getPositionRope, gridRopes);
    },
    deleteRope: function (gridRope) { //elimina la cuerda analizando los tracks con el mapa de seguimiento
        while (this.tracks.length > 0) {//mientras existan trazos
            let lastPosTrace = this.tracks[0][0];
            let concatenatedCuts = 0;
            for (var x = 1; x < this.tracks[0].length; x++) {//recorro el trazo realizado
                let neighbour = this.mapTrack[lastPosTrace];
                let y = 0;
                let ropeFound = false;
                while (y < neighbour[0].length && !ropeFound) {//recorro los vecinos posibles
                    let z = 0;
                    while (z < gridRope.length && !ropeFound) {//recorro las cuerdas
                        if (gridRope[z][1] === neighbour[1][y] && neighbour[0][y] === this.tracks[0][x]) {
                            if (myCutMechanics.checkRopeType(gridRope, z, this.tracks[0], x)) { concatenatedCuts++; }
                            else { myCutMechanics.concatenatedCuts = 0; }
                            ropeFound = true;
                        }
                        z++;
                    }
                    y++;
                }
                lastPosTrace = this.tracks[0][x];
            }
            myCutMechanics.checkConcatenateCut(concatenatedCuts);
            this.tracks.shift();
        }
    },
    trackingTraces: function (bg) { //seguimiento del trazo y registro
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
    getPositionRope: function (bg, num) { //posicion de las cuerdas dentro de la imagen de fondo
        switch (num) {
            case 0:
                return [bg.width * 0.21875, 0];
            case 1:
                return [bg.width * 0.46875, 0];
            case 2:
                return [bg.width * 0.71875, 0];
            case 3:
                return [0, bg.height * 0.21875];
            case 4:
                return [bg.width * 0.25, bg.height * 0.21875];
            case 5:
                return [bg.width * 0.50, bg.height * 0.21875];
            case 6:
                return [bg.width * 0.75, bg.height * 0.21875];
            case 7:
                return [bg.width * 0.21875, bg.height * 0.25];
            case 8:
                return [bg.width * 0.46875, bg.height * 0.25];
            case 9:
                return [bg.width * 0.71875, bg.height * 0.25];
            case 10:
                return [0, bg.height * 0.46875];
            case 11:
                return [bg.width * 0.25, bg.height * 0.46875];
            case 12:
                return [bg.width * 0.50, bg.height * 0.46875];
            case 13:
                return [bg.width * 0.75, bg.height * 0.46875];
            case 14:
                return [bg.width * 0.21875, bg.width * 0.5];
            case 15:
                return [bg.width * 0.46875, bg.width * 0.5];
            case 16:
                return [bg.width * 0.71875, bg.width * 0.5];
            case 17:
                return [0, bg.height * 0.71875];
            case 18:
                return [bg.width * 0.25, bg.height * 0.71875];
            case 19:
                return [bg.width * 0.50, bg.height * 0.71875];
            case 20:
                return [bg.width * 0.75, bg.height * 0.71875];
            case 21:
                return [bg.width * 0.21875, bg.width * 0.75];
            case 22:
                return [bg.width * 0.46875, bg.width * 0.75];
            case 23:
                return [bg.width * 0.71875, bg.width * 0.75];
            default:
                console.log("Fail gameMechanic/myGameMechanic/getpositionrope")
                break;
        }
    }
}

var myCombatMechanics = {
    debug: false,
    countSwaps: 0,
    countCombats: 0,
    patronsPerEnemy: 3,
    nEnemies: 3,
    scene: {},
    startCombat: function (scene) {
        this.scene = scene;
        this.countSwaps = 0;
        this.countCombats = 0;
        this.swapEnemy();
    },
    swapPattern: function () {
        myCutMechanics.cutRopes = 0;
        myCutMechanics.totalRopes = 0;
        myCutMechanics.concatenatedCuts = 0;
        myGameMechanics.generateGridRopes(this.scene.enemy);
        myGameManager.addTimer(this.updateState, this.scene.limitTimePerPatron);
        if (this.debug) { console.log("SwapPattern"); }
    },
    swapEnemy: function () {
        this.countSwaps = 0;
        if (this.countCombats++ < this.nEnemies) {
            this.scene.enemy = myGameMechanics.generateEnemy(this.scene.enemies, this.scene.enemiesMax, this.nEnemies);
            if (this.debug) { console.log("SwapEnemy"); }
            this.swapPattern();
        }
        else {
            myGameManager.clearTimers();
            myRoomMechanics.swapRoom();
        }
    },
    updateState: function () {
        that = myCombatMechanics;
        if (that.scene.hero.hp <= 0) { myGame.gameOver(); }
        else if (that.scene.enemy.hp <= 0) { that.swapEnemy(); }
        //correspondiente animacion y cuando termine que llame a swapPattern el y eliminar la linea de abajo
        else if (++that.countSwaps < that.patronsPerEnemy) { that.swapPattern(); }
        else { that.swapEnemy(); }
    }
}

var myRoomMechanics = {
    debug: false,
    scene: {},
    countSwaps: 0,
    nRooms: 3,
    startRoom: function (scene) {
        this.scene = scene;
        this.countSwaps = 0;
        this.swapRoom();
    },
    swapRoom: function () {
        this.scene.hero.buf = 0;
        if (this.countSwaps++ < this.nRooms) {
            this.scene.room = this.scene.rooms[Math.floor(Math.random() * this.scene.roomsMax)];
            if (this.debug) { console.log("SwapRoom"); }
            myCombatMechanics.startCombat(this.scene);
        } else { myGame.swapScene(); }
    }
}

var myCutMechanics = {
    debug: false,
    cutRopes: 0,
    totalRopes: 0,
    concatenatedCuts: 0,
    rope: {},
    gridRope: {},
    lastPosTrace: 0,
    posTrace: 0,
    nextPosTrace: 0,
    checkRopeType: function (gridRope, posRopeInGrid, track, x) {
        this.gridRope = gridRope;
        this.rope = gridRope[posRopeInGrid];
        this.lastPosTrace = track[x - 1];
        this.posTrace = track[x];
        this.nextPosTrace = (x + 1 === track.length) ? -1 : track[x + 1];
        switch (this.rope[3]) {
            case 0:
                return this.checkSimpleCut();
            case 1:
                return this.checkDoubleCut();
            case 2:
                return this.checkDirectionalCut(-1);
            case 3:
                return this.checkDirectionalCut(1);
            case 4:
                return this.checkCutInOrder();
        }
    },
    checkSimpleCut: function () {
        this.rope[0] = -1;
        this.cutRopes++;
        return true;
    },
    checkDoubleCut: function () {
        if (this.lastPosTrace === this.nextPosTrace) {
            this.rope[0] = -1;
            this.cutRopes++;
            return true;
        }
        return false;
    },
    checkDirectionalCut: function (dir) {
        if (this.posTrace - this.lastPosTrace < 0 && dir < 0) {
            this.rope[0] = -1;
            this.cutRopes++;
            return true;
        } else if (this.posTrace - this.lastPosTrace > 0 && dir > 0) {
            this.rope[0] = -1;
            this.cutRopes++;
            return true;
        }
        return false;

    },
    checkCutInOrder: function () {
        if (this.cutRopes - 1 === this.posRopeInGrid) {
            this.rope[0] = -1;
            this.cutRopes++;
            return true;
        }
        return false;
    },
    checkConcatenateCut: function (concatenatedCuts) {
        if (concatenatedCuts > 1) { this.concatenatedCuts += concatenatedCuts; }
    }
}