import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
const Login = () => {
  const [credentails, setCredentials] = useState({ email: '', password: '' });
  // https://www.npmjs.com/package/recoil-persist
  // https://www.youtube.com/watch?v=nI8PYZNFtac

  const handleInput = (e) => {
    setCredentials({ ...credentails, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentails)
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
