import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const saveButton = screen.getByText(/Save/i);
  expect(saveButton).toBeInTheDocument();
  expect(saveButton).toBeDisabled();
});