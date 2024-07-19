import React from 'react';
import TextField from '@mui/material/TextField';
const Login = () => {
  return (
    <div className="container w-50 text-center my-5">
            <h1 className='text-center my-5'>Login</h1>
            <TextField
            className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Username"
                multiline
                maxRows={4}
            />
            <TextField
            className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
            />
            <button className="submit-btn my-5 w-50">SUBMIT</button>
        </div>
  );
};

export default Login;
