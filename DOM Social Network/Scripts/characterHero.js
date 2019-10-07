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
        let spritesheet = myPreload.spritesInfo.spritesHero;
        this.animations.idle = new Animation(spritesheet, 22, 40);//placeholder
        this.animations.attack = new Animation(spritesheet, 0, 18);//placeholder
        this.animations.damage = new Animation(spritesheet, 41, 63);//placeholder
        this.animations.death = new Animation(spritesheet, 64, 70);//placeholder
        this.animations.victory = new Animation(spritesheet, 85, 114);//placeholder
    },

    //Cambia la animacion actual del personaje y recibe un callback que se hara
    //al terminar la animacion
    changeAnimationWithCallback: function(type, callback){
        switch (type){
            case "idle":
                this.currentAnimation = this.animations.idle;
                break;
            case "attack":
                this.currentAnimation = this.animations.attack;
                break;
            case "damage":
                this.currentAnimation = this.animations.damage;
                break;
            case "death":
                this.currentAnimation = this.animations.death;
                break;
            case "victory":
                this.currentAnimation = this.animations.victory;
                break;
            default:
                console.log("wrong animation name");
        }
        this.currentAnimation.reset();
        this.currentAnimation.callback = callback;
    },

    //Cambia la animacion actual sin callback, la animacion loopea al terminar
    changeAnimation: function(type){
        switch (type){
            case "idle":
                this.currentAnimation = this.animations.idle;
                break;
            case "attack":
                this.currentAnimation = this.animations.attack;
                break;
            case "damage":
                this.currentAnimation = this.animations.damage;
                break;
            case "death":
                this.currentAnimation = this.animations.death;
                break;
            case "victory":
                this.currentAnimation = this.animations.victory;
                break;
            default:
                console.log("wrong animation name");
        }
        this.currentAnimation.reset();
        this.currentAnimation.callback = this.currentAnimation.reset;
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html