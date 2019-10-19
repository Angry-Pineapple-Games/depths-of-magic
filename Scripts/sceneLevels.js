var myLevel1 = {
    hero: {},
    enemies: [],
    sfx: {},
    enemy: {},
    posHero: [50, 440],
    rooms: [],
    room: {},
    enemiesMin: 0,
    enemiesMax: 4,
    enemiesRandom: [],
    orderRopesEvent: false,
    showBuffHero: false,
    showBuffEnemy: false,
    showDebuffHero: false,
    showDebuffEnemy: false,
    roomsMin: 0,
    roomsMax: 3,
    limitTimePerPatron: 2300,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(1);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myFade.clearImage();
        mySoundManager.startSound("menu", true, 0.5);
        mySoundManager.stopSound("intro1");
        mySoundManager.stopSound("intro2");
        mySoundManager.stopSound("ending1");
        mySoundManager.stopSound("ending2");
        mySoundManager.stopSound("boss");
        myRoomMechanics.startRoom(this);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);

        myGameArea.animateInBackground(1, this.enemy.pos, this.enemy.currentImg, this.enemy.currentAnimation, this.enemy.resize);
        myGameArea.animateInBackground(1, this.posHero, this.hero.currentImg, this.hero.currentAnimation, 2.5);
        myGameArea.animateInBackground(1, this.sfx.pos, this.sfx.currentImg, this.sfx.currentAnimation, 1);
        myGameArea.drawInBackground(1, [0.18, 0.94], myPreload.images.health_icon);
        myTextManager.drawTextInBackground(1, "", [0.22, 0.986], String(this.hero.hp), "#65fe08", 80, "left");
        myTextManager.drawTextInBackground(1, "roomCombat", [0.02, 0.05], String(myRoomMechanics.countSwaps) + " - " + String(myCombatMechanics.countCombats), "#00f9ff", 80, "left");
        myTextManager.drawTextInBackground(1, "score", [0.98, 0.05], String(myScoreManager.currentScore), "#00f9ff", 80, "right");

        if (this.showBuffHero && this.showDebuffHero) {//si el heroe ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.03, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffHero) {//si solo buff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffHero) {//si solo debuff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        }

        if (this.showBuffEnemy && this.showDebuffEnemy) {//si el enemigo ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.82, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffEnemy) {//si solo buff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffEnemy) {//si solo debuff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        }

        if (!myInputsManager.blocked) {//si se permite interactuar con las cuerdas
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myFade.fadeOutImage("gridBlocked", [0, 0], Date.now(), this.limitTimePerPatron)
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myTextManager.drawTextInBackground(2, "cut", [0.5, 0.43], "", "black", 80, "center", true, 0.5);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            if (this.orderRopesEvent) { myTextManager.drawTextInBackground(2, "remember", [0.5, 0.43], "", "black", 80, "center", true, 0.5); }
            else { myTextManager.drawTextInBackground(2, "stop", [0.5, 0.43], "", "black", 80, "center", true, 0.5); }
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "", "white", 50, "center");
            myFade.pauseImage("gridBlocked", Date.now());
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.05, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.95, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.hero.healing), [0.05, 0.53], "", "#65fe08", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.healing), [0.95, 0.53], "", "#65fe08", 80, "center", true);
            myTextManager.applyDecay();
        }

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myIntro = {
    background: {},
    text1: "",
    text2:"",
    text3:"",
    clickTo:[],
    currentAnimation: {},
    animImg: {},
    animResize: 3,
    posAnim: [-100, -400],
    posText: [0.5, 0.5],
    showText: false,
    showAnim: false,
    start: function () {
        myScoreManager.downloadBestScores();//Deberia ir en otro sitio
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        mySoundManager.stopSound("menu");
        mySoundManager.stopSound("boss");
        mySoundManager.startSound("intro1", false);
        this.background = myPreload.images.backgroundBlack;
        this.startSequence1();
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        //myGameArea.resizeBackground(myPreload.images.)
        myGameArea.resizeBackground(this.background, 1);

        if(this.showAnim){
            myGameArea.animateInBackground(1, this.posAnim, this.animImg, this.currentAnimation, this.animResize);
        }
        if(this.showText){
            myTextManager.drawTextInBackground(1, this.text1, this.posText, "", "white", 100, "center");
            myTextManager.drawTextInBackground(1, this.text2, [this.posText[0], this.posText[1] + 0.1], "", "white", 100, "center");
            myTextManager.drawTextInBackground(1, this.text3, [this.posText[0] + 0.12, this.posText[1] + 0.2], "", "white", 90, "center");
        }

        myTextManager.drawTextInBackground(1, this.clickTo[0], this.clickTo[2], "", this.clickTo[1], 80, this.clickTo[3]);
        myFade.fade(1);
    },
    startSequence1:function(){
        let that = myIntro;
        that.showAnim = false;
        that.background = myPreload.images.backgroundBlack;
        posText = [0.5, 0.4];
        that.text1 = "text11";
        that.text2 = "text12";
        that.text3 = "";
        that.clickTo = ["clickToSkip", "white", [0.98,0.95], "right"];
        that.showText = true;
        myGameManager.addTimer(that.startSequence2, 4000, "timersSwap");
    },
    startSequence2:function(){
        myFade.in(1);
        let that = myIntro;
        that.showText = false;
        posAnim= [-100, -400];
        that.currentAnimation = new Animation(myPreload.spritesInfo.intro_fire, 0, 59);
        that.currentAnimation.reset();
        that.animImg = myPreload.images.intro_fire;
        that.animResize = 3;
        that.showAnim = true;
        myGameManager.addTimer(that.startSequence3, 3000, "timersSwap");
    },
    startSequence3:function(){
        let that = myIntro;
        that.text1 = "text21";
        that.text2 = "text22";
        that.posText = [0.45, 0.62]
        that.text3 = "author";
        that.showText = true;
        myGameManager.addTimer(that.startSequence4, 3000, "timersSwap");
    },
    startSequence4:function(){
        mySoundManager.startSound("intro2", true);
        myFade.in(1, -0.01);
        let that = myIntro;
        that.showText = false;
        that.currentAnimation = new Animation(myPreload.spritesInfo.intro_hero, 0, 24);
        that.currentAnimation.reset();
        that.posAnim = [400,750];
        that.animResize = 1.5;
        that.animImg = myPreload.images.intro_hero;
        that.background = myPreload.images.intro_background;
        that.clickTo = ["clickToStart", "black",[0.5,0.25], "center"];
    },
    pruebaTimer:function(){
        console.log("mishon compree");
    }
}

