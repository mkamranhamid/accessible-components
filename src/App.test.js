import React from 'react';
import { render, fireEvent, act, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
    it('should show an error message when wrong credentials are provided', () => {
        const user = { username: 'johndoe', password: 'secretkey' }
        const error = /The username and password you entered did not match our records. Please double-check and try again./i;
        const { getByText, getByLabelText, getByRole } = render(<App />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        let alertRender = screen.getByRole(/alert/i)
        expect(alertRender).toHaveTextContent(error)
    })
    it('should show an no error message when correct credentials are provided', () => {
        const user = { username: 'mkamranhamid', password: '123456' }
        const { getByText, getByLabelText, getByRole } = render(<App />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        let alertRender = screen.queryByRole(/alert/i)
        expect(alertRender).toBeNull()
    })
})