import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors, DarkGrey, LightGrey, LemonGreen, LightLemonGreen, LemonOrange, Transparent, BoxShadowColor, BoxShadowColorHover } from '../../../style/color';
import { FontSizes } from '../../../style/size';

export const DownloadButton = styled.button`
    padding: 10px;
    margin: 10px; /* 10px on either side */
    width:calc(100% - 20px - 10px); /* 10px on either side 5px on either side for sidebar padding = 20px-10px */
    border: solid 3px;
    border-radius: 10px;
    border-color: ${ Colors.LemonOrange };
    outline: none;
    box-shadow: 0 3px 6px ${ Colors.BoxShadowColor }, 0 3px 6px rgba(0,0,0,0.23);


    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    background-color: ${ Transparent }; /** White with 0 alpha */
    &:hover {
        box-shadow: 0 10px 20px ${ Colors.BoxShadowColorHover }, 0 6px 6px rgba(0,0,0,0.23);
        background-color: ${ Colors.LemonOrange }; /** Full alpha */
        color: ${ Colors.DarkGrey };
    }

    &:active {
        box-shadow: 0 1px 3px ${ Colors.BoxShadowColor }, 0 1px 2px rgba(0,0,0,0.24);
    }


    /* Font stuff*/
    font-size: ${ FontSizes.LargeFont };
    color: ${ Colors.LemonOrange };\
    font-family:inherit;

    /* Position */
    position:absolute;
    bottom:5px;
`;