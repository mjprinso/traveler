import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DateInput from '../../components/inputs/DateInput';

describe('DateInput component', () => {
  test('renders with Input', () => {
    render(<DateInput inputName="dob" inputLabel="Date of Birth" isRequired={true} value="" onChange={() => { }} max="2023-12-31" />);
    const dateInput = screen.getByLabelText(/Date of Birth/i);

    expect(dateInput).toBeInTheDocument();
  });

  test('displays validation message for invalid date', () => {
    render(<DateInput inputName="dob" inputLabel="Date of Birth" isRequired={false} value="invalid-date" onChange={() => { }} max="2023-12-31" />);

    const dateInput = screen.getByLabelText(/Date of Birth/i);
    fireEvent.change(dateInput, { target: { value: '2023-01-45' } });

    const validationMessage = screen.getByText(/Please input a valid date./);
    expect(validationMessage).toBeInTheDocument();
  });

  test('calls onChange with the correct value', () => {
    const mockOnChange = jest.fn();
    render(<DateInput inputName="dob" inputLabel="Date of Birth" isRequired={false} value="" onChange={mockOnChange} max="2023-12-31" />);

    const dateInput = screen.getByLabelText(/Date of Birth/i);
    fireEvent.change(dateInput, { target: { value: '2023-01-15' } });

    expect(mockOnChange).toHaveBeenCalledWith('2023-01-15');
  });
});
