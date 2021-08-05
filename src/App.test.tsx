import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const weatherComponent = screen.getByText('Reload weather');
  expect(weatherComponent).toBeInTheDocument();
});
