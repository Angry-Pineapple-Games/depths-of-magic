var myCharacterEnemies = {
    enemies: [],
    
    generateEnemies: function(scene) {
        for(var e=0; e<this.enemies.length; e++) {
            this.enemies[e].hp = this.enemies[e].hpMax;
        }
        for (var e=this.enemies.length; e<scene.enemiesMax; e++) {
            this.enemies.push(myEnemiesProperties[String(e)]);
            //this.enemies[e].img = myPreload.images[this.enemies[e].img]
            //prueba, toda referencia al heroe sera sustituida por la imagen y spritesheet correspondiente
            this.enemies[e].img = myPreload.images.hero;
            this.generateAnimationsInfo(this.enemies[e], myPreload.spritesInfo.spritesHero, myEnemiesAnimFrames[e]);
            this.enemies[e].currentAnimation = this.enemies[e].animations.idle;
        }
        return this.enemies;
    },

    generateAnimationsInfo: function(character, spritesheet, frames){
        character.animations.idle = new Animation(spritesheet, frames.idle.start, frames.idle.end);
        character.animations.attack = new Animation(spritesheet, frames.attack.start, frames.attack.end);
        character.animations.damage = new Animation(spritesheet, frames.damage.start, frames.damage.end);
        character.animations.death = new Animation(spritesheet, frames.death.start, frames.death.end);
    }
}
//rope[deleted, pos, "image name", typeCut, typeRope] 
//typeCut = 0:simple, 1:double, 2:directionable negative, 3:directionable positive, 4:orden
//typeRope = 0:contraataque, 1:buff , 2:debuff, 3:curacion, 4:power
var myEnemiesProperties = {
    length: 10,
    0: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy0',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,1,1],
            [0,6, "ropeCounterH",1,1,1],
            [0,7, "ropeCounterV",1,1,1]
        ],[
            [0,4, "ropeCounterH",1,1,1],
            [0,6, "ropeCounterH",1,1,1],
            [0,7, "ropeCounterV",1,1,1]
        ]]
    },
    1: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy1',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    2: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy2',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    3: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy3',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    4: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy4',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,1,1],
            [0,6, "ropeCounterH",1,1,1],
            [0,7, "ropeCounterV",1,1,1]
        ]]
    },
    5: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy5',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    6: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy6',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    7: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy7',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    8: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy8',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    },
    9: {
        hp: 100,
        hpMax: 100,
        buff: 0,
        ap: 20,
        dp: 30,
        img: 'enemy9',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,4, "ropeCounterH",0,1,1],
            [0,6, "ropeCounterH",0,1,1],
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ],[
            [0,4, "ropeCounterH",1,0,1],
            [0,6, "ropeCounterH",1,0,1],
            [0,7, "ropeCounterV",1,0,1]
        ]]
    }
}

//Frames son placeholders
var myEnemiesAnimFrames = {
    0: {
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    1: {
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    2: {
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    3:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    4:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    5:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    6:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    7:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    8:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    9:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    10:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        attack2: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
}