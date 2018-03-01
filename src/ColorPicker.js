import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorLabel = styled.div`
display: inline-block;
width: 50px;
text-align: left;
`;

const ColorBox = styled.div`
width: 100px;
height: 100px;
border: 1px solid black;
background: ${props => `rgb(${props.red},${props.green},${props.blue})`};
`;


function LabeledSlider(props) {
  return (
    <div>
      <ColorLabel>{props.label}:</ColorLabel>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={event => props.valueChange(event.target.value)}
      />
      <input
        type="number"
        value={props.value}
        min="0"
        max="255"
        step="1"
        onChange={event => props.valueChange(event.target.value)}
      />
    </div>
  );
}

// A more precise propTypes would use a custom range validator for value
LabeledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  valueChange: PropTypes.func.isRequired,
};

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = { red: 0, green: 0, blue: 0 };
  }

  render() {
    return (
      <div>
        <ColorBox {...this.state} />
        <LabeledSlider
          label="Red"
          value={this.state.red}
          valueChange={(value) => { this.setState({ red: value }); }}
        />
        <LabeledSlider
          label="Green"
          value={this.state.green}
          valueChange={(value) => { this.setState({ green: value }); }}
        />
        <LabeledSlider
          label="Blue"
          value={this.state.blue}
          valueChange={(value) => { this.setState({ blue: value }); }}
        />
      </div>
    );
  }
}

export { ColorBox };
export default ColorPicker;
