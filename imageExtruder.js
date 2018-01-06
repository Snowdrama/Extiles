function drawImage(spriteSize, extrudeSize) {
    //grab all the varriables, img in global space
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // var showAnimation = document.getElementById("showAnimation").checked;
    // var animationTime = parseInt(document.getElementById("animationTime").value);
    var showAnimation = true;
    var animationTime = 10;
    extrudeSize = 4;

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
    console.log(canvas.width);
    console.log(canvas.height);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    //Old version only works on opaque tiles
    // 32x32 image of 16 tiles is a 2x2 tile sprite
    // for(y = 0; y < img.height/spriteSize; y++){
    //     for(x = 0; x < img.width/spriteSize; x++){

    //         //The coordinate on the original sheet
    //         var tileXCoord = x * spriteSize;
    //         var tileYCoord = y * spriteSize;

    //         //the new coordinate of the main tile new sheet
    //         var newTileXCoord = tileXCoord + ((x*2)*extrudeSize)+extrudeSize;
    //         var newTileYCoord = tileYCoord + ((y*2)*extrudeSize)+extrudeSize;

    //         //Draw the tile in all the corners
    //         for(var i = extrudeSize; i >= 0; i--){
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord-i, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord+i, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord-i, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord+i, spriteSize, spriteSize);
    //         }
            
    //         //draw the tile at all the cardinals
    //         for(var i = extrudeSize; i >= 0; i--){
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord-i, newTileYCoord, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord+i, newTileYCoord, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord-i, spriteSize, spriteSize);
    //             ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord+i, spriteSize, spriteSize);
    //         }

    //         //draw it again smack dab in the middle
    //         ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord, spriteSize, spriteSize);
    //     }
    // }

    //Variation that only extrues the edges(fix for tiles that arent't fully opaque)
    // Hella expensive in comparison, but works with character/object tiles that include transparency
    //for each pixel in the original image
    for(tileY = 0; tileY < img.height/spriteSize; tileY++){
        //For the y lines we want to copy rows 0 and 16
        for(tileX = 0; tileX < img.width/spriteSize; tileX++){
            var tileXCoord = tileX * spriteSize;
            var tileYCoord = tileY * spriteSize;

            var newTileXCoord = tileXCoord + ((tileX*2)*extrudeSize)+extrudeSize;
            var newTileYCoord = tileYCoord + ((tileY*2)*extrudeSize)+extrudeSize;
            // console.log(newTileXCoord);
            // console.log(newTileYCoord);
            //for each pixel in the tile
            for(pixelY = 0; pixelY < spriteSize; pixelY++){
                for(pixelX = 0; pixelX < spriteSize; pixelX++){
                    // console.log("PixelCood X: " + pixelX);
                    // console.log("PixelCood Y: " + pixelY);
                    var sampleX = pixelX + (tileX * spriteSize);
                    var sampleY = pixelY + (tileY * spriteSize);
                    var newSampleX = sampleX + extrudeSize;
                    var newSampleY = sampleY + extrudeSize;

                    //Up
                    if(pixelY == 0){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord+pixelX, newTileYCoord-1-ey, 1, 1);
                        }
                    }

                    //Down
                    if(pixelY == spriteSize-1){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord+pixelX, newTileYCoord+spriteSize+ey, 1, 1);
                        }
                    }

                    //Left
                    if(pixelX == 0){
                        for(var ex = 0; ex < extrudeSize; ex++){
                            ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord+pixelY, 1, 1);
                        }
                    }
                    
                    //Right
                    if(pixelX == spriteSize-1){
                        for(var ex = 0; ex < extrudeSize; ex++){
                            ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord+pixelY, 1, 1);
                        }
                    }

                    //UpLeft
                    if(pixelX == 0 && pixelY == 0){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord-1-ey, 1, 1);
                            }
                        }
                    }

                    //UpRight
                    if(pixelX == spriteSize-1 && pixelY == 0){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord-1-ey, 1, 1);
                            }
                        }
                    }

                    //DownLeft
                    if(pixelX == 0 && pixelY == spriteSize-1){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord+spriteSize+ey, 1, 1);
                            }
                        }
                    }

                    //DownRight
                    if(pixelX == spriteSize-1 && pixelY == spriteSize-1){
                        for(var ey = 0; ey < extrudeSize; ey++){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord+spriteSize+ey, 1, 1);
                            }
                        }
                    }
                }
            }
            ctx.drawImage(img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord, spriteSize, spriteSize);
        }
    }

    var button = document.getElementById('btn-download');
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
    button.download = "extrudedImage.png";
}