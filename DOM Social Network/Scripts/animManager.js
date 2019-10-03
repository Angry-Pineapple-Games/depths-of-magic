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
        for(var i = start; i < end; i++){
            newAnim.push(spritesheet.frames[i]);
        }
        return newAnim;
    },

    drawFrame: function(ctx, img, animation, frame, x, y){
        ctx.drawImage(img, animation[frame].frame.x, animation[frame].frame.y, 
                        animation[frame].frame.w, animation[frame].frame.h, 
                        x, y, animation[frame].frame.w, animation[frame].frame.h);
        //ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    },
}

//referencias: https://www.encodedna.com/javascript/convert-data-in-json-file-in-an-array-using-javascript-or-jquery.htm