import React, { Component } from 'react';
import styled from 'styled-components';
import { DarkGrey, LemonGreen, LightLemonGreen, LemonOrange } from '../../style/color';

const topBarHeight = '2.5em';

export const MainContent = styled.div`
    position: absolute;
    left: 15em;
    top: ${topBarHeight};
    bottom: 0;
    width: 100%;
    background-color: ${ DarkGrey };
    color: ${ LightLemonGreen };
    padding:5px;
`;
