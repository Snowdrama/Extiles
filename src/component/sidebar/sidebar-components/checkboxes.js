import React, { Component } from 'react';
import styled from 'styled-components';

const createInputSlider = (elementName, elementId) => styled.input.attrs({
    type: 'checkbox',
    name: elementName,
    id: elementId
  })`
  width:100%
  float:left;
`;

export const ShowSliceGrid = createInputSlider("showSliceGrid", "showSliceGrid");