import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalInfoForm from '../components/PersonalInfoForm';

test('renders PersonalInfoForm component', () => {
  render(<PersonalInfoForm onPersonalInfoChange={() => {}} />);
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const dateOfBirthInput = screen.getByLabelText(/Date of Birth/i);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(dateOfBirthInput).toBeInTheDocument();
});

test('calls onPersonalInfoChange with personalInfo when all fields are filled', () => {
  const mockOnPersonalInfoChange = jest.fn();
  render(<PersonalInfoForm onPersonalInfoChange={mockOnPersonalInfoChange} />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const dateOfBirthInput = screen.getByLabelText(/Date of Birth/i);

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(dateOfBirthInput, { target: { value: '1990-01-01' } });

  expect(mockOnPersonalInfoChange).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
  });
});

test("calls onPersonalInfoChange with null when any field is missing", () => {
  const mockOnPersonalInfoChange = jest.fn();
  render(<PersonalInfoForm onPersonalInfoChange={mockOnPersonalInfoChange} />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

  expect(mockOnPersonalInfoChange).toHaveBeenNthCalledWith(1, null);
  expect(mockOnPersonalInfoChange).toHaveBeenNthCalledWith(2, null);
  expect(mockOnPersonalInfoChange).toHaveBeenNthCalledWith(3, null);
});
