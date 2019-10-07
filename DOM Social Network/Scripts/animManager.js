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
                break;
            case "attack":
                character.currentAnimation = character.animations.attack;
                break;
            case "damage":
                character.currentAnimation = character.animations.damage;
                break;
            case "death":
                character.currentAnimation = character.animations.death;
                break;
            case "victory":
                character.currentAnimation = character.animations.victory;
                break;
            default:
                console.log("wrong animation name");
        }
        character.currentAnimation.reset();
        character.currentAnimation.callback = callback;
    },
}

//Clase para las animaciones, que controla el estado de ellas
//y contiene las funciones encargadas de modificar su estado
class Animation{
    constructor(spritesheet, start, end){
        this.framesInfo = myAnimManager.getAnimFrames(spritesheet, start, end);
        this.currentFrame = 0;
        this.length = this.framesInfo.length;
        this.even = true;
        this.callback = this.reset;
    }
    animate(ctx, img, x, y, resize){
        myAnimManager.drawFrame(ctx, img, this.framesInfo, this.currentFrame, x, y, resize);
        //La animacion solo avanza en frames impares para que vaya a 30fps mientras el game loop va a 60fps
        if(!this.even && !myGameManager.pause){
            this.currentFrame++;
        }
        this.even = !this.even;
        if(this.currentFrame >= this.length){
            this.callback();
        }
    }
    reset(){
        this.currentFrame = 0;
        this.even = true;
    }
}

//referencias: https://www.encodedna.com/javascript/convert-data-in-json-file-in-an-array-using-javascript-or-jquery.htm