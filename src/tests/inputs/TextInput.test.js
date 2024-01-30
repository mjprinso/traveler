import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from '../../components/inputs/TextInput';

test('renders TextInput component', () => {
  const onChangeMock = jest.fn();

  render(
    <TextInput
      inputName="testInput"
      inputLabel="Test Input"
      isRequired={true}
      value=""
      onChange={onChangeMock}
    />
  );

  const inputElement = screen.getByLabelText(/Test Input/);

  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Test123' } });

  expect(inputElement.value).toBe('Test123');
  expect(onChangeMock).toHaveBeenCalledWith(null);

  const validationMessage = screen.getByText(/Invalid input, please input only letters/i);
  expect(validationMessage).toBeInTheDocument();
});

test('renders TextInput component with required validation', () => {
  const onChangeMock = jest.fn();

  render(
    <TextInput
      inputName="testInput"
      inputLabel="Test Input"
      isRequired={true}
      value=""
      onChange={onChangeMock}
    />
  );

  const inputElement = screen.getByLabelText(/Test Input/);

  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: ' ' } });

  const validationMessage = screen.getByText(/Test Input is required./);
  expect(validationMessage).toBeInTheDocument();
});
