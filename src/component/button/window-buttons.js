import React, { Component } from 'react';
import styled from 'styled-components';

const createWindowButton = (backgroundImage) => styled.button`
    background-color: #d5754d;
    width: 40px;
    height: 36px;
    padding: 0;
    margin: 0;
    background-image: url(${ backgroundImage });
    border: none;
    outline: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        background-color: #ff8552;
    }

    &:active {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

export const CloseButton = createWindowButton('content/close.png');
export const MaximizeButton = createWindowButton('content/maximize.png');
export const MinimizeButton = createWindowButton('content/minimize.png');
