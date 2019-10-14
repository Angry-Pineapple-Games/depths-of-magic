var myHeroCharacter = {
    hp: 100,
    hpIni: 100,
    hpMax: 100,
    damage: 0,
    buff: 0,
    ap: 40,
    apMax: 40,
    dp: 30,
    dpMax: 30,
    currentImg:{},
    imgs:{
        idle:{},
        attack:{},
        damage:{},
        death:{},
        victory:{},
    },
    currentAnimation:{},
    animations:{
        idle:{},
        attack:{},
        damage:{},
        death:{},
        victory:{}
    },
    generateHero: function(img) {
        this.saveImages();
        //this.img = img;
        this.hp = this.hpMax;
        this.buff = 0;
        this.ap = this.apMax;
        this.dp = this.dpMax;
        this.generateAnimationsInfo();
        this.currentAnimation = this.animations.idle;
        this.currentImg = this.imgs.idle;
        return this;
    },
    generateAnimationsInfo: function(){
        this.animations.idle = new Animation(myPreload.spritesInfo.hero_idle, 0, 59);
        this.animations.attack = new Animation(myPreload.spritesInfo.hero_attack, 0, 49);
        this.animations.damage = new Animation(myPreload.spritesInfo.hero_damage, 0, 25);
        this.animations.death = new Animation(myPreload.spritesInfo.hero_death, 0, 89);
        this.animations.victory = new Animation(myPreload.spritesInfo.hero_victory, 0, 61);
    },
    saveImages: function(){
        this.imgs.idle = myPreload.images.hero_idle;
        this.imgs.attack = myPreload.images.hero_attack;
        this.imgs.damage = myPreload.images.hero_damage;
        this.imgs.death = myPreload.images.hero_death;
        this.imgs.victory = myPreload.images.hero_victory;
    },
    resetHeroStats: function() {
        this.hp = this.hpIni;
        this.ap = this.apMax;
        this.dp = this.dpMax;
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html