var myCharacterEnemies = {
    enemies: [],
    
    generateEnemies: function(scene) {
        for(var e=0; e<this.enemies.length; e++) {
            this.enemies[e].hp = this.enemies[e].hpMax;
        }
        for (var e=this.enemies.length; e<scene.enemiesMax; e++) {
            this.enemies.push(myEnemiesProperties[String(e)]);
            this.enemies[e].img = myPreload.images[this.enemies[e].img]
            this.generateAnimationsInfo(this.enemies[e], myPreload.spritesInfo[e], myEnemiesAnimFrames[e]);
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
//rope[deleted, pos, "image name", typeOrder, typeCut, typeRope] 
//typeOrder = 0 : disordered, 1: ordered
//typeCut = 0:simple, 1:double, 2:directionable negative, 3:directionable positive
//typeRope = 0:counterattack, 1:buff , 2:debuff, 3:heal, 4:power
var myEnemiesProperties = {
    length: 10,
    0: {
        name: "Raygler",
        hp: 90,
        damage: 0,
        hpMax: 90,
        buff: 0,
        ap: 35,
        dp: 25,
        img: 'enemy0',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,15, "ropeCounterV",0,0,0]
        ],[
            [0,4, "ropeCounterH",0,0,0],
            [0,8, "ropeBuffV",0,0,1],
            [0,12, "ropeCounterH",0,0,0]
        ],[
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,15, "ropeHealV",0,0,3],
            [0,12, "ropeCounterH",0,0,0]
        ],[
            [0,12, "ropeHealH",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,19, "ropeHealH",0,0,3],
            [0,23, "ropeCounterV",0,0,0]
        ]]
    },
    1: {
        name: "Sawyrah",
        hp: 80,
        damage: 0,
        hpMax: 80,
        buff: 0,
        ap: 55,
        dp: 15,
        img: 'enemy1',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,11, "ropeCounterH",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,5, "ropeBuffH",0,0,1],
            [0,9, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,0,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,0,2]
        ],[
            [0,0, "ropeCounterV",0,0,0],
            [0,4, "ropeHealH",0,0,3],
            [0,1, "ropeDebuffV",0,0,2],
            [0,5, "ropeCounterH",0,0,0],
        ],[
            [0,14, "ropeBuffV",0,0,1],
            [0,18, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeHealH",0,0,3]
        ]]
    },
    2: {
        name: "Gorpovar",
        hp: 110,
        damage: 0,
        hpMax: 110,
        buff: 0,
        ap: 25,
        dp: 40,
        img: 'enemy2',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,3, "ropeDebuffH",0,0,2],
            [0,7, "ropeBuffV",0,0,1],
            [0,19, "ropeCounterH",0,0,0],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,1, "ropeBuffV",0,0,1],
            [0,5, "ropeCounterH",0,0,0],
            [0,2, "ropeBuffV",0,0,1],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,22, "ropeCounterV",0,0,0]
        ],[
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,0,2],
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,12, "ropeBuffH",0,0,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ],[
            [0,3, "ropeHealH",0,0,3],
            [0,7, "ropeCounterV",0,0,0],
            [0,10, "ropeHealH",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeDebuffV",0,0,2],
            [0,19, "ropeCounterH",0,0,0],
            [0,23, "ropeCounterV",0,0,0]
        ]]
    },
    3: {
        name: "Giwalev", 
        hp: 140,
        damage: 0,
        hpMax: 140,
        buff: 0,
        ap: 70,
        dp: 45,
        img: 'enemy3',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[           
            [0,14, "ropeBuffV",0,0,1],
            [0,17, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeHealV",0,0,3],
            [0,22, "ropeCounterV",0,0,0],
            [0,16, "ropeDebuffV",0,0,2],
            [0,20, "ropeCounterH",0,0,0]
        ],[            
            [0,4, "ropeHealH",0,0,3],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,0,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,10, "ropeCounterH",0,0,0]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeDebuffH",0,0,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,8, "ropePowerV",0,0,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,20, "ropeDebuffH",0,0,2],
            [0,23, "ropeCounterV",0,0,0],
            [0,1, "ropePowerV",0,0,4],
            [0,0, "ropeHealV",0,0,3],
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,9, "ropeHealV",0,0,3],
            [0,2, "ropeCounterV",0,0,0]
        ]]
    },
    4: {
        name: "Rawdramon",
        hp: 135,
        damage: 0,
        hpMax: 135,
        buff: 0,
        ap: 85,
        dp: 40,
        img: 'enemy4',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,10, "ropeCounterH",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeDebuffV",0,0,2],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeHealH",0,0,3],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0],
            [0,9, "ropeDebuffV",0,0,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeHealH",0,0,3]
        ],[
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,0,2],
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,12, "ropeBuffH",0,0,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ],[
            [0,4, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,12, "ropeHealH",0,0,3],
            [0,13, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,22, "ropePowerV",0,0,4]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeCounterH",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeDebuffH",0,0,2],
            [0,19, "ropeCounterH",0,0,0],
            [0,22, "ropeCounterV",0,0,0]
        ]]
    },
    5: {
        name: "Shadrix",
        hp: 160,
        damage: 0,
        hpMax: 160,
        buff: 0,
        ap: 55,
        dp: 70,
        img: 'enemy5',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,0,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,0,2]
        ],[
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropePowerH",0,0,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,9, "ropeCounterV",0,0,0],
            [0,16, "ropeBuffV",0,0,1],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,0,2],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeCounterV",0,0,0],
            [0,19, "ropeDebuffH",0,0,2],
            [0,20, "ropeHealH",0,0,3],
            [0,10, "ropeHealH",0,0,3],
            [0,14, "ropeHealV",0,0,3]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,9, "ropeCounterV",0,0,0],
            [0,6, "ropeCounterH",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeBuffV",0,0,1],
            [0,22, "ropeHealV",0,0,3]
        ]]
    },
    6: {
        name: "Glanxyor",
        hp: 180,
        damage: 0,
        hpMax: 180,
        buff: 0,
        ap: 95,
        dp: 80,
        img: 'enemy6',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,1, "ropeBuffV",0,0,1],
            [0,2, "ropeBuffV",0,0,1],
            [0,5, "ropeCounterH",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,22, "ropeCounterV",0,0,0]
        ],[
            [0,4, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,12, "ropeHealH",0,0,3],
            [0,13, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,22, "ropePowerV",0,0,4]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,16, "ropeBuffV",0,0,1],
            [0,23, "ropeCounterV",0,0,0],
            [0,22, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeHealV",0,0,3]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,9, "ropeBuffV",0,0,1],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,0,2],
            [0,23, "ropeCounterV",0,0,0]
        ]]
    },
    7: {
        name: "Wrotalus",
        hp: 240,
        damage: 0,
        hpMax: 240,
        buff: 0,
        ap: 70,
        dp: 100,
        img: 'enemy7',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropePowerH",0,0,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,9, "ropeCounterV",0,0,0],
            [0,16, "ropeBuffV",0,0,1],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,0, "ropeCounterV",0,0,0],
            [0,3, "ropeDebuffH",0,0,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeHealV",0,0,3],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,14, "ropePowerV",0,0,4],
            [0,18, "ropeCounterH",0,0,0],
            [0,20, "ropeCounterH",0,0,0],
            [0,23, "ropeBuffV",0,0,1]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeHealH",0,0,3],
            [0,4, "ropeCounterH",0,0,0],
            [0,7, "ropeBuffV",0,0,1],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeDebuffH",0,0,2],
            [0,16, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,21, "ropeHealV",0,0,3]
        ],[
            [0,3, "ropeDebuffH",0,0,2],
            [0,7, "ropeHealV",0,0,3],
            [0,14, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,1, "ropeCounterV",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeHealV",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,0,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ]]
    },
    8: {
        name: "Gumlisar", 
        hp: 160,
        damage: 0,
        hpMax: 160,
        buff: 0,
        ap: 55,
        dp: 70,
        img: 'enemy8',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,1, "ropeCounterV",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,9, "ropeBuffV",0,0,1],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,0,2],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeDebuffH",0,0,2],
            [0,7, "ropeHealV",0,0,3],
            [0,14, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,1, "ropeCounterV",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeHealV",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,0,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ],[
            [0,3, "ropeCounterH",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,10, "ropeCounterH",0,0,0],
            [0,14, "ropeHealV",0,0,3],
            [0,17, "ropeCounterH",0,0,0],
            [0,21, "ropeCounterV",0,0,0],
            [0,1, "ropeCounterV",0,0,0],
            [0,5, "ropeDebuffH",0,0,2],
            [0,2, "ropePowerV",0,0,4],
            [0,6, "ropeCounterH",0,0,0],
            [0,13, "ropeCounterH",0,0,0],
            [0,16, "ropeHealV",0,0,3],
            [0,20, "ropePowerH",0,0,4],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeBuffH",0,0,1],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeCounterH",0,0,0],
            [0,6, "ropeDebuffH",0,0,2],
            [0,1, "ropePowerV",0,0,4],
            [0,8, "ropeCounterV",0,0,0],
            [0,12, "ropeHealH",0,0,3],
            [0,16, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,14, "ropeCounterV",0,0,0]
        ]]
    },
    9: {
        name: "The Abyss",
        hp: 250,
        damage: 0,
        hpMax: 250,
        buff: 0,
        ap: 145,
        dp: 120,
        img: 'enemy9',
        currentAnimation: {},
        animations:{},
        gridRopeNow: -1,
        gridRopes: [[
            [0,0, "ropeCounterV",0,0,0],
            [0,3, "ropeCounterH",0,0,0],
            [0,2, "ropeHealV",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,17, "ropeHealH",0,0,3],
            [0,21, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0],
            [0,23, "ropeBuffV",0,0,1]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,4, "ropeHealH",0,0,3],
            [0,5, "ropeDebuffH",0,0,2],
            [0,10, "ropeCounterH",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,19, "ropeHealH",0,0,3],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,1, "ropeDebuffV",0,0,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeCounterV",0,0,0],
            [0,13, "ropeDebuffH",0,0,2],
            [0,21, "ropeBuffV",0,0,1],
            [0,14, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,0,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,19, "ropeHealH",0,0,3],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,0, "ropeDebuffV",0,0,2],
            [0,3, "ropeHealH",0,0,3],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,18, "ropePowerH",0,0,4],
            [0,19, "ropeCounterH",0,0,0],
            [0,23, "ropeBuffV",0,0,1],
            [0,20, "ropeHealH",0,0,3]
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
        attack2: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
}