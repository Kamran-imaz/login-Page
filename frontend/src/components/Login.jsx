import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:80/api/routes/login', {
      email: value.email,
      password: value.password
    });
    localStorage.setItem('token',response.data.send)
    if (response.data.message === 'logged in') {
      navigate('/secret');
    } else {
      window.alert('Wrong credentials');
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setValue({ ...value, [e.target.name]: e.target.value });
          }}
          value={value.email}
          required
        />
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setValue({ ...value, [e.target.name]: e.target.value });
          }}
          value={value.password}
          required
        />
        <br /> <br />
        <button style={{ cursor: 'pointer' }}>submit</button>
        <br />
        <br />
        <h4>
          Don't have an account <Link to="/register">Register here</Link>
        </h4>
      </form>
    </>
  );
};


export default Login; 
