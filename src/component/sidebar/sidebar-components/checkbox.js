
const createInputSlider = (elementName, elementId) => styled.input.attrs({
    type: 'checkbox',
    name: elementName,
    id: elementId
  })`
  width:100%
`;

export const ShowSlice = createInputSlider("tileSize", "tileSize");
export const ExtrudeWidth = createInputSlider("extrudeWidth", "extrudeWidth");