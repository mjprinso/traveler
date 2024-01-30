import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from '../components/ConfirmModal';

describe('ConfirmModal', () => {
  test('renders modal with correct content', () => {
    const show = true;
    const title = 'Confirmation Title';
    const confirmText = 'Are you sure you want to proceed?';
    const confirmButtonText = 'Confirm';
    const onCancel = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmModal
        show={show}
        title={title}
        confirmText={confirmText}
        confirmButtonText={confirmButtonText}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(confirmText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'No, Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: confirmButtonText })).toBeInTheDocument();
  });

  test('calls onCancel when Cancel button is clicked', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmModal
        show={true}
        title="Confirmation Title"
        confirmText="Are you sure you want to proceed?"
        confirmButtonText="Confirm"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'No, Cancel' }));

    expect(onCancel).toHaveBeenCalled();
    expect(onConfirm).not.toHaveBeenCalled();
  });

  test('calls onConfirm when Confirm button is clicked', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmModal
        show={true}
        title="Confirmation Title"
        confirmText="Are you sure you want to proceed?"
        confirmButtonText="Confirm"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Confirm' }));

    expect(onCancel).not.toHaveBeenCalled();
    expect(onConfirm).toHaveBeenCalled();
  });
});
