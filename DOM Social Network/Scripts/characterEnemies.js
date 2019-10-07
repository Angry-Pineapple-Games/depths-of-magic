var myCharacterEnemies = {
    enemies: [],
    
    generateEnemies: function(scene) {
        for(var e=0; e<this.enemies.length; e++) {
            this.enemies[e].hp = this.enemies[e].hpMax;
        }
        for (var e=this.enemies.length; e<scene.enemiesMax; e++) {
            this.enemies.push(myEnemiesProperties[String(e)]);
            this.enemies[e].img = myPreload.images[this.enemies[e].img]
        }
        return this.enemies;
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