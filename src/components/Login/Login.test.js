import React from 'react';
import { render, fireEvent, act, screen, cleanup } from '@testing-library/react';
import { Login } from './Login';

describe('Login Form tests', () => {
    it('should show an error when no credentials are provided on onSubmit', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const user = { username: '', password: '' }
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        let alertRender = getByRole(/alert/i)
        expect(alertRender).toHaveTextContent(/username field is required/i)
        expect(handleSubmit).toHaveBeenCalledTimes(0)
    })
    it('should show an error only username is provided on onSubmit', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const user = { username: 'mkamranhamid', password: '' }
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        let alertRender = screen.getByRole(/alert/i)
        expect(alertRender).toHaveTextContent(/password field is required/i)
        expect(handleSubmit).toHaveBeenCalledTimes(0)
    })
    it('should show an error only password is provided on onSubmit', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const user = { username: '', password: '123456' }
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        let alertRender = screen.getByRole(/alert/i)
        expect(alertRender).toHaveTextContent(/username field is required/i)
        expect(handleSubmit).toHaveBeenCalledTimes(0)
    })
    it('should show no error when username and password are provided on onSubmit', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const user = { username: 'mkamranhamid@gmail.com', password: '123456' }
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        fireEvent.change(getByLabelText(/username/i), { target: { value: user.username } })
        fireEvent.change(getByLabelText(/password/i), { target: { value: user.password } })
        fireEvent.submit(getByText(/submit/i))
        // using queryBy* here because it either retunrns null or 
        // an element while getBy* fails if its not able to find an element
        let alertRender = screen.queryByRole(/alert/i)
        expect(alertRender).toBeNull()
    })
    it('should show no error on focus', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        act(() => getByLabelText(/username/i).focus());
        let alertRender = screen.queryByRole(/alert/i)
        expect(alertRender).toBeNull()
    })
    it('should show an error on blur', () => {
        const handleSubmit = jest.fn()
        const error = ''
        const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} error={error} />);
        act(() => getByLabelText(/username/i).focus());
        act(() => getByLabelText(/username/i).blur());
        let alertRender = screen.queryByRole(/alert/i)
        expect(alertRender).toHaveTextContent(/username field is required/i)
    })
})

