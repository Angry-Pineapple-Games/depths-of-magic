/*En este script se gestiona la carga de los archivos multimedia para dejarlo disponible siempre que sea necesario*/
var myLoading = {
  images: [],
  numImages: 16,
  source: {
    firstFrame: {
      src: 'Assets/preload/DepthsOfMagic',
      width: 640,
      height: 640
    }
  },
  loadImages: function (callback) {
    let loadedImages = 0;
    for (var i = 0; i < this.numImages; i++) {
      this.images[i] = new Image();
      this.images[i].onload = function () {
        if (++loadedImages >= myLoading.numImages) {
          myPreload.loadImages(callback);
        }
      };
      this.images[i].src = this.source.firstFrame.src + String(i) + ".png";
      this.images[i].initWidth = this.source.firstFrame.width;
      this.images[i].initHeight = this.source.firstFrame.height;
    }
  }
}

var myPreload = {
  images: {},
  sources: {
    grid: {
      src: 'Assets/combat/grid.png',
      width: 640,
      height: 640
    },
    gridBlocked: {
      src: 'Assets/combat/gridBlocked.png',
      width: 640,
      height: 640
    },
    gridNodes: {
      src: 'Assets/combat/gridNodes.png',
      width: 640,
      height: 640
    },
    ropeCounterV: {
      src: 'Assets/combat/ropeCounterV.png',
      width: 40,
      height: 160
    },
    ropeCounterH: {
      src: 'Assets/combat/ropeCounterH.png',
      width: 160,
      height: 40
    },
    ropeHealV: {
      src: 'Assets/combat/ropeHealV.png',
      width: 40,
      height: 160
    },
    ropeHealH: {
      src: 'Assets/combat/ropeHealH.png',
      width: 160,
      height: 40
    },
    ropeBuffV: {
      src: 'Assets/combat/ropeBuffV.png',
      width: 40,
      height: 160
    },
    ropeBuffH: {
      src: 'Assets/combat/ropeBuffH.png',
      width: 160,
      height: 40
    },
    ropeDebuffV: {
      src: 'Assets/combat/ropeDebuffV.png',
      width: 40,
      height: 160
    },
    ropeDebuffH: {
      src: 'Assets/combat/ropeDebuffH.png',
      width: 160,
      height: 40
    },
    ropePowerV: {
      src: 'Assets/combat/ropePowerV.png',
      width: 40,
      height: 160
    },
    ropePowerH: {
      src: 'Assets/combat/ropePowerH.png',
      width: 160,
      height: 40
    },
    backgroundBlack: {
      src: 'Assets/background/backgroundBlack.png',
      width: 1920,
      height: 1440
    },
    room0: {
      src: 'Assets/fondo1.png',
      width: 1920,
      height: 1440
    },
    room1: {
      src: 'Assets/fondo2.png',
      width: 1920,
      height: 1440
    },
    room2: {
      src: 'Assets/fondo3.png',
      width: 1920,
      height: 1440
    },
    room3: {
      src: 'Assets/fondo4.png',
      width: 1920,
      height: 1440
    },
    room4: {
      src: 'Assets/fondo5.png',
      width: 1920,
      height: 1440
    },
    room5: {
      src: 'Assets/fondo6.png',
      width: 1920,
      height: 1440
    },
    room6: {
      src: 'Assets/fondo7.png',
      width: 1920,
      height: 1440
    },
    room7: {
      src: 'Assets/fondo8.png',
      width: 1920,
      height: 1440
    },
    room8: {
      src: 'Assets/fondo9.png',
      width: 1920,
      height: 1440
    },
    gameover: {
      src: 'Assets/gameover.jpg',
      width: 1920,
      height: 1440
    },
    //SFX
    damage: {
      src: 'Assets/spritesheets/spritesheet_damage.png',
      width: 1800,
      height: 2400
    },
    heal: {
      src: 'Assets/spritesheets/spritesheet_curacion.png',
      width: 1800,
      height: 2400
    },
    buff: {
      src: 'Assets/spritesheets/spritesheet_buff.png',
      width: 1800,
      height: 2400
    },
    debuff: {
      src: 'Assets/spritesheets/spritesheet_debuff.png',
      width: 1800,
      height: 2400
    },
    superbuff: {
      src: 'Assets/spritesheets/spritesheet_superbuff.png',
      width: 1800,
      height: 2400
    },
    //Hero lvl1
    hero_idle:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero_idle.png',
      width: 0,
      height: 0
    },
    hero_damage:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero_damage.png',
      width: 0,
      height: 0
    },
    hero_death:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero_death.png',
      width: 0,
      height: 0
    },
    hero_attack:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero_attack.png',
      width: 0,
      height: 0
    },
    hero_victory:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero_victory.png',
      width: 0,
      height: 0
    },
    //Hero lvl2
    hero2_idle:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero2_idle.png',
      width: 0,
      height: 0
    },
    hero2_damage:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero2_damage.png',
      width: 0,
      height: 0
    },
    hero2_death:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero2_death.png',
      width: 0,
      height: 0
    },
    hero2_attack:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero2_attack.png',
      width: 0,
      height: 0
    },
    hero2_victory:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero2_victory.png',
      width: 0,
      height: 0
    },
    //Hero lvl3
    hero3_idle:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero3_idle.png',
      width: 0,
      height: 0
    },
    hero3_damage:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero3_damage.png',
      width: 0,
      height: 0
    },
    hero3_death:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero3_death.png',
      width: 0,
      height: 0
    },
    hero3_attack:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero3_attack.png',
      width: 0,
      height: 0
    },
    hero3_victory:{
      src:'Assets/spritesheets/spritesheet_hero/spritesheet_hero3_victory.png',
      width: 0,
      height: 0
    },
    //Enemy0 FALTA
    enemy0_idle:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_idle.png',
      width: 0,
      height: 0
    },
    enemy0_damage:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_damage.png',
      width: 0,
      height: 0
    },
    enemy0_attack:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_attack.png',
      width: 0,
      height: 0
    },
    enemy0_death:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_death.png',
      width: 0,
      height: 0
    },
    //Enemy1
    enemy1_idle:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_idle.png',
      width: 0,
      height: 0
    },
    enemy1_damage:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_damage.png',
      width: 0,
      height: 0
    },
    enemy1_attack:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_attack.png',
      width: 0,
      height: 0
    },
    enemy1_death:{
      src:'Assets/spritesheets/spritesheet_enemy1/spritesheet_enemy1_death.png',
      width: 0,
      height: 0
    },
    //Enemy2
    enemy2_idle:{
      src:'Assets/spritesheets/spritesheet_enemy2/spritesheet_enemy2_idle.png',
      width: 0,
      height: 0
    },
    enemy2_damage:{
      src:'Assets/spritesheets/spritesheet_enemy2/spritesheet_enemy2_damage.png',
      width: 0,
      height: 0
    },
    enemy2_attack:{
      src:'Assets/spritesheets/spritesheet_enemy2/spritesheet_enemy2_attack.png',
      width: 0,
      height: 0
    },
    enemy2_death:{
      src:'Assets/spritesheets/spritesheet_enemy2/spritesheet_enemy2_death.png',
      width: 0,
      height: 0
    },
    //Enemy3
    enemy3_idle:{
      src:'Assets/spritesheets/spritesheet_enemy3/spritesheet_enemy3_idle.png',
      width: 0,
      height: 0
    },
    enemy3_damage:{
      src:'Assets/spritesheets/spritesheet_enemy3/spritesheet_enemy3_damage.png',
      width: 0,
      height: 0
    },
    enemy3_attack:{
      src:'Assets/spritesheets/spritesheet_enemy3/spritesheet_enemy3_attack.png',
      width: 0,
      height: 0
    },
    enemy3_death:{
      src:'Assets/spritesheets/spritesheet_enemy3/spritesheet_enemy3_death.png',
      width: 0,
      height: 0
    },
    //Enemy4
    enemy4_idle:{
      src:'Assets/spritesheets/spritesheet_enemy4/spritesheet_enemy4_idle.png',
      width: 0,
      height: 0
    },
    enemy4_damage:{
      src:'Assets/spritesheets/spritesheet_enemy4/spritesheet_enemy4_damage.png',
      width: 0,
      height: 0
    },
    enemy4_attack:{
      src:'Assets/spritesheets/spritesheet_enemy4/spritesheet_enemy4_attack.png',
      width: 0,
      height: 0
    },
    enemy4_death:{
      src:'Assets/spritesheets/spritesheet_enemy4/spritesheet_enemy4_death.png',
      width: 0,
      height: 0
    },
    //Enemy5
    enemy5_idle:{
      src:'Assets/spritesheets/spritesheet_enemy5/spritesheet_enemy5_idle.png',
      width: 0,
      height: 0
    },
    enemy5_damage:{
      src:'Assets/spritesheets/spritesheet_enemy5/spritesheet_enemy5_damage.png',
      width: 0,
      height: 0
    },
    enemy5_attack:{
      src:'Assets/spritesheets/spritesheet_enemy5/spritesheet_enemy5_attack.png',
      width: 0,
      height: 0
    },
    enemy5_death:{
      src:'Assets/spritesheets/spritesheet_enemy5/spritesheet_enemy5_death.png',
      width: 0,
      height: 0
    },
    //Enemy6
    enemy6_idle:{
      src:'Assets/spritesheets/spritesheet_enemy6/spritesheet_enemy6_idle.png',
      width: 0,
      height: 0
    },
    enemy6_damage:{
      src:'Assets/spritesheets/spritesheet_enemy6/spritesheet_enemy6_damage.png',
      width: 0,
      height: 0
    },
    enemy6_attack:{
      src:'Assets/spritesheets/spritesheet_enemy6/spritesheet_enemy6_attack.png',
      width: 0,
      height: 0
    },
    enemy6_death:{
      src:'Assets/spritesheets/spritesheet_enemy6/spritesheet_enemy6_death.png',
      width: 0,
      height: 0
    },
    //Enemy7
    enemy7_idle:{
      src:'Assets/spritesheets/spritesheet_enemy7/spritesheet_enemy7_idle.png',
      width: 0,
      height: 0
    },
    enemy7_damage:{
      src:'Assets/spritesheets/spritesheet_enemy7/spritesheet_enemy7_damage.png',
      width: 0,
      height: 0
    },
    enemy7_attack:{
      src:'Assets/spritesheets/spritesheet_enemy7/spritesheet_enemy7_attack.png',
      width: 0,
      height: 0
    },
    enemy7_death:{
      src:'Assets/spritesheets/spritesheet_enemy7/spritesheet_enemy7_death.png',
      width: 0,
      height: 0
    },
    //Enemy8
    enemy8_idle:{
      src:'Assets/spritesheets/spritesheet_enemy8/spritesheet_enemy8_idle.png',
      width: 0,
      height: 0
    },
    enemy8_damage:{
      src:'Assets/spritesheets/spritesheet_enemy8/spritesheet_enemy8_damage.png',
      width: 0,
      height: 0
    },
    enemy8_attack:{
      src:'Assets/spritesheets/spritesheet_enemy8/spritesheet_enemy8_attack.png',
      width: 0,
      height: 0
    },
    enemy8_death:{
      src:'Assets/spritesheets/spritesheet_enemy8/spritesheet_enemy8_death.png',
      width: 0,
      height: 0
    },
    //Enemy9
    enemy9_idle:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_idle.png',
      width: 0,
      height: 0
    },
    enemy9_damage:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_damage.png',
      width: 0,
      height: 0
    },
    enemy9_attack:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_attack.png',
      width: 0,
      height: 0
    },
    enemy9_death:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_death.png',
      width: 0,
      height: 0
    },
    enemy9_death2:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_death2.png',
      width: 0,
      height: 0
    },
    enemy9_death3:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_death3.png',
      width: 0,
      height: 0
    },
    enemy9_death4:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_death4.png',
      width: 0,
      height: 0
    },
    enemy9_death5:{
      src:'Assets/spritesheets/spritesheet_enemy9/spritesheet_enemy9_death5.png',
      width: 0,
      height: 0
    },
    //UI Icons
    health_icon:{
      src:'Assets/UI/healthIcon.png',
      width: 120,
      height: 120
    },
    swordShield_icon:{
      src:'Assets/UI/swordShieldIcon.png',
      width: 120,
      height: 120
    },
    buff_icon:{
      src: 'Assets/UI/BuffIcon.png',
      width: 120,
      height: 120
    },
    debuff_icon:{
      src:'Assets/UI/DebuffIcon.png',
      width: 120,
      height: 120
    }
  },
  spritesInfo: {
    damage: {
      json: spritesheet_damage,
      frames: []
    },
    heal:{
      json: spritesheet_curacion,
      frames: []
    },
    buff:{
      json: spritesheet_buff,
      frames: []
    },
    debuff:{
      json: spritesheet_debuff,
      frames: []
    },
    superbuff:{
      json: spritesheet_superbuff,
      frames: []
    },
    //Hero lvl3
    hero_idle:{
      json: spritesheet_hero_idle,
      frames:[]
    },
    hero_attack:{
      json: spritesheet_hero_attack,
      frames:[]
    },
    hero_damage:{
      json: spritesheet_hero_damage,
      frames:[]
    },
    hero_death:{
      json: spritesheet_hero_death,
      frames:[]
    },
    hero_victory:{
      json: spritesheet_hero_victory,
      frames:[]
    },
    //Hero lvl2
    hero2_idle:{
      json: spritesheet_hero2_idle,
      frames:[]
    },
    hero2_attack:{
      json: spritesheet_hero2_attack,
      frames:[]
    },
    hero2_damage:{
      json: spritesheet_hero2_damage,
      frames:[]
    },
    hero2_death:{
      json: spritesheet_hero2_death,
      frames:[]
    },
    hero2_victory:{
      json: spritesheet_hero2_victory,
      frames:[]
    },
    //Hero lvl3
    hero3_idle:{
      json: spritesheet_hero3_idle,
      frames:[]
    },
    hero3_attack:{
      json: spritesheet_hero3_attack,
      frames:[]
    },
    hero3_damage:{
      json: spritesheet_hero3_damage,
      frames:[]
    },
    hero3_death:{
      json: spritesheet_hero3_death,
      frames:[]
    },
    hero3_victory:{
      json: spritesheet_hero3_victory,
      frames:[]
    },
    //Enemy0 FALTA
    enemy0_idle:{
      json: spritesheet_enemy1_idle,
      frames:[]
    },
    enemy0_attack:{
      json: spritesheet_enemy1_attack,
      frames:[]
    },
    enemy0_damage:{
      json: spritesheet_enemy1_damage,
      frames:[]
    },
    enemy0_death:{
      json: spritesheet_enemy1_death,
      frames:[]
    },
    //Enemy1
    enemy1_idle:{
      json: spritesheet_enemy1_idle,
      frames:[]
    },
    enemy1_attack:{
      json: spritesheet_enemy1_attack,
      frames:[]
    },
    enemy1_damage:{
      json: spritesheet_enemy1_damage,
      frames:[]
    },
    enemy1_death:{
      json: spritesheet_enemy1_death,
      frames:[]
    },
    //Enemy2
    enemy2_idle:{
      json: spritesheet_enemy2_idle,
      frames:[]
    },
    enemy2_attack:{
      json: spritesheet_enemy2_attack,
      frames:[]
    },
    enemy2_damage:{
      json: spritesheet_enemy2_damage,
      frames:[]
    },
    enemy2_death:{
      json: spritesheet_enemy2_death,
      frames:[]
    },
    //Enemy3
    enemy3_idle:{
      json: spritesheet_enemy3_idle,
      frames:[]
    },
    enemy3_attack:{
      json: spritesheet_enemy3_attack,
      frames:[]
    },
    enemy3_damage:{
      json: spritesheet_enemy3_damage,
      frames:[]
    },
    enemy3_death:{
      json: spritesheet_enemy3_death,
      frames:[]
    },
    //Enemy4
    enemy4_idle:{
      json: spritesheet_enemy4_idle,
      frames:[]
    },
    enemy4_attack:{
      json: spritesheet_enemy4_attack,
      frames:[]
    },
    enemy4_damage:{
      json: spritesheet_enemy4_damage,
      frames:[]
    },
    enemy4_death:{
      json: spritesheet_enemy4_death,
      frames:[]
    },
    //Enemy5
    enemy5_idle:{
      json: spritesheet_enemy5_idle,
      frames:[]
    },
    enemy5_attack:{
      json: spritesheet_enemy5_attack,
      frames:[]
    },
    enemy5_damage:{
      json: spritesheet_enemy5_damage,
      frames:[]
    },
    enemy5_death:{
      json: spritesheet_enemy5_death,
      frames:[]
    },
    //Enemy6
    enemy6_idle:{
      json: spritesheet_enemy6_idle,
      frames:[]
    },
    enemy6_attack:{
      json: spritesheet_enemy6_attack,
      frames:[]
    },
    enemy6_damage:{
      json: spritesheet_enemy6_damage,
      frames:[]
    },
    enemy6_death:{
      json: spritesheet_enemy6_death,
      frames:[]
    },
    //Enemy7
    enemy7_idle:{
      json: spritesheet_enemy7_idle,
      frames:[]
    },
    enemy7_attack:{
      json: spritesheet_enemy7_attack,
      frames:[]
    },
    enemy7_damage:{
      json: spritesheet_enemy7_damage,
      frames:[]
    },
    enemy7_death:{
      json: spritesheet_enemy7_death,
      frames:[]
    },
    //Enemy8
    enemy8_idle:{
      json: spritesheet_enemy8_idle,
      frames:[]
    },
    enemy8_attack:{
      json: spritesheet_enemy8_attack,
      frames:[]
    },
    enemy8_damage:{
      json: spritesheet_enemy8_damage,
      frames:[]
    },
    enemy8_death:{
      json: spritesheet_enemy8_death,
      frames:[]
    },
    //Enemy9
    enemy9_idle:{
      json: spritesheet_enemy9_idle,
      frames:[]
    },
    enemy9_attack:{
      json: spritesheet_enemy9_attack,
      frames:[]
    },
    enemy9_damage:{
      json: spritesheet_enemy9_damage,
      frames:[]
    },
    enemy9_death:{
      json: spritesheet_enemy9_death,
      frames:[]
    },
    enemy9_death2:{
      json: spritesheet_enemy9_death2,
      frames:[]
    },
    enemy9_death3:{
      json: spritesheet_enemy9_death3,
      frames:[]
    },
    enemy9_death4:{
      json: spritesheet_enemy9_death4,
      frames:[]
    },
    enemy9_death5:{
      json: spritesheet_enemy9_death5,
      frames:[]
    }
  },
  loadImages: function (callback) {
    let loadedImages = 0;
    let numImages = 0;
    for (var src in this.sources) {
      numImages++;
    }
    for (var src in this.sources) {
      this.images[src] = new Image();
      this.images[src].decoding = 'async';
      this.images[src].onload = function () {
        myGameArea.resizeBackground(myLoading.images[Math.trunc((loadedImages / numImages) * myLoading.numImages)], 1);
        if (++loadedImages >= numImages) {
          callback();
        }
      };
      this.images[src].src = this.sources[src].src;
      this.images[src].initWidth = this.sources[src].width;
      this.images[src].initHeight = this.sources[src].height;
    }
    for (var spr in this.spritesInfo) {
      this.spritesInfo[spr].frames = myAnimManager.getFrameInfoFromJSON(this.spritesInfo[spr].json);
    }
  }
}