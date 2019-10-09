var myHeroCharacter = {
    hp: 100,
    hpMax: 100,
    buff: 0,
    ap: 40,
    apMax: 40,
    dp: 30,
    dpMax: 30,
    img:{},
    currentAnimation:{},
    animations:{
        idle:{},
        attack:{},
        attack2:{},
        damage:{},
        death:{},
        victory:{}
    },
    generateHero: function(img) {
        this.img = img;
        this.hp = this.hpMax;
        this.buff = 0;
        this.ap = this.apMax;
        this.dp = this.dpMax;
        this.generateAnimationsInfo();
        this.currentAnimation = this.animations.idle;
        return this;
    },
    generateAnimationsInfo: function(){
        let spritesheet = myPreload.spritesInfo.hero;
        this.animations.idle = new Animation(spritesheet, 0, 59);//placeholder
        this.animations.attack = new Animation(spritesheet, 250, 294);//placeholder
        this.animations.attack2 = new Animation(spritesheet, 0, 18);//placeholder
        this.animations.damage = new Animation(spritesheet, 120, 149);//placeholder
        this.animations.death = new Animation(spritesheet, 150, 249);//placeholder
        this.animations.victory = new Animation(spritesheet, 60, 119);//placeholder
    },
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html