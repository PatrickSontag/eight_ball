import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it rendersnwiyhout crashing', () => {
  render(<App />);
});
