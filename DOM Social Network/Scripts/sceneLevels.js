var myLevel1 = {
    hero: {},
    enemies: [],
    enemy: {},
    posHero: [0,0],
    posEnemy: [0,0],
    rooms : [],
    room : {},
    enemiesMax: 3,
    roomsMax: 3,
    limitTimePerPatron : 8000,
    start: function () {
        this.hero = myHeroCharacter.generateHero(myPreload.images.hero);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.enemy = myGameMechanics.generateEnemy(this.enemies, this.enemiesMax);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        //cambio de estado

        //dibujado
        myGameArea.resizeBackground(this.room, cnv1, ctx1, 1);
        if (typeof this.enemy.img === "undefined"){
            console.log("Fallo");
        }
        myGameArea.drawInBackground(1, this.posHero, this.hero.img);
        myGameArea.drawInBackground(1, this.posEnemy, this.enemy.img);

        myGameArea.resizeBackground(myPreload.images.grid, cnv2, ctx2, 2);
        myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
        myGameMechanics.trackingTraces(myGameArea.background2);
        myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
    }
}

var myGameOver = {
    
}