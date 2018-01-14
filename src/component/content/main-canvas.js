
import React, { Component } from 'react';
import styled from "styled-components";
var createReactClass = require('create-react-class');


export const CanvasComponent = createReactClass({
    getInitialState: function(){
      return{
          fr: new FileReader(),
          img: new Image()
      }  
    },
    createImage: function(){
        this.state.img.src = this.state.fr.result;
        this.state.img.onload = this.drawImage();
    },
    drawImage: function(){
        //HACK
        var spriteSize = 32;
        var numberOfTilesWide;
        var numberOfTilesHigh;
        
        console.log('drawing image.');
          //grab all the varriables, img in global space
        var canvas = this.can;
        console.log(canvas);
        var ctx = this.can.getContext('2d');
        // var showAnimation = document.getElementById("showAnimation").checked;
        // var animationTime = parseInt(document.getElementById("animationTime").value);
        var showAnimation = true;
        var animationTime = 10;
        var extrudeSize = 4;
    
        numberOfTilesWide = (this.state.img.width/spriteSize);
        numberOfTilesHigh = (this.state.img.height/spriteSize);
        //We make the canvas width the width of the original sheet + the extrude size for each tile
        //* = original pixel
        //+ = new Pixel
        //Example 8 pixels becomes
        //********
        //Becomes
        //+****++****+
        //Or extrude 2
        //++****++++****++
        canvas.width  = this.state.img.width  + ((numberOfTilesWide * extrudeSize) * 2);
        canvas.height = this.state.img.height + ((numberOfTilesHigh * extrudeSize) * 2);
        console.log(canvas.width);
        console.log(canvas.height);
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
        //Variation that only extrues the edges(fix for tiles that arent't fully opaque)
        // Hella expensive in comparison, but works with character/object tiles that include transparency
        //for each pixel in the original image
        for(var tileY = 0; tileY < this.state.img.height/spriteSize; tileY++){
            //For the y lines we want to copy rows 0 and 16
            for(tileX = 0; tileX < this.state.img.width/spriteSize; tileX++){
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
                                ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord+pixelX, newTileYCoord-1-ey, 1, 1);
                            }
                        }
    
                        //Down
                        if(pixelY == spriteSize-1){
                            for(var ey = 0; ey < extrudeSize; ey++){
                                ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord+pixelX, newTileYCoord+spriteSize+ey, 1, 1);
                            }
                        }
    
                        //Left
                        if(pixelX == 0){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord+pixelY, 1, 1);
                            }
                        }
                        
                        //Right
                        if(pixelX == spriteSize-1){
                            for(var ex = 0; ex < extrudeSize; ex++){
                                ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord+pixelY, 1, 1);
                            }
                        }
    
                        //UpLeft
                        if(pixelX == 0 && pixelY == 0){
                            for(var ey = 0; ey < extrudeSize; ey++){
                                for(var ex = 0; ex < extrudeSize; ex++){
                                    ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord-1-ey, 1, 1);
                                }
                            }
                        }
    
                        //UpRight
                        if(pixelX == spriteSize-1 && pixelY == 0){
                            for(var ey = 0; ey < extrudeSize; ey++){
                                for(var ex = 0; ex < extrudeSize; ex++){
                                    ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord-1-ey, 1, 1);
                                }
                            }
                        }
    
                        //DownLeft
                        if(pixelX == 0 && pixelY == spriteSize-1){
                            for(var ey = 0; ey < extrudeSize; ey++){
                                for(var ex = 0; ex < extrudeSize; ex++){
                                    ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord-1-ex, newTileYCoord+spriteSize+ey, 1, 1);
                                }
                            }
                        }
    
                        //DownRight
                        if(pixelX == spriteSize-1 && pixelY == spriteSize-1){
                            for(var ey = 0; ey < extrudeSize; ey++){
                                for(var ex = 0; ex < extrudeSize; ex++){
                                    ctx.drawImage(this.state.img, sampleX, sampleY, 1, 1, newTileXCoord+spriteSize+ex, newTileYCoord+spriteSize+ey, 1, 1);
                                }
                            }
                        }
                    }
                }
                ctx.drawImage(this.state.img, tileXCoord, tileYCoord, spriteSize, spriteSize, newTileXCoord, newTileYCoord, spriteSize, spriteSize);
            }
        }
    
        var dataURL = canvas.toDataURL('image/png');
        this.btn.href = dataURL;
        this.btn.download = "extrudedImage.png";  
        console.log(dataURL);
    },
    handleClick: function() {
        var input;
        var file;
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = this.file;
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        } else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        } else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        } else {
            file = input.files[0];
            this.state.fr.onload = this.createImage();
            this.state.fr.readAsDataURL(file);
        }
    },
    render: function(){
        return (
            <div>
                <input ref={(input)=>{this.file = input;}} type='file' id='imgfile' />
                <input ref={(_btn)=>{this.btn = _btn;}} href='' download='' type='button' id='btnLoad' onClick={this.handleClick} />
                <canvas ref={(can)=>{this.can = can;}} id="canvas" width="0" height="0">Your Browser does not support canvas</canvas>
            </div>
        );
    }
});