import React, { useState, useEffect } from 'react';

import { Login } from "./components/Login";

import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError] = useState('');

  useEffect(() => {
    let user = {
      username: 'mkamranhamid',
      password: '123456',
    }
    localStorage.setItem('@app:user', JSON.stringify(user))
  }, [])

  const handleSubmit = (credentials) => {
    let user = JSON.parse(localStorage.getItem('@app:user'));
    if (user.email != credentials.email || user.password != credentials.password) {
      setError('The username and password you entered did not match our records. Please double-check and try again.');
    }
  }
  return (
    <Login onSubmit={handleSubmit} error={error} />
  );
}

export default App;
