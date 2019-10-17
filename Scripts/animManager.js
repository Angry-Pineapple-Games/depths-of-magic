/*Script encargado de organizar y reproducir animaciones a partir de spritesheets*/

var myAnimManager = {
    
    getFrameInfoFromJSON:function(JSONArray){
        var arrayFrames = [];
        if(JSONArray.length > 0){
            $.each(JSONArray, function(index, value){
                arrayFrames.push(value);
            });
            //console.log("Extraction succesful");
        }else{
            console.log("JSON file in wrong format. Please use JSON Array");
        }
        return arrayFrames;
    },
    getAnimFrames: function(spritesheet, start, end){
        var newAnim = [];
        for(var i = start; i <= end; i++){
            newAnim.push(spritesheet.frames[i]);
        }
        return newAnim;
    },

    drawFrame: function(ctx, img, info, frame, x, y, resize){
        ctx.drawImage(img, info[frame].frame.x, info[frame].frame.y, 
                        info[frame].frame.w, info[frame].frame.h, 
                        x, y, info[frame].frame.w * resize, info[frame].frame.h * resize);
        //ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    },

    //Cambia la animacion actual del personaje y recibe un callback que se hara
    //al terminar la animacion
    changeAnimation: function(character, type, callback = character.currentAnimation.reset){
        switch (type){
            case "idle":
                character.currentAnimation = character.animations.idle;
                character.currentImg = character.imgs.idle;
                break;
            case "attack":
                character.currentAnimation = character.animations.attack;
                character.currentImg = character.imgs.attack;
                break;
            case "damage":
                character.currentAnimation = character.animations.damage;
                character.currentImg = character.imgs.damage;
                break;
            case "death":
                character.currentAnimation = character.animations.death;
                character.currentImg = character.imgs.death;
                break;
            case "victory":
                character.currentAnimation = character.animations.victory;
                character.currentImg = character.imgs.victory;
                break;
            case "death2":
                character.currentAnimation = character.animations.death2;
                character.currentImg = character.imgs.death2;
                break;
            case "death3":
                character.currentAnimation = character.animations.death3;
                character.currentImg = character.imgs.death3;
                break;
            case "death4":
                character.currentAnimation = character.animations.death4;
                character.currentImg = character.imgs.death4;
                break; 
            case "death5":
                character.currentAnimation = character.animations.death5;
                character.currentImg = character.imgs.death5;
                break; 
            default:
                console.log("wrong animation name");
                break;
        }
        character.currentAnimation.reset();
        character.currentAnimation.callback = callback;
    },
    playSequenceSFX: function(sequence, sfx, callback){
        let nextCallback = callback;
        for(var i = sequence.length - 1; i >= 0; i--){
            nextCallback = sfx.playSFX.bind(sfx, sequence[i][0], sequence[i][1], nextCallback);
        }
        nextCallback();//reproduce el primer efecto de la secuencia y va haciendo los callbacks hasta el que llega por parametro
    }
}

//Clase para las animaciones, que controla el estado de ellas
//y contiene las funciones encargadas de modificar su estado
class Animation{
    constructor(spritesheet, start, end){
        this.framesInfo = myAnimManager.getAnimFrames(spritesheet, start, end);
        this.currentFrame = 0;
        this.length = this.framesInfo.length;
        this.hidden = false;
        this.callback = this.reset;
    }
    animate(ctx, img, x, y, resize){
        if(!this.hidden){
            myAnimManager.drawFrame(ctx, img, this.framesInfo, this.currentFrame, x, y, resize);
            //La animacion solo avanza en frames impares para que vaya a 30fps mientras el game loop va a 60fps
            if(!myGameManager.pause){
                this.currentFrame++;
            }
            if(this.currentFrame >= this.length){
                this.callback();
            }
        }
    }
    reset(){
        this.currentFrame = 0;
        this.hidden = false;
    }
    hide(){
        this.hidden = true;
    }
}

var mySFX = {
    animations:{
        damage:{},
        buff:{},
        debuff:{},
        heal:{},
        superbuff:{}
    },
    imgs:{
        damage:{},
        buff:{},
        debuff:{},
        heal:{},
        superbuff:{}
    },
    currentAnimation:{},
    currentImg:{},
    pos:[0,0],
    generateSFX: function(){
        this.generateAnimationsInfo();
        this.saveImages();
        this.currentImg = this.imgs.damage;
        this.currentAnimation = this.animations.damage;
        this.currentAnimation.hide();
        return this;
    },
    generateAnimationsInfo: function(){
        this.animations.damage = new Animation(myPreload.spritesInfo.damage, 0, 5);
        this.animations.buff = new Animation(myPreload.spritesInfo.buff, 0, 8);
        this.animations.debuff = new Animation(myPreload.spritesInfo.debuff, 0, 8);
        this.animations.heal = new Animation(myPreload.spritesInfo.heal, 0, 13);
        this.animations.superbuff = new Animation(myPreload.spritesInfo.superbuff, 0, 7);
    },
    saveImages: function(){
        this.imgs.damage = myPreload.images.damage;
        this.imgs.buff = myPreload.images.buff;
        this.imgs.debuff = myPreload.images.debuff;
        this.imgs.heal = myPreload.images.heal;
        this.imgs.superbuff = myPreload.images.superbuff;
    },
    playSFX: function(type, pos, callback = function(){}){
        this.pos = pos;
        switch(type){
            case "damage":
                this.currentImg = this.imgs.damage;
                this.currentAnimation = this.animations.damage;
                break;
            case "buff":
                this.currentImg = this.imgs.buff;
                this.currentAnimation = this.animations.buff;
                break;
            case "debuff":
                this.currentImg = this.imgs.debuff;
                this.currentAnimation = this.animations.debuff;
                break;
            case "heal":
                this.currentImg = this.imgs.heal;
                this.currentAnimation = this.animations.heal;
                break;
            case "superbuff":
                this.currentImg = this.imgs.superbuff;
                this.currentAnimation = this.animations.superbuff;
                break;
            default:
                console.log("wrong animation name");
                break;
        }
        this.currentAnimation.reset();
        this.currentAnimation.callback = function(){ callback(); this.hide();};
    }
}
//referencias: https://www.encodedna.com/javascript/convert-data-in-json-file-in-an-array-using-javascript-or-jquery.htm