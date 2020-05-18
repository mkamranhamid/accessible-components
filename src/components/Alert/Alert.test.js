import React from 'react';
import { render, fireEvent, act, screen, cleanup } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert tests', () => {
    it('should show a message when text is provided', () => {
        const errorMessage = 'username field is required';
        const { getByText, getByLabelText, getByRole } = render(<Alert message={errorMessage} />);
        let alertRender = screen.queryByRole(/alert/i)
        expect(alertRender).toHaveTextContent(/username field is required/i)
    })
})