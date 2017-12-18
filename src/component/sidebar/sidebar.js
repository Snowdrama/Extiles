import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGrey, LemonGreen, LightLemonGreen, LemonOrange } from '../../style/color';

const topBarHeight = '2.5em';

export const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: ${topBarHeight};
    bottom: 0;

    width: 15em;

    background-color: ${ LemonGreen };
    color: ${ LightLemonGreen };
    padding:5px;
`;
