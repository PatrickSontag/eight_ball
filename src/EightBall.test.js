import React from 'react';
import { render, screen } from '@testing-library/react';
import EightBall from './EightBall';

test('it rendersnwiyhout crashing', () => {
  render(<EightBall />);
});

test('it matches snapshot', () => {
    const {asFragment} = render(<EightBall />);
    expect(asFragment()).toMatchSnapshot()
})