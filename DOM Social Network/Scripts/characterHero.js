var myHeroCharacter = {
    hp: 100,
    hpMax: 100,
    buf: 0,
    ap: 40,
    apMax: 40,
    dp: 30,
    dpMax: 30,
    img:{},
    animations:{
        idle:[],
        attack:[]
        //insertar mas
    },
    generateHero: function(img) {
        this.img = img;
        this.hp = this.hpMax;
        this.buf = 0;
        this.ap = this.apMax;
        this.dp = this.dpMax;
        this.generateAnimationsInfo();
        return this;
    },
    generateAnimationsInfo: function(){
        let spritesheet = myPreload.spritesInfo.spritesHero;
        this.animations.idle = myAnimManager.getAnimFrames(spritesheet, 22, 40);//placeholder
        this.animations.attack = myAnimManager.getAnimFrames(spritesheet, 0, 18);//placeholder
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html