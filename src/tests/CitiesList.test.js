import React from 'react';
import { render, screen } from '@testing-library/react';
import CitiesList from '../components/CitiesList';

const sampleCities = [
  { cityName: 'Accra', dateArrived: '2024-01-01' },
  { cityName: 'Sunyani', dateArrived: '2023-02-15' },
];

test('renders CitiesList component with sample cities', () => {
  render(<CitiesList cities={sampleCities} onRemoveCity={() => {}} />);
  
  const listTitle = screen.getByText(/List of cities travelled/i);
  expect(listTitle).toBeInTheDocument();

  sampleCities.forEach((city) => {
    const cityName = screen.getByText(new RegExp(city.cityName, 'i'));
    expect(cityName).toBeInTheDocument();
  });
});
