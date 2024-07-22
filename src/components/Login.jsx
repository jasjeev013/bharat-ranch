import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useSetRecoilState } from 'recoil';
import { userState } from '../state/atoms/atoms';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [credentails, setCredentials] = useState({ email: '', password: '' });
  const setUser = useSetRecoilState(userState);
  let navigate = useNavigate();


  const handleInput = (e) => {
    setCredentials({ ...credentails, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      if (data.token) {
        Cookies.set('token', data.token);
        setUser({ email: credentails.email, role: data.role, isLoggedIn: true });
        navigate('/',{replace:true})
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      // Handle error
      console.error('Error logging in', error);
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
