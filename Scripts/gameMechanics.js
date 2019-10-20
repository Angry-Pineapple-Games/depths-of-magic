/*En este script se establecen las diferentes mecánicas que se puedan dar en el juego*/
var myGameMechanics = {
    debug: false,
    timeOrder: 0,
    traces: [],//se componen de un primer array con el grosor del trazo y si ya ha sido analizado para su seguimiento
    tracks: [],
    gridRopes: {},
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
            if(!myInputsManager.blocked) {ctx2.stroke();}
            else {ctx2.beginPath(); ctx2.stroke();}
        });
        if (that.traces.length > 0 && that.traces[0][0][0] <= 0) {
            that.traces.shift();
        }
    },
    generateArrayRandomOrder: function (max, enemies=false, min=0) {
        if(enemies) {max--;}
        let _array = [];
        for(var i=min; i<max; i++) {
            _array.push(i);
        }
        let _aux, _idx;
        for(var j=0; j<_array.length-2; j++) {
            let ran = Math.random();
            _idx = j+1 + Math.round(ran % (max - j));
            _aux = _array[_idx];
            _array[_idx] = _array[j];
            _array[j] = _aux;
        }
        if(enemies) {_array.push(max);}
        return _array;
    },
    generateGridRopes: function (enemy) {//coge un nuevo grid aleatorio y lo pinta, contando el número de cuerdas totales y modificando los stats
        enemy.gridRopeNow = myCombatMechanics.patternsRandomArray.shift();
        myCombatMechanics.patternsRandomArray.push(enemy.gridRopeNow);
        myStatsController.reset(enemy.gridRopes[enemy.gridRopeNow]);
        enemy.gridRopes[enemy.gridRopeNow].forEach(function (rope) {
            if (typeof rope[2] === "string") {//si es un string en vez de una imagen
                rope[2] = myPreload.images[rope[2]];
                myCutMechanics.totalRopes++;
            } else if (rope[0] === -1) {//si la cuerda ya esta pintada
                rope[0] = 0;
            }
        });
        this.gridRopes = enemy.gridRopes[enemy.gridRopeNow];
        if (this.gridRopes[0][3] === 1) { //si es una cuerda especial
            this.un_blockInputs();
            myGame.scenes[myGame.scene].orderRopesEvent = true;
            myGameManager.pauseTimers("timersSwap");
            this.generateGridWithOrder();
        } else {
            myFade.addImage(myPreload.images.gridBlocked, "gridBlocked", Date.now(), 2)
        }
    },
    generateGridWithOrder: function () {
        if (this.timeOrder < this.gridRopes.length) {
            for (let g = 0; g < this.gridRopes.length; g++) {
                if (g !== this.timeOrder) {
                    this.gridRopes[g][0] = -1;
                } else { this.gridRopes[g][0] = 0; }
            }
            myGameManager.addTimer(this.timeOrderAddOne, 2000, "timersOrderPattern");
        } else if (this.timeOrder === this.gridRopes.length) {
            for (let g = 0; g < this.gridRopes.length; g++) {
                this.gridRopes[g][0] = 0;
            }
            this.timeOrderAddOne();
            myGameManager.addTimer(this.un_blockInputs, 2000, "timersOrderPattern");
        }
    },
    generateEnemy: function (enemies, enemiesMax, nEnemies) {
        let nextEnemy = enemies[myRoomMechanics.enemiesRandomArray.shift()];
        if (myRoomMechanics.countSwaps === myRoomMechanics.nRooms && myCombatMechanics.countCombats === nEnemies) {
            mySoundManager.stopSound("menu");
            mySoundManager.startSound("boss", true, 0.5);
            nextEnemy = enemies[enemiesMax - 1];
        }
        nextEnemy.hp = nextEnemy.hpMax;
        nextEnemy.buff = 0;
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
    timeOrderAddOne: function () {
        let that = myGameMechanics;
        if (that.debug) { console.log("TimeOrderAddone"); }
        that.timeOrder++;
        that.generateGridWithOrder();
    },
    un_blockInputs: function () {
        let that = myGameMechanics;
        if (!myInputsManager.blocked) {
            if (that.debug) { console.log("blockInputs"); }
            myInputsManager.blocked = true;
        }
        else {
            if (that.debug) { console.log("unblockInputs"); }
            myInputsManager.blocked = false;
            myGameManager.resumeTimers("timersSwap");
            myGameManager.clearTimers("timersOrderPattern");
            myFade.addImage(myPreload.images.gridBlocked, "gridBlocked", Date.now(), 2)
            myGame.scenes[myGame.scene].orderRopesEvent = false;
        }
    },
    deleteRope: function (gridRope) { //elimina la cuerda analizando los tracks con el mapa de seguimiento
        let playSound = false;
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
                            if (myCutMechanics.checkRopeType(gridRope, z, this.tracks[0], x)) {
                                myStatsController.updateStats(gridRope[z]);
                                concatenatedCuts++;
                            }
                            ropeFound = true;
                            playSound = true;
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
        if(playSound){
            mySoundManager.startSound("chain_cut", false, 0.4);
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
    patternsPerEnemy: 4,
    patternsRandomArray: [],
    nEnemies: 3,
    scene: {},
    startCombat: function (scene) {
        this.scene = scene;
        this.countSwaps = 0;
        this.countCombats = 0;
        this.swapEnemy();
    },
    swapPattern: function () {
        myFade.in(2);
        myCutMechanics.cutRopes = 0;
        myCutMechanics.totalRopes = 0;
        myCutMechanics.concatenatedCuts = 1;
        myGameMechanics.timeOrder = 0;
        if (this.countSwaps++ === 0) {myGameManager.addTimer(this.updateState, this.scene.limitTimePerPatron + 500, "timersSwap");}
        else {myGameManager.addTimer(this.updateState, this.scene.limitTimePerPatron, "timersSwap");}
        myGameMechanics.generateGridRopes(this.scene.enemy);
        if (this.debug) { console.log("SwapPattern"); }
    },
    swapEnemy: function () {
        myFade.in(1);
        this.countSwaps = 0;
        this.patternsRandomArray = myGameMechanics.generateArrayRandomOrder(this.patternsPerEnemy);
        mySoundManager.startSound("bassBell", false, 0.8);
        if (this.countCombats++ < this.nEnemies) {
            this.scene.enemy = myGameMechanics.generateEnemy(this.scene.enemies, this.scene.enemiesMax, this.nEnemies);
            if (this.debug) { console.log("SwapEnemy"); }
            this.swapPattern();
        }
        else {
            myGameManager.clearTimers("timersSwap");
            myRoomMechanics.swapRoom();
        }
    },
    updateState: function () {
        that = myCombatMechanics;
        myStatsController.applyStats(that.scene.hero, that.scene.enemy);
        let sfxSequenceHero = [];
        let sfxSequenceEnemy = [];

        if(myStatsController.buff > 0){
            that.scene.showBuffHero = true;
            sfxSequenceHero.push(["buff", that.scene.posHero]);
        }
        if(myStatsController.buff < myStatsController.totalBuff){
            that.scene.showBuffEnemy = true;
            sfxSequenceEnemy.push(["buff", [that.scene.enemy.pos[0] + that.scene.enemy.sfxPos[0], that.scene.enemy.pos[1] + that.scene.enemy.sfxPos[1]]]);
        }
        if(myStatsController.debuff > 0){
            that.scene.showDebuffEnemy = true;
            sfxSequenceHero.push(["debuff", [that.scene.enemy.pos[0] + that.scene.enemy.sfxPos[0], that.scene.enemy.pos[1] + that.scene.enemy.sfxPos[1]]]);
        }
        if(myStatsController.debuff < myStatsController.totalDebuff){
            that.scene.showDebuffHero = true;
            sfxSequenceEnemy.push(["debuff", that.scene.posHero]);
        }
        if(myStatsController.counter > 0){
            sfxSequenceHero.push(["damage", [that.scene.enemy.pos[0] + that.scene.enemy.sfxPos[0], that.scene.enemy.pos[1] + that.scene.enemy.sfxPos[1]]]);
        }
        if(myStatsController.counter < myStatsController.totalCounter){
            sfxSequenceEnemy.push(["damage", that.scene.posHero]);
        }
        if(myStatsController.heal > 0){
            sfxSequenceEnemy.push(["heal", [that.scene.enemy.pos[0] + that.scene.enemy.sfxPos[0], that.scene.enemy.pos[1] + that.scene.enemy.sfxPos[1]]]);
        }
        if(myStatsController.heal < myStatsController.totalHeal){
            sfxSequenceHero.push(["heal", that.scene.posHero]);
        }
         
        myGameMechanics.un_blockInputs();
        if (that.scene.hero.hp <= 0) {
            //Secuencia: 1. enemigo ataca, 2. enemigo vuelve a idle y heroe muere 3. game over
            mySoundManager.startSound(that.scene.enemy.img, false, 0.5);
            myAnimManager.changeAnimation(that.scene.enemy, "attack", function () {
                myAnimManager.changeAnimation(that.scene.enemy, "idle");
                myAnimManager.playSequenceSFX(sfxSequenceEnemy, that.scene.sfx, function(){
                    myAnimManager.changeAnimation(that.scene.hero, "death", function () {
                        myAnimManager.changeAnimation(that.scene.hero, "idle");
                        myGameMechanics.un_blockInputs();
                        that.scene.showBuffHero = false;
                        that.scene.showDebuffHero = false;
                        that.scene.showBuffEnemy = false;
                        that.scene.showDebuffEnemy = false;
                        myGame.gameOver();
                    });
                });
            });
        }
        else if (that.scene.enemy.hp <= 0) {
            //Secuencia: 1. heroe ataca, 2. enemigo muere y heroe celebra victoria, 3. cambio de enemigo
            mySoundManager.startSound("hero_attack", false, 0.3);
            myAnimManager.changeAnimation(that.scene.hero, "attack", function () {
                myAnimManager.changeAnimation(that.scene.hero, "idle");
                myAnimManager.playSequenceSFX(sfxSequenceHero, that.scene.sfx, function(){
                    myAnimManager.changeAnimation(that.scene.hero, "victory", function () {
                        myAnimManager.changeAnimation(that.scene.hero, "idle");
                    });
                    myAnimManager.changeAnimation(that.scene.enemy, "damage", function () {
                        if(that.scene.enemy.name !== "The Abyss"){
                            mySoundManager.startSound(that.scene.enemy.img, false, 0.5);
                        } else{
                            mySoundManager.startSound("enemy9_death", false, 0.3);
                        }
                        myAnimManager.changeAnimation(that.scene.enemy, "death", function () {
                            //Si es el jefe final, reproduce su animacion de muerte entera
                            if(that.scene.enemy.name !== "The Abyss"){
                                myAnimManager.changeAnimation(that.scene.enemy, "idle");
                                myAnimManager.changeAnimation(that.scene.hero, "idle");
                                myGameMechanics.un_blockInputs();
                                myScoreManager.currentScore += that.scene.enemy.defeatScore;
                                that.scene.showBuffHero = false;
                                that.scene.showDebuffHero = false;
                                that.scene.showBuffEnemy = false;
                                that.scene.showDebuffEnemy = false;
                                that.swapEnemy();
                            }else{
                                myAnimManager.changeAnimation(that.scene.enemy, "death2", function () {
                                    myAnimManager.changeAnimation(that.scene.enemy, "death3", function () {
                                        myAnimManager.changeAnimation(that.scene.enemy, "death4", function () {
                                            myAnimManager.changeAnimation(that.scene.enemy, "death5", function () {
                                                myAnimManager.changeAnimation(that.scene.enemy, "idle");
                                                myAnimManager.changeAnimation(that.scene.hero, "idle");
                                                myGameMechanics.un_blockInputs();
                                                myScoreManager.currentScore += that.scene.enemy.defeatScore;
                                                that.scene.showBuffHero = false;
                                                that.scene.showDebuffHero = false;
                                                that.scene.showBuffEnemy = false;
                                                that.scene.showDebuffEnemy = false;
                                                that.swapEnemy();
                                            });
                                        });
                                    });
                                });
                            }
                            
                    });
                });
            });
        });
        }
        else if (sfxSequenceEnemy.length <= 0) {
            //Secuencia:1. heroe ataca, 2. heroe vuelve a idle y se reproduce la secuencia de efectos, 3. enemigo recibe daño
            mySoundManager.startSound("hero_attack", false, 0.3);
            myAnimManager.changeAnimation(that.scene.hero, "attack", function () {
                myAnimManager.changeAnimation(that.scene.hero, "idle");
                myAnimManager.playSequenceSFX(sfxSequenceHero, that.scene.sfx, function(){
                    myAnimManager.changeAnimation(that.scene.enemy, "damage", function () {
                        myAnimManager.changeAnimation(that.scene.enemy, "idle");
                        myGameMechanics.un_blockInputs();
                        that.scene.showBuffHero = false;
                        that.scene.showDebuffHero = false;
                        that.scene.showBuffEnemy = false;
                        that.scene.showDebuffEnemy = false;
                        that.swapPattern();
                    });
                });
            });
        }
        else if (sfxSequenceHero.length > 0) {
            //Secuencia: 1. heroe ataca, 2. heroe vuelve a idle, se reproduce la secuencia de efectos, 3. enemigo recibe daño
            //4. enemigo ataca, 5. enemigo vuelve al idle, se reproduce la secuencia de efectos, 6. heroe recibe daño, 
            //7. heroe vuelve al idle, cambio de patron.
            mySoundManager.startSound("hero_attack", false, 0.3);
            myAnimManager.changeAnimation(that.scene.hero, "attack", function () {
                myAnimManager.changeAnimation(that.scene.hero, "idle");
                myAnimManager.playSequenceSFX(sfxSequenceHero, that.scene.sfx, function(){
                    myAnimManager.changeAnimation(that.scene.enemy, "damage", function () {
                        mySoundManager.startSound(that.scene.enemy.img, false, 0.5);
                        myAnimManager.changeAnimation(that.scene.enemy, "attack", function () {
                            myAnimManager.changeAnimation(that.scene.enemy, "idle");
                            myAnimManager.playSequenceSFX(sfxSequenceEnemy, that.scene.sfx, function(){
                                mySoundManager.startSound("hero_damage", false, 0.3);
                                myAnimManager.changeAnimation(that.scene.hero, "damage", function () {
                                    myAnimManager.changeAnimation(that.scene.hero, "idle");
                                    myGameMechanics.un_blockInputs();
                                    that.scene.showBuffHero = false;
                                    that.scene.showDebuffHero = false;
                                    that.scene.showBuffEnemy = false;
                                    that.scene.showDebuffEnemy = false;
                                    that.swapPattern();
                                });
                            });
                        });
                    });
                }); 
            });
        } else {
            //Secuencia: 1.enemigo ataca,2. enemigo vuelve a idle y se reproduce la secuencia de efectos, 3. heroe recibe daño
            //3. heroe vuelve a idle y se cambia el patron
            mySoundManager.startSound(that.scene.enemy.img, false, 0.5);
            myAnimManager.changeAnimation(that.scene.enemy, "attack", function () {
                myAnimManager.changeAnimation(that.scene.enemy, "idle");
                myAnimManager.playSequenceSFX(sfxSequenceEnemy, that.scene.sfx, function(){
                    mySoundManager.startSound("hero_damage", false, 0.3);
                    myAnimManager.changeAnimation(that.scene.hero, "damage", function () {
                        myAnimManager.changeAnimation(that.scene.hero, "idle");
                        myGameMechanics.un_blockInputs();
                        that.scene.showBuffHero = false;
                        that.scene.showDebuffHero = false;
                        that.scene.showBuffEnemy = false;
                        that.scene.showDebuffEnemy = false;
                        that.swapPattern();
                    });
                });
            });
        }
    }
}

var myRoomMechanics = {
    debug: false,
    scene: {},
    countSwaps: 0,
    enemiesRandomArray: [],
    nRooms: 3,
    startRoom: function (scene) {
        this.scene = scene;
        this.countSwaps = 0;
        this.swapRoom();
    },
    swapRoom: function () {
        myFade.in(1);
        myFade.in(2);
        this.scene.hero.buff = 0;
        this.enemiesRandomArray = myGameMechanics.generateArrayRandomOrder(this.scene.enemiesMax, true, this.scene.enemiesMin);
        if (this.countSwaps++ < this.nRooms) {
            this.scene.room = this.scene.rooms[this.scene.roomsMin + this.countSwaps-1];
            if (this.debug) { console.log("SwapRoom"); }
            myCombatMechanics.startCombat(this.scene);
        } else { myGame.swapScene(); }
    }
}

var myCutMechanics = {
    debug: false,
    cutRopes: 0,
    totalRopes: 0,
    concatenatedCuts: 1,
    rope: {},
    gridRope: {},
    lastPosTrace: 0,
    posTrace: 0,
    nextPosTrace: 0,
    checkRopeType: function (gridRope, posRopeInGrid, track, x) {
        this.gridRope = gridRope;
        this.rope = gridRope[posRopeInGrid];
        if (this.rope[0] === 0) {
            this.lastPosTrace = track[x - 1];
            this.posTrace = track[x];
            this.nextPosTrace = (x + 1 === track.length) ? -1 : track[x + 1];
            if (this.rope[3] === 0) { return this.checkCutType(); }
            else if (this.rope[3] === 1) { return this.checkCutInOrder(posRopeInGrid); }
            else { console.log("Fail gamemechanics/mycutmechanics/checkRopeType"); }
        } else { return false; }
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
    checkCutType: function () {
        if (this.rope[4] === 0) { return this.checkSimpleCut(); }
        else if (this.rope[4] === 1) { return this.checkDoubleCut(); }
        else if (this.rope[4] === 2) { return this.checkDirectionalCut(-1); }
        else if (this.rope[4] === 3) { return this.checkDirectionalCut(1); }
        else { console.log("Fail gamemechanics/mycutmechanics/checkcuttype"); }
    },
    checkCutInOrder: function (posRope) {
        if (this.cutRopes === posRope) {
            return this.checkCutType();
        }
        return false;
    },
    checkConcatenateCut: function (concatenatedCuts) {
        if (concatenatedCuts > 1) { this.concatenatedCuts += concatenatedCuts; }
    }
}

var myStatsController = {
    debug: false,
    loops: 0,//vueltas dadas al juego
    loopfactor: 0.4,//factor de mejora enemigos en cada vuelta al juego
    increaseFactor: 5,//factor de mejora para las estadisticas del heroe
    counter: 0,
    counterCounter: 0,
    totalCounter: 0,
    buff: 0,
    buffFactor: 0.45,
    counterBuff: 0,
    totalBuff: 0,
    debuff: 0,
    debuffFactor: 0.25,
    counterDebuff: 0,
    totalDebuff: 0,
    heal: 0,
    healNoCutsCounter: 0,
    healFactor: 6.0,
    totalHeal: 0,
    heroFactor: 4.0,//Variable de balanceo. Cuando sea definitivo se cambian los stats y se elimina esta variable
    enemyFactor: 8.0,//Variable de balanceo. Cuando sea definitivo se cambian los stats y se elimina esta variable
    concatenationFactor: 0.35,
    resetLoops: function () {
        this.loops = 0;
    },
    reset: function (pattern) {//resetea las variables
        this.counter = 0;
        this.buff = 0;
        this.debuff = 0;
        this.heal = 0;
        this.totalCounter = 0;
        this.totalBuff = 0;
        this.totalDebuff = 0;
        this.totalHeal = 0;
        for (var idx = 0; idx < pattern.length; idx++) {
            if (pattern[idx][5] === 0) { this.totalCounter++; }
            else if (pattern[idx][5] === 1) { this.totalBuff++; }
            else if (pattern[idx][5] === 2) { this.totalDebuff++; }
            else if (pattern[idx][5] === 3) { this.totalHeal++; }
            else if (pattern[idx][5] === 4) { this.totalPower++; }
        }
    },
    updateStats: function (rope) {//actualiza los contenedores
        if (rope[5] === 0) { this.counter++; this.counterCounter++; }
        else if (rope[5] === 1) { this.buff++; this.counterBuff++; }
        else if (rope[5] === 2) { this.debuff++; this.counterDebuff++; }
        else if (rope[5] === 3) { this.heal++; }
        else if (rope[5] === 4) { this.counterCounter++; this.counterBuff++; this.counterDebuff++; this.counterHeal++;}
    },
    increaseStats: function (hero) {//incrementa las estadisticas
        hero.hpMax += this.increaseFactor * this.healNoCutsCounter;
        this.healNoCutsCounter = 0;
        hero.ap += this.increaseFactor * this.counterCounter;
        this.counterCounter = 0;
        hero.dp += this.increaseFactor * (this.counterBuff + this.counterDebuff);
        this.counterBuff = 0;
        this.counterDebuff = 0;
    },
    resetStats: function (hero) {
        this.healNoCutsCounter = 0;
        this.counterCounter = 0;
        this.counterBuff = 0;
        this.counterDebuff = 0;
        hero.hp = hero.hpIni;
        hero.hpMax = hero.hpIni;
        hero.ap = hero.apMax;
        hero.dp = hero.dpMax;
    },
    applyStats: function (hero, enemy) {//aplica los daños y curaciones
        hero.buff = (1 + this.buff * this.buffFactor) / (1 + (this.totalDebuff - this.debuff) * this.debuffFactor);
        enemy.buff = (1 + (this.totalBuff - this.buff) * this.buffFactor) / (1 + this.debuff * this.debuffFactor);

        hero.damage = Math.trunc((this.totalCounter - this.counter) * enemy.ap * this.enemyFactor * enemy.buff * (1 + (this.loops * this.loopfactor)) / (hero.dp * hero.buff));
        hero.hp = Math.trunc(hero.hp - hero.damage);
        if (myCutMechanics.concatenatedCuts > 1) { this.concatenationFactor = 0.35; } else { this.concatenationFactor = 1; }
        enemy.damage = Math.trunc((this.counter * (hero.ap * this.heroFactor * hero.buff * myCutMechanics.concatenatedCuts * this.concatenationFactor)) / (enemy.dp * enemy.buff * (1 + (this.loops * this.loopfactor))));
        enemy.hp = Math.trunc(enemy.hp - enemy.damage);

        this.healNoCutsCounter += this.totalHeal - this.heal;
        hero.healing = Math.trunc((this.totalHeal - this.heal) * this.healFactor);
        hero.hp += hero.healing;
        if (hero.hp > hero.hpMax) { hero.hp = hero.hpMax; }
        if (hero.hp < 0) { hero.hp = 0; }
        enemy.healing = Math.trunc(this.heal * this.healFactor);
        enemy.hp += enemy.healing;
        if (enemy.hp > enemy.hpMax) { enemy.hp = enemy.hpMax; }

        myTextManager.resetEventualText();

        if (this.debug) { console.log("applyStats"); }
    }
}