import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn } from '../state/atoms/atoms';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentails, setCredentials] = useState({ email: '', password: '' });
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setCredentials({ ...credentails, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Send POST request with email and password
      const response = await axios.post('http://localhost:5000/auth/login', credentails, {
        withCredentials: true // This is important to handle cookies
      });

      // Handle response
      console.log('Response:', response.data);
      setIsLoggedIn(true);
      navigate('/');

      // Check if the response contains a message
      if (response.data.message) {
        console.log('Message:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
    setCredentials({ email: '', password: '' })
  }



  return (
    <div className="container w-50 text-center my-5">
      <h1 className='text-center my-5'>Login</h1>
      <TextField
        className='my-2 w-75'
        id="outlined-multiline-flexible"
        label="Email"
        multiline
        maxRows={4}
        name='email'
        type='email'
        onInput={(e) => handleInput(e)}
        value={credentails.email}
      />
      <TextField
        className='my-2 w-75'
        id="outlined-multiline-flexible"
        label="Password"
        multiline
        maxRows={4}
        name='password'
        type='password'
        onInput={(e) => handleInput(e)}
        value={credentails.password}
      />
      <button disabled={credentails.email.length === 0 || credentails.password.length === 0} className="submit-btn my-5 w-50" onClick={(e) => handleClick(e)}>SUBMIT</button>
    </div>
  );
};

export default Login;
