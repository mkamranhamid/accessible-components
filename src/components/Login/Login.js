import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'

import { Alert } from "../Alert";
import { Container } from "../Container";
import { Title } from "../Title";
import { Input } from "../Input";
import { Link } from "../Link";
import { Button } from "../Button";
import { Form } from "../Form";


function Login({ onSubmit, error }) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        setAlertMessage(error)
    }, [error])

    const onFieldChange = ({ value }, field) => {
        let newCredentials = credentials;
        newCredentials[field] = value;
        setCredentials(newCredentials);
    }

    const handleBlur = ({ value }, field) => {
        if (!credentials[field]) {
            setAlertMessage(`${field} field is required`)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!credentials.username) {
            setAlertMessage('username field is required')
        } else if (!credentials.password) {
            setAlertMessage('password field is required')
        } else {
            setAlertMessage('')
            onSubmit(credentials)
        }
    }

    return (
        <Container>
            <Title>Login 👋</Title>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <Input type="text" id="username"
                    onChange={({ target }) => onFieldChange(target, 'username')}
                    onBlur={({ target }) => handleBlur(target, 'username')}
                />
                <label htmlFor="password">Password</label>
                <Input type="password" id="password"
                    onChange={({ target }) => onFieldChange(target, 'password')}
                    onBlur={({ target }) => handleBlur(target, 'password')}
                />
                {alertMessage && <Alert message={alertMessage} />}
                <Button>Submit</Button>
                <Link href={void(0)}>Sign Up</Link>
            </Form>
        </Container>
    );
}

export { Login };