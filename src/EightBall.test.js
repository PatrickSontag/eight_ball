import React from 'react';
import { render, screen } from '@testing-library/react';
import EightBall from './EightBall';

test('it rendersnwiyhout crashing', () => {
  render(<EightBall />);
});
