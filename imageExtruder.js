
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imageLoaded() {
    var spriteSize  = parseInt(document.getElementById("spriteSize").value);
    var extrudeSize = parseInt(document.getElementById("extrudeSize").value);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var showAnimation = document.getElementById("showAnimation").checked;
    var animationTime = parseInt(document.getElementById("animationTime").value);


    console.log(img.width);
    console.log(img.height);
    
    numberOfTilesWide = (img.width/spriteSize);
    numberOfTilesHigh = (img.height/spriteSize);
    //We make the canvas width the width of the original sheet + the extrude size for each tile
    //* = original pixel
    //+ = new Pixel
    //Example 8 pixels becomes
    //********
    //Becomes
    //+****++****+
    //Or extrude 2
    //++****++++****++
    canvas.width  = img.width  + ((numberOfTilesWide * extrudeSize) * 2);
    canvas.height = img.height + ((numberOfTilesHigh * extrudeSize) * 2);
    // 32x32 image of 16 tiles is a 2x2 tile sprite
    for(y = 0; y < img.height/spriteSize; y++){
        for(x = 0; x < img.width/spriteSize; x++){
            //The coordinate on the original sheet
            var tileXCoord = x * spriteSize;
            var tileYCoord = y * spriteSize;

            //the new coordinate of the main tile new sheet
            var newTileXCoord = tileXCoord + ((x*2)*extrudeSize)+extrudeSize;
            var newTileYCoord = tileYCoord + ((y*2)*extrudeSize)+extrudeSize;

            //Draw the tile in all the corners
            for(var i = extrudeSize; i >= 0; i--){
                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord-i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);

                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord+i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);

                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord-i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);

                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord+i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);
            }
            
            //draw the tile at all the cardinals
            for(var i = extrudeSize; i >= 0; i--){
                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);

                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);
                
                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord-i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);
                
                ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord+i, spriteSize, spriteSize);
                if(showAnimation)await sleep(animationTime);
            }

            //draw it again smack dab in the middle
            ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord, spriteSize, spriteSize);
            if(showAnimation)await sleep(animationTime);
        }
    }
}