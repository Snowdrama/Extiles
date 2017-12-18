import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../style/color';
import { FontSizes } from '../../../style/size';


const createInputSlider = (elementName, elementId) => styled.input.attrs({
    type: 'range',
    name: elementName,
    id: elementId
  })`
  width:100%
`;

export const TileSize = createInputSlider("tileSize", "tileSize");
export const ExtrudeWidth = createInputSlider("extrudeWidth", "extrudeWidth");