var myTransitionScene = {
    hero: {},
    posHero: [300, 440],
    room: {},
    timeTransition: 8000,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        this.hero = myHeroCharacter.generateHero();
        myStatsController.increaseStats(this.hero);
        this.room = myPreload.images["room1"];
        mySoundManager.stopSound("boss");
        mySoundManager.startSound("menu");
        mySoundManager.stopSound("ending1");
        mySoundManager.stopSound("ending2");
        myFade.in(1);
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(this.room, 1);
        myGameArea.animateInBackground(1, this.posHero, this.hero.currentImg, this.hero.currentAnimation, 2.5);

        myTextManager.drawTextInBackground(1, "currentLevel", [0.7, 0.2], String(myRoomMechanics.countSwaps), "black", 50, "center");
        myTextManager.drawTextInBackground(1, "healthPoints", [0.7, 0.35], String(myHeroCharacter.hpMax), "black", 50, "center");
        myTextManager.drawTextInBackground(1, "attackPoints", [0.7, 0.5], String(myHeroCharacter.ap), "black", 50, "center");
        myTextManager.drawTextInBackground(1, "defensePoints", [0.7, 0.65], String(myHeroCharacter.dp), "black", 50, "center");
        myTextManager.drawTextInBackground(1, "numberLaps", [0.7, 0.8], String(myStatsController.loops), "black", 50, "center");
        myTextManager.drawTextInBackground(1, "clickToConinue", [0.98, 0.95], "", "white", 80, "right");
        myFade.fade(1);
    }
}

