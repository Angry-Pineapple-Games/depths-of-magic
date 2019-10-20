var myHeroCharacter = {//define las propiedades del heroe y las funciones que lo modifican
    hp: 100,
    hpIni: 100,
    hpMax: 100,
    damage: 0,
    healing: 0,
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
    generateHero: function(levelId = 1) {//genera el heroe con las propiedades restauradas para un nivel en concreto
        this.saveImages(levelId);
        this.hp = this.hpMax;
        this.buff = 0;
        this.ap = this.apMax;
        this.dp = this.dpMax;
        this.generateAnimationsInfo(levelId);
        this.currentAnimation = this.animations.idle;
        this.currentImg = this.imgs.idle;
        return this;
    },
    generateAnimationsInfo: function(Id = 1){
        if(Id == 1){
            this.animations.idle = new Animation(myPreload.spritesInfo.hero_idle, 0, 59);
            this.animations.attack = new Animation(myPreload.spritesInfo.hero_attack, 0, 49);
            this.animations.damage = new Animation(myPreload.spritesInfo.hero_damage, 0, 25);
            this.animations.death = new Animation(myPreload.spritesInfo.hero_death, 0, 89);
            this.animations.victory = new Animation(myPreload.spritesInfo.hero_victory, 0, 61);
        }else{
            this.animations.idle = new Animation(myPreload.spritesInfo["hero"+Id+"_idle"], 0, 59);
            this.animations.attack = new Animation(myPreload.spritesInfo["hero"+Id+"_attack"], 0, 49);
            this.animations.damage = new Animation(myPreload.spritesInfo["hero"+Id+"_damage"], 0, 25);
            this.animations.death = new Animation(myPreload.spritesInfo["hero"+Id+"_death"], 0, 89);
            this.animations.victory = new Animation(myPreload.spritesInfo["hero"+Id+"_victory"], 0, 61);
        }
        
    },
    saveImages: function(Id = 1){
        if(Id == 1){
            this.imgs.idle = myPreload.images.hero_idle;
            this.imgs.attack = myPreload.images.hero_attack;
            this.imgs.damage = myPreload.images.hero_damage;
            this.imgs.death = myPreload.images.hero_death;
            this.imgs.victory = myPreload.images.hero_victory;
        }else{
            this.imgs.idle = myPreload.images["hero"+Id+"_idle"];
            this.imgs.attack = myPreload.images["hero"+Id+"_attack"];
            this.imgs.damage = myPreload.images["hero"+Id+"_damage"];
            this.imgs.death = myPreload.images["hero"+Id+"_death"];
            this.imgs.victory = myPreload.images["hero"+Id+"_victory"];
        }
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html