import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn, userDetails } from '../state/atoms/atoms';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { fetchUserDetails } from '../services/user';

const Login = () => {
  const [credentails, setCredentials] = useState({ email: '', password: '' });
  const [erroMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);
  const setUserDetails = useSetRecoilState(userDetails)
  const navigate = useNavigate();

  const handleInput = (e) => {
    setCredentials({ ...credentails, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setErrors([]);
    try {
      const response = await axios.post('http://localhost:5000/auth/login', credentails, { withCredentials: true });
      // Handle response
      if (response.data.result) {
        setIsLoggedIn(true);
        const userDetails = await fetchUserDetails();
        const {name,email,contact,description,role,image,address} = userDetails.data;
        setUserDetails({name,email,contact,description,role,image,address})
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response.data.errors[0].message) {
        setErrorMessage(error.response.data.errors[0].message);
      } else {
        setErrors(error.response.data.errors);
      }
    }
    setCredentials({ email: '', password: '' })
  }



  return (
    <div className="container w-50 text-center my-5">
      <h1 className='text-center my-5'>Login</h1>
      {erroMessage && <Alert severity="error" className='text-center w-75' style={{
        marginLeft: '90px',
      }}>{erroMessage}</Alert>}
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
      {errors.map((error) => {
        return <Alert key={error.path} severity="error" className='text-center w-75' style={{
          marginLeft: '90px',
        }}>{error.msg}</Alert>
      })}
      <button disabled={credentails.email.length === 0 || credentails.password.length === 0} className="submit-btn my-5 w-50" onClick={(e) => handleClick(e)}>SUBMIT</button>
    </div>
  );
};

export default Login;