var myEnding = {
    displayed: false,
    text1: "",
    text2:"",
    text3:"",
    currentAnimation: {},
    animImg: {},
    extraImg:{},
    clickTo: [],
    animResize: 2,
    posAnim: [0, 0],
    posExtraImg: [0,0],
    posText: [0.5, 0.5],
    showText: false,
    showAnim: false,
    showExtraImg: false,
    start: function () {
        if (this.displayed) { myGame.swapScene(); }
        else {
            myGameManager.clearTimers("all");
            myGameArea.editTams(1);
            this.displayed = true;
            mySoundManager.startSound("ending1", false);
            mySoundManager.pauseSound("menu");
            this.startSequence1();
        }
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(myPreload.images.backgroundBlack, 1);
        //animacion ending
        if(this.showExtraImg){
            myGameArea.drawInBackground(1, this.posExtraImg, this.extraImg);
        }
        if(this.showAnim){
            myGameArea.animateInBackground(1, this.posAnim, this.animImg, this.currentAnimation, this.animResize);
        }
        
        if(this.showText){
            myTextManager.drawTextInBackground(1, this.text1, this.posText, "", "white", 100, "center");
            myTextManager.drawTextInBackground(1, this.text2, [this.posText[0], this.posText[1] + 0.1], "", "white", 100, "center");
            myTextManager.drawTextInBackground(1, this.text3, [this.posText[0] + 0.12, this.posText[1] + 0.2], "", "white", 90, "center");
        }
        
        myTextManager.drawTextInBackground(1, this.clickTo[0], this.clickTo[2], "", this.clickTo[1], 80, this.clickTo[3]);
        myFade.fade(1);
    },
    startSequence1: function(){
        myFade.in(1);
        let that = myEnding;
        that.clickTo = ["clickToSkip", "white", [0.98,0.95], "right"];
        that.posAnim= [700, 0];
        that.currentAnimation = new Animation(myPreload.spritesInfo.end_aura, 0, 59);
        that.currentAnimation.reset();
        that.animImg = myPreload.images.end_aura;
        that.animResize = 1.8;
        that.showAnim = true;
        that.extraImg = myPreload.images.end_hand;
        that.posExtraImg = [0, 550];
        that.showExtraImg = true;
        that.showText = false;
        myGameManager.addTimer(that.startSequence2, 2000, "timersSwap");
    },
    startSequence2:function(){
        let that = myEnding;
        that.posText = [0.5, 0.75];
        that.text1 = "text11";
        that.text2 = "text12";
        that.text3 = "";
        that.showText = true;
        myGameManager.addTimer(that.startSequence3, 2000, "timersSwap");
    },
    startSequence3:function(){
        let that = myEnding;
        myFade.in(1);
        that.showText = false;
        that.showExtraImg = false;
        that.posAnim = [-1000, -1340];
        that.animResize = 4.6;
        that.currentAnimation = new Animation(myPreload.spritesInfo.end_fist, 0, 59);
        that.currentAnimation.reset();
        that.animImg = myPreload.images.end_fist;
        that.currentAnimation.callback = function(){
            myFade.in(1);
        }
        myGameManager.addTimer(that.startSequence4, 4000, "timersSwap");
    },
    startSequence4:function(){
        myFade.in(1);
        let that = myEnding;
        that.showAnim = false;
        that.showExtraImg = false;
        that.posText = [0.45, 0.4];
        that.text1 = "text21";
        that.text2 = "text22";
        that.text3 = "author";
        that.showText = true;
        myGameManager.addTimer(that.startSequence5, 3000, "timersSwap");
    },
    startSequence5:function(){
        mySoundManager.startSound("ending2", true);
        let that = myEnding;
        that.showText = false;
        that.animResize = 1;
        that.posAnim = [500, 500];
        that.currentAnimation = new Animation(myPreload.spritesInfo.end_eyes, 0, 4);
        that.animImg = myPreload.images.end_eyes;
        that.currentAnimation.reset();
        that.showAnim = true;
        that.clickTo = ["clickToConinue", "white",[0.5,0.75], "center"];
    }
}

