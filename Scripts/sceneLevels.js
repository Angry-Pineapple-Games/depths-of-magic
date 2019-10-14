var myLevel1 = {
    hero: {},
    enemies: [],
    sfx: {},
    enemy: {},
    posHero: [50, 440],
    rooms: [],
    room: {},
    enemiesMax: 4,
    roomsMax: 3,
    limitTimePerPatron: 2300,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        //myGameArea.drawInBackground(1, this.posEnemy, this.enemy.img);
        myGameArea.animateInBackground(1, this.enemy.pos, this.enemy.currentImg, this.enemy.currentAnimation, this.enemy.resize);
        myGameArea.animateInBackground(1, this.posHero, this.hero.currentImg, this.hero.currentAnimation, 2.5);
        myGameArea.animateInBackground(1, this.sfx.pos, this.sfx.currentImg, this.sfx.currentAnimation, 1);
        myTextManager.drawTextInBackground(1, "hp", [0.15, 0.45], "green", 60, "right");
        myTextManager.drawTextInBackground(1, " " + String(this.hero.hp), [0.15, 0.45], "green", 60, "left");

        if (!myInputsManager.blocked) {//si no se permite interactuar con las cuerdas
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "white", 50, "center");
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.25, 0.45], "red", 60, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.75, 0.45], "red", 60, "center", true);
            myTextManager.applyDecay();
        }

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myIntro = {
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(myPreload.images.backgroundBlack, 1);
        //animacion intro
        //cuando termine pasar al siguiente level (ya esta implementado que al soltar el raton se pasa)
        myTextManager.drawTextInBackground(1, "clickToSkip", [0.9, 0.95], "white", 50, "center");
        myFade.fade(1);
    }
}

var myTransitionScene = {
    hero: {},
    posHero: [50, 390],
    enemiesMax: 4,
    room: {},
    timeTransition: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        myStatsController.increaseStats(this.hero);
        this.room = myPreload.images["room1"];
        //myGameManager.addTimer(myGame.swapScene, this.timeTransition, "timersSwap");
        myFade.in(1);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation, 2);

        myTextManager.drawTextInBackground(1, "currentLevel", [0.7, 0.2], "black", 50, "right");
        myTextManager.drawTextInBackground(1, "healthPoints", [0.7, 0.35], "black", 50, "right");
        myTextManager.drawTextInBackground(1, "attackPoints", [0.7, 0.5], "black", 50, "right");
        myTextManager.drawTextInBackground(1, "defensePoints", [0.7, 0.65], "black", 50, "right");
        myTextManager.drawTextInBackground(1, "numberLaps", [0.7, 0.8], "black", 50, "right");
        myTextManager.drawTextInBackground(1, "clickToConinue", [0.9, 0.95], "black", 50, "center");
        myFade.fade(1);
    }
}

var myEnding = {
    displayed: false,
    start: function () {
        if (this.displayed) { myGame.swapScene(); }
        else {
            myGameManager.clearTimers("all");
            myGameArea.editTams(1);
            this.reproduced = true;
        }
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(myPreload.images.backgroundBlack, 1);
        //animacion ending
        //cuando termine pasar al siguiente level (ya esta implementado que al soltar el raton se pasa)
        myTextManager.drawTextInBackground(1, "clickToSkip", [0.9, 0.95], "white", 50, "center");
        myFade.fade(1);
    }
}

var myLevel2 = {
    hero: {},
    enemies: [],
    enemy: {},
    sfx: {},
    posHero: [50, 390],
    rooms: [],
    room: {},
    enemiesMax: 7,
    roomsMax: 6,
    limitTimePerPatron: 2800,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);


        myGameArea.animateInBackground(1, this.enemy.pos, this.enemy.img, this.enemy.currentAnimation, this.enemy.resize);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation, 2);
        myGameArea.animateInBackground(1, this.sfx.pos, this.sfx.currentImg, this.sfx.currentAnimation, 1);
        myTextManager.drawTextInBackground(1, "hp", [0.15, 0.45], "green", 60, "right");
        myTextManager.drawTextInBackground(1, " " + String(this.hero.hp), [0.15, 0.45], "green", 60, "left");

        if (!myInputsManager.blocked) {
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "white", 50, "center");
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.25, 0.45], "red", 60, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.75, 0.45], "red", 60, "center", true);
            myTextManager.applyDecay();
        }

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myLevel3 = {
    hero: {},
    enemies: [],
    enemy: {},
    sfx: {},
    posHero: [50, 390],
    rooms: [],
    room: {},
    enemiesMax: 10,
    roomsMax: 9,
    limitTimePerPatron: 3900,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        myGameArea.animateInBackground(1, this.enemy.pos, this.enemy.img, this.enemy.currentAnimation, this.enemy.resize);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation, 2);
        myGameArea.animateInBackground(1, this.sfx.pos, this.sfx.currentImg, this.sfx.currentAnimation, 1);
        myTextManager.drawTextInBackground(1, "hp", [0.15,0.45], "green", 60, "right");
        myTextManager.drawTextInBackground(1, " "+String(this.hero.hp), [0.15,0.45], "green", 60, "left");

        if (!myInputsManager.blocked) {
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "white", 50, "center");
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.25, 0.45], "red", 60, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.75,0.45], "red", 60, "center", true);
            myTextManager.applyDecay();
        }

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myGameOver = {
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        myHeroCharacter.resetHeroStats();
        myStatsController.resetLoops();
        myStatsController.resetIncreaseStats();
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(myPreload.images.backgroundBlack, 1);
        myTextManager.drawTextInBackground(1, "gameOver", [0.5, 0.1], "white", 100, "center");
        myTextManager.drawTextInBackground(1, "thanks", [0.5, 0.5], "white", 60, "center");
        myTextManager.drawTextInBackground(1, "clickToRestart", [0.9, 0.95], "black", 50, "center");
        myFade.fade(1);
    }
}