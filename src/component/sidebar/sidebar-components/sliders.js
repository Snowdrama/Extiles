import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../style/color';
import { FontSizes } from '../../../style/size';


const createInputSlider = (elementName, elementId, minValue, maxValue, stepValue) => styled.input.attrs({
    type: 'range',
    name: elementName,
    id: elementId,
    min: minValue,
    max: maxValue,
    step: stepValue,
    defaultValue: "0"
  })`
  width:100%
`;

export const TileSize = createInputSlider("tileSize", "tileSize", 0, 256, 16);
export const ExtrudeWidth = createInputSlider("extrudeWidth", "extrudeWidth", 0, 16, 1);