var myLevel2 = {
    hero: {},
    enemies: [],
    enemy: {},
    sfx: {},
    posHero: [50, 440],
    rooms: [],
    room: {},
    enemiesMin: 3,
    enemiesMax: 7,
    enemiesRandom: [],
    orderRopesEvent: false,
    showBuffHero: false,
    showBuffEnemy: false,
    showDebuffHero: false,
    showDebuffEnemy: false,
    roomsMin: 3,
    roomsMax: 6,
    limitTimePerPatron: 2800,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(2);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myFade.clearImage();
        mySoundManager.startSound("menu", true, 0.5);
        mySoundManager.stopSound("boss");
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
        myGameArea.drawInBackground(1, [0.18, 0.94], myPreload.images.health_icon);
        myTextManager.drawTextInBackground(1, "", [0.22, 0.986], String(this.hero.hp), "#65fe08", 80, "left");
        myTextManager.drawTextInBackground(1, "roomCombat", [0.02, 0.05], String(myRoomMechanics.countSwaps) + " - " + String(myCombatMechanics.countCombats), "#00f9ff", 80, "left");
        myTextManager.drawTextInBackground(1, "score", [0.98, 0.05], String(myScoreManager.currentScore), "#00f9ff", 80, "right");

        if (this.showBuffHero && this.showDebuffHero) {//si el heroe ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.03, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffHero) {//si solo buff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffHero) {//si solo debuff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        }

        if (this.showBuffEnemy && this.showDebuffEnemy) {//si el enemigo ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.82, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffEnemy) {//si solo buff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffEnemy) {//si solo debuff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        }

        if (!myInputsManager.blocked) {//si no se permite interactuar con las cuerdas
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myFade.fadeOutImage("gridBlocked", [0, 0], Date.now(), this.limitTimePerPatron)
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myTextManager.drawTextInBackground(2, "cut", [0.5, 0.43], "", "black", 80, "center", true, 0.5);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            if(this.orderRopesEvent) { myTextManager.drawTextInBackground(2, "remember", [0.5, 0.43], "", "black", 80, "center", true, 0.5);}
            else {myTextManager.drawTextInBackground(2, "stop", [0.5, 0.43], "", "black", 80, "center", true, 0.5);}
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "", "white", 50, "center");
            myFade.pauseImage("gridBlocked", Date.now());
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.05, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.95, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.hero.healing), [0.05, 0.53], "", "#65fe08", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.healing), [0.95, 0.53], "", "#65fe08", 80, "center", true);
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
    posHero: [50, 440],
    rooms: [],
    room: {},
    enemiesMin: 6,
    enemiesMax: 10,
    enemiesRandom: [],
    orderRopesEvent: false,
    showBuffHero: false,
    showBuffEnemy: false,
    showDebuffHero: false,
    showDebuffEnemy: false,
    roomsMin: 6,
    roomsMax: 9,
    limitTimePerPatron: 3900,
    start: function () {
        myGameManager.clearTimers("all");
        myGameArea.editTams(0.6);
        this.hero = myHeroCharacter.generateHero(3);
        this.enemies = myCharacterEnemies.generateEnemies(this);
        this.rooms = myGameMechanics.generateRooms(this.roomsMax);
        this.sfx = mySFX.generateSFX();
        myFade.clearImage();
        mySoundManager.startSound("menu", true, 0.5);
        mySoundManager.stopSound("boss");
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
        myGameArea.drawInBackground(1, [0.18, 0.94], myPreload.images.health_icon);
        myTextManager.drawTextInBackground(1, "", [0.22, 0.986], String(this.hero.hp), "#65fe08", 80, "left");
        myTextManager.drawTextInBackground(1, "roomCombat", [0.02, 0.05], String(myRoomMechanics.countSwaps) + " - " + String(myCombatMechanics.countCombats), "#00f9ff", 80, "left");
        myTextManager.drawTextInBackground(1, "score", [0.98, 0.05], String(myScoreManager.currentScore), "#00f9ff", 80, "right");

        if (this.showBuffHero && this.showDebuffHero) {//si el heroe ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.03, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffHero) {//si solo buff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffHero) {//si solo debuff
            myGameArea.drawInBackground(1, [0.08, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.13, 0.942], myPreload.images.swordShield_icon);
        }

        if (this.showBuffEnemy && this.showDebuffEnemy) {//si el enemigo ha obtenido buff y debuff
            myGameArea.drawInBackground(1, [0.82, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showBuffEnemy) {//si solo buff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.buff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        } else if (this.showDebuffEnemy) {//si solo debuff
            myGameArea.drawInBackground(1, [0.87, 0.94], myPreload.images.debuff_icon);
            myGameArea.drawInBackground(1, [0.92, 0.942], myPreload.images.swordShield_icon);
        }

        if (!myInputsManager.blocked) {//si no se permite interactuar con las cuerdas
            myGameArea.resizeBackground(myPreload.images.grid, 2);
            myFade.fadeOutImage("gridBlocked", [0, 0], Date.now(), this.limitTimePerPatron)
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            myGameMechanics.trackingTraces(myGameArea.background2);
            myGameMechanics.deleteRope(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myTextManager.drawTextInBackground(2, "cut", [0.5, 0.43], "", "black", 80, "center", true, 0.5);
        } else {
            myGameArea.resizeBackground(myPreload.images.gridBlocked, 2);
            myGameMechanics.drawRopes(this.enemy.gridRopes[this.enemy.gridRopeNow]);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.gridNodes);
            if(this.orderRopesEvent) { myTextManager.drawTextInBackground(2, "remember", [0.5, 0.43], "", "black", 80, "center", true, 0.5);}
            else {myTextManager.drawTextInBackground(2, "stop", [0.5, 0.43], "", "black", 80, "center", true, 0.5);}
        }

        if (myGameManager.pause) {//si el juego esta en pausa
            myGameArea.drawInBackground(1, [0, 0], myPreload.images.backgroundBlack);
            myGameArea.drawInBackground(2, [0, 0], myPreload.images.backgroundBlack);
            myTextManager.drawTextInBackground(1, "pause", [0.5, 0.5], "", "white", 50, "center");
            myFade.pauseImage("gridBlocked", Date.now());
        } else { //eventos particulares a que el juego no este en pausa
            myTextManager.drawTextInBackground(1, String(this.hero.damage), [0.05, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.damage), [0.95, 0.50], "", "#ff073a", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.hero.healing), [0.05, 0.53], "", "#65fe08", 80, "center", true);
            myTextManager.drawTextInBackground(1, String(this.enemy.healing), [0.95, 0.53], "", "#65fe08", 80, "center", true);
            myTextManager.applyDecay();
        }

        myFade.fade(1);
        myFade.fade(2);
    }
}

var myGameOver = {
    score: 0,
    hero: {},
    start: function () {
        if (myScoreManager.updateBestScores()) { myScoreManager.uploadBestScores(); }
        this.score = myScoreManager.currentScore;
        this.hero = myHeroCharacter.generateHero();
        myScoreManager.currentScore = 0;
        myGameManager.clearTimers("all");
        myGameArea.editTams(1);
        myStatsController.resetLoops();
        myStatsController.resetStats(this.hero);
        mySoundManager.unPauseSound("menu");
    },
    update: function (delta) { //fisicas o pasos intermedios antes de pintar
    },
    draw: function (interp, ctx1, ctx2, cnv1, cnv2) {//pintar el frame
        myGameArea.resizeBackground(myPreload.images.backgroundBlack, 1);
        myTextManager.drawTextInBackground(1, "gameOver", [0.5, 0.1], "", "white", 110, "center");
        myTextManager.drawTextInBackground(1, "score", [0.5, 0.4], String(this.score), "white", 80, "center");
        myTextManager.drawTextInBackground(1, "thanks", [0.5, 0.6], "", "white", 80, "center");
        myTextManager.drawTextInBackground(1, "clickToRestart", [0.98, 0.95], "", "white", 80, "right");
        myFade.fade(1);
    }
}