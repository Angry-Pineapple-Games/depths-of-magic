var myLevel1 = {
    hero: {},
    enemies: [],
    enemy: {},
    posHero: [0, 0],
    posEnemy: [100, 0],
    rooms: [],
    room: {},
    enemiesMax: 4,
    roomsMax: 3,
    limitTimePerPatron: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        //myGameArea.drawInBackground(1, this.posEnemy, this.enemy.img);
        myGameArea.animateInBackground(1, this.posEnemy, this.enemy.img, this.enemy.currentAnimation);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation);

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

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myTransitionScene = {
    hero: {},
    posHero: [0, 0],
    enemiesMax: 4,
    room: {},
    timeTransition: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        myStatsController.increaseStats(this.hero);
        this.room = myPreload.images["room1"];
        myGameManager.addTimer(myGame.swapScene, this.timeTransition, "timersSwap");
        myFade.in(1);
        myFade.in(2);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation);
        myFade.fade(1);
        myFade.fade(2);
    }
}

var myLevel2 = {
    hero: {},
    enemies: [],
    enemy: {},
    posHero: [0, 0],
    posEnemy: [0, 0],
    rooms: [],
    room: {},
    enemiesMax: 7,
    roomsMax: 6,
    limitTimePerPatron: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        myGameArea.drawInBackground(1, this.posEnemy, this.enemy.img);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation);

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

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myLevel3 = {
    hero: {},
    enemies: [],
    enemy: {},
    posHero: [0, 0],
    posEnemy: [0, 0],
    rooms: [],
    room: {},
    enemiesMax: 10,
    roomsMax: 9,
    limitTimePerPatron: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        myGameArea.drawInBackground(1, this.posEnemy, this.enemy.img);
        myGameArea.animateInBackground(1, this.posHero, this.hero.img, this.hero.currentAnimation);

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

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myGameOver = {


}