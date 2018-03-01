import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

// Import ColorBox to facilitate finding the component with Enzyme
import ColorPicker, { ColorBox } from './ColorPicker';

it('Updates background color', () => {
  const colorPicker = mount(<ColorPicker />);

  // Make sure there are three sliders
  const sliders = colorPicker.find('input').filter({ type: 'range' });
  expect(sliders).toHaveLength(3);
  expect(colorPicker.find(ColorBox)).toHaveStyleRule('background', 'rgb(0,0,0)');

  // "Move" the sliders
  sliders.forEach(slider => slider.simulate('change', { target: { value: '100' } }));

  // The color box background should be set to slider values
  expect(colorPicker.find(ColorBox)).toHaveStyleRule('background', 'rgb(100,100,100)');

  // The numeric values should be updated
  const values = colorPicker.find('input').filter({ type: 'number' });
  expect(values).toHaveLength(3);
  values.forEach((value) => {
    expect(value.prop('value')).toBe('100');
    value.simulate('change', { target: { value: '50' } });
  });

  // The color box background should be set to numeric values
  expect(colorPicker.find(ColorBox)).toHaveStyleRule('background', 'rgb(50,50,50)');
});
