import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityAddForm from '../components/CityAddForm';

test('renders CityAddForm component', () => {
  render(<CityAddForm onAddCity={() => {}} />);
  const cityNameInput = screen.getByRole('textbox', {name:'City Name'});
  const dateArrivedInput = screen.getByRole('textbox', {type:'date'});
  const addButton = screen.getByRole('button', {name:'Add City'});

  expect(cityNameInput).toBeInTheDocument();
  expect(dateArrivedInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(addButton).toBeDisabled();
});

test('calls onAddCity with new city when Add City button is clicked', () => {
  const mockOnAddCity = jest.fn();
  render(<CityAddForm onAddCity={mockOnAddCity} />);

  const cityNameInput = screen.getByLabelText('City Name');
  const dateArrivedInput = screen.getByLabelText('Date Arrived');
  const addButton = screen.getByRole('button', { name: 'Add City' });

  fireEvent.change(cityNameInput, { target: { value: 'Accra' } });
  fireEvent.change(dateArrivedInput, { target: { value: '2022-01-01' } });

  expect(dateArrivedInput.value).toBe('2022-01-01');
  expect(addButton).not.toBeDisabled();

  fireEvent.click(addButton);

  expect(mockOnAddCity).toHaveBeenCalledWith({ cityName: 'Accra', dateArrived: '2022-01-01' });
});
