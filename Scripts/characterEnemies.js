var myCharacterEnemies = {
    enemies: [],
    
    generateEnemies: function(scene) {
        for(var e=0; e<this.enemies.length; e++) {
            this.enemies[e].hp = this.enemies[e].hpMax;
        }
        for (var e=this.enemies.length; e<scene.enemiesMax; e++) {
            this.enemies.push(myEnemiesProperties[String(e)]);
            //this.enemies[e].img = myPreload.images[this.enemies[e].img]
            this.saveImages(this.enemies[e]);
            this.generateAnimationsInfo(this.enemies[e], myEnemiesAnimFrames[e]);
            this.enemies[e].currentAnimation = this.enemies[e].animations.idle;
            this.enemies[e].currentImg = this.enemies[e].imgs.idle;
        }
        return this.enemies;
    },

    generateAnimationsInfo: function(character, frames){
        character.animations.idle = new Animation(myPreload.spritesInfo[character.img + "_idle"], frames.idle.start, frames.idle.end);
        character.animations.attack = new Animation(myPreload.spritesInfo[character.img + "_attack"], frames.attack.start, frames.attack.end);
        character.animations.damage = new Animation(myPreload.spritesInfo[character.img + "_damage"], frames.damage.start, frames.damage.end);
        character.animations.death = new Animation(myPreload.spritesInfo[character.img + "_death"], frames.death.start, frames.death.end);
    },

    saveImages: function(character){
        character.imgs.idle = myPreload.images[character.img + "_idle"];
        character.imgs.attack = myPreload.images[character.img + "_attack"];
        character.imgs.damage = myPreload.images[character.img + "_damage"];
        character.imgs.death = myPreload.images[character.img + "_death"];
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2,
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,15, "ropeCounterV",0,0,0]
        ],[
            [0,4, "ropeCounterH",0,0,0],
            [0,8, "ropeBuffV",0,3,1],
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
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [1050, 590],
        resize: 2,
        gridRopeNow: -1,
        gridRopes: [[
            [0,11, "ropeCounterH",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,5, "ropeBuffH",0,3,1],
            [0,9, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,3,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,2,2]
        ],[
            [0,0, "ropeCounterV",0,0,0],
            [0,4, "ropeHealH",0,0,3],
            [0,1, "ropeDebuffV",0,2,2],
            [0,5, "ropeCounterH",0,0,0],
        ],[
            [0,14, "ropeBuffV",0,3,1],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 840],
        resize: 2,
        gridRopeNow: -1,
        gridRopes: [[
            [0,3, "ropeDebuffH",0,2,2],
            [0,7, "ropeBuffV",0,3,1],
            [0,19, "ropeCounterH",0,0,0],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,1, "ropeBuffV",0,3,1],
            [0,5, "ropeCounterH",0,0,0],
            [0,2, "ropeBuffV",0,3,1],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,22, "ropeCounterV",0,0,0]
        ],[
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,2,2],
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,12, "ropeBuffH",0,3,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ],[
            [0,3, "ropeHealH",0,0,3],
            [0,7, "ropeCounterV",0,0,0],
            [0,10, "ropeHealH",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeDebuffV",0,2,2],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
        gridRopeNow: -1,
        gridRopes: [[           
            [0,14, "ropeBuffV",0,3,1],
            [0,17, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeHealV",0,0,3],
            [0,22, "ropeCounterV",0,0,0],
            [0,16, "ropeDebuffV",0,2,2],
            [0,20, "ropeCounterH",0,0,0]
        ],[            
            [0,4, "ropeHealH",0,0,3],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,3,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,10, "ropeCounterH",0,0,0]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeDebuffH",0,2,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,8, "ropePowerV",0,1,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,20, "ropeDebuffH",0,2,2],
            [0,23, "ropeCounterV",0,0,0],
            [0,1, "ropePowerV",0,1,4],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
        gridRopeNow: -1,
        gridRopes: [[
            [0,10, "ropeCounterH",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeDebuffV",0,2,2],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeHealH",0,0,3],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0],
            [0,9, "ropeDebuffV",0,2,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeHealH",0,0,3]
        ],[
            [0,5, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,2,2],
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,12, "ropeBuffH",0,3,1],
            [0,16, "ropeCounterV",0,0,0],
            [0,20, "ropeCounterH",0,0,0]
        ],[
            [0,4, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,12, "ropeHealH",0,0,3],
            [0,13, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,22, "ropePowerV",0,1,4]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeCounterH",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeDebuffH",0,2,2],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,3,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,2,2]
        ],[
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropePowerH",0,1,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,9, "ropeCounterV",0,0,0],
            [0,16, "ropeBuffV",0,3,1],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeCounterH",0,0,0],
            [0,4, "ropeDebuffH",0,2,2],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeCounterV",0,0,0],
            [0,19, "ropeDebuffH",0,2,2],
            [0,20, "ropeHealH",0,0,3],
            [0,10, "ropeHealH",0,0,3],
            [0,14, "ropeHealV",0,0,3]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,9, "ropeCounterV",0,0,0],
            [0,6, "ropeCounterH",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeBuffV",0,3,1],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
        gridRopeNow: -1,
        gridRopes: [[
            [0,1, "ropeBuffV",0,3,1],
            [0,2, "ropeBuffV",0,3,1],
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
            [0,22, "ropePowerV",0,1,4]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeCounterH",0,0,0],
            [0,12, "ropeCounterH",0,0,0],
            [0,16, "ropeBuffV",0,3,1],
            [0,23, "ropeCounterV",0,0,0],
            [0,22, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,21, "ropeHealV",0,0,3]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,9, "ropeBuffV",0,3,1],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,2,2],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
        gridRopeNow: -1,
        gridRopes: [[
            [0,7, "ropeCounterV",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropePowerH",0,1,4],
            [0,15, "ropeCounterV",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,9, "ropeCounterV",0,0,0],
            [0,16, "ropeBuffV",0,3,1],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,0, "ropeCounterV",0,0,0],
            [0,3, "ropeDebuffH",0,2,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeHealV",0,0,3],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeCounterH",0,0,0],
            [0,14, "ropePowerV",0,1,4],
            [0,18, "ropeCounterH",0,0,0],
            [0,20, "ropeCounterH",0,0,0],
            [0,23, "ropeBuffV",0,3,1]
        ],[
            [0,2, "ropeCounterV",0,0,0],
            [0,6, "ropeHealH",0,0,3],
            [0,4, "ropeCounterH",0,0,0],
            [0,7, "ropeBuffV",0,3,1],
            [0,11, "ropeCounterH",0,0,0],
            [0,12, "ropeDebuffH",0,2,2],
            [0,16, "ropeCounterV",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,21, "ropeHealV",0,0,3]
        ],[
            [0,3, "ropeDebuffH",0,2,2],
            [0,7, "ropeHealV",0,0,3],
            [0,14, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,1, "ropeCounterV",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeHealV",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,3,1],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 240],
        resize: 2,
        gridRopeNow: -1,
        gridRopes: [[
            [0,1, "ropeCounterV",0,0,0],
            [0,7, "ropeCounterV",0,0,0],
            [0,9, "ropeBuffV",0,3,1],
            [0,12, "ropeCounterH",0,0,0],
            [0,11, "ropeHealH",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,18, "ropeCounterH",0,0,0],
            [0,19, "ropeCounterH",0,0,0],
            [0,21, "ropeDebuffV",0,2,2],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeDebuffH",0,2,2],
            [0,7, "ropeHealV",0,0,3],
            [0,14, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,1, "ropeCounterV",0,0,0],
            [0,8, "ropeHealV",0,0,3],
            [0,15, "ropeCounterV",0,0,0],
            [0,22, "ropeHealV",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,9, "ropeBuffV",0,3,1],
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
            [0,5, "ropeDebuffH",0,2,2],
            [0,2, "ropePowerV",0,1,4],
            [0,6, "ropeCounterH",0,0,0],
            [0,13, "ropeCounterH",0,0,0],
            [0,16, "ropeHealV",0,0,3],
            [0,20, "ropePowerH",0,1,4],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,3, "ropeBuffH",0,3,1],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeCounterH",0,0,0],
            [0,6, "ropeDebuffH",0,2,2],
            [0,1, "ropePowerV",0,1,4],
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
        img: 'enemy1',
        currentImg:{},
        imgs: {},
        currentAnimation: {},
        animations:{},
        pos: [950, 440],
        resize: 2.5,
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
            [0,23, "ropeBuffV",0,3,1]
        ],[
            [0,1, "ropeCounterV",0,0,0],
            [0,4, "ropeHealH",0,0,3],
            [0,5, "ropeDebuffH",0,2,2],
            [0,10, "ropeCounterH",0,0,0],
            [0,14, "ropeCounterV",0,0,0],
            [0,18, "ropeHealH",0,0,3],
            [0,19, "ropeHealH",0,0,3],
            [0,16, "ropeCounterV",0,0,0],
            [0,13, "ropeCounterH",0,0,0]
        ],[
            [0,1, "ropeDebuffV",0,2,2],
            [0,5, "ropeCounterH",0,0,0],
            [0,9, "ropeCounterV",0,0,0],
            [0,13, "ropeDebuffH",0,2,2],
            [0,21, "ropeBuffV",0,3,1],
            [0,14, "ropeCounterV",0,0,0],
            [0,11, "ropeBuffH",0,3,1],
            [0,15, "ropeCounterV",0,0,0],
            [0,19, "ropeHealH",0,0,3],
            [0,23, "ropeCounterV",0,0,0]
        ],[
            [0,0, "ropeDebuffV",0,2,2],
            [0,3, "ropeHealH",0,0,3],
            [0,4, "ropeCounterH",0,0,0],
            [0,5, "ropeHealH",0,0,3],
            [0,6, "ropeCounterH",0,0,0],
            [0,8, "ropeCounterV",0,0,0],
            [0,15, "ropeCounterV",0,0,0],
            [0,17, "ropeCounterH",0,0,0],
            [0,18, "ropePowerH",0,1,4],
            [0,19, "ropeCounterH",0,0,0],
            [0,23, "ropeBuffV",0,3,1],
            [0,20, "ropeHealH",0,0,3]
        ]]
    }
}

//Frames son placeholders
var myEnemiesAnimFrames = {
    0: {
        idle: {start: 0, end: 39},
        attack: {start: 39, end: 99},
        damage: {start: 99, end: 129},
        death: {start: 129, end: 179},
    },
    1: {
        idle: {start: 0, end: 48},
        /*
        attack: {start: 48, end: 96},
        damage: {start: 96, end: 136},
        death: {start: 136, end: 194},*/
        attack: {start: 0, end: 96},
        damage: {start: 0, end: 39},
        death: {start: 0, end: 58},
    },
    2: {
        idle: {start: 0, end: 59},
        attack: {start: 59, end: 119},
        damage: {start: 119, end: 209},
        death: {start: 209, end: 269},
    },
    3:{
        idle: {start: 0, end: 59},
        attack: {start: 59, end: 119},
        damage: {start: 119, end: 154},
        death: {start: 154, end: 219},
    },
    4:{
        idle: {start: 0, end: 29},
        attack: {start: 29, end: 74},
        damage: {start: 74, end: 129},
        death: {start: 129, end: 179},
    },
    5:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
    6:{
        idle: {start: 0, end: 59},
        attack: {start: 59, end: 89},
        damage: {start: 89, end: 154},
        death: {start: 154, end: 209},
    },
    7:{
        idle: {start: 0, end: 48},
        attack: {start: 49, end: 99},
        damage: {start: 99, end: 145},
        death: {start: 145, end: 200},
    },
    8:{
        idle: {start: 0, end: 39},
        attack: {start: 39, end: 99},
        damage: {start: 99, end: 129},
        death: {start: 129, end: 179},
    },
    9:{
        idle: {start: 22, end: 40},
        attack: {start: 0, end: 18},
        attack2: {start: 0, end: 18},
        damage: {start: 41, end: 63},
        death: {start: 64, end: 70},
    },
}
