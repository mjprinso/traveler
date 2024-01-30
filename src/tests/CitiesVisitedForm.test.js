import React from 'react';
import { render, screen } from '@testing-library/react';
import CitiesVisitedForm from '../components/CitiesVisitedForm';

test('renders CitiesVisitedForm component', () => {
  render(<CitiesVisitedForm onCitiesChange={() => {}} />);
  const formTitle = screen.getByText(/Cities Travelled/i);
  expect(formTitle).toBeInTheDocument();
});

test('displays error message if no cities are added', () => {
  render(<CitiesVisitedForm onCitiesChange={() => {}} />);
  const errorMessage = screen.getByText(/Add atleast one city/i);
  expect(errorMessage).toBeInTheDocument();
});
