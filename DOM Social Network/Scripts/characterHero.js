var myHeroCharacter = {
    hp: 100,
    hpMax: 100,
    buf: 0,
    ap: 40,
    apMax: 40,
    dp: 30,
    dpMax: 30,
    img:{},
    generateHero: function(img) {
        this.img = img;
        this.hp = this.hpMax;
        this.buf = 0;
        this.ap = this.apMax;
        this.dp = this.dpMax;
        return this;
    }
}
//https://konvajs.org/docs/sandbox/GIF_On_Canvas.html