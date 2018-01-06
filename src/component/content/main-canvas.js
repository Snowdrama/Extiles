
import React, { Component } from 'react';
import styled from "styled-components";
var createReactClass = require('create-react-class');


export const CanvasComponent = createReactClass({
    handleClick: function() {
      loadImage();
    },
    render: function(){
        return (
            <div>
                <input type='file' id='imgfile' />
                <input type='button' id='btnLoad' onClick={this.handleClick} />
                <canvas id="canvas" width="0" height="0">Your Browser does not support canvas</canvas>
            </div>
        );
    }
});