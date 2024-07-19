import React from 'react';
import TextField from '@mui/material/TextField';
const SignUp = () => {
    return (
        <div className="container w-50 text-center my-5">
            <h1 className='text-center my-5'>Sign Up</h1>
            <div className='my-2 w-100'>

            <TextField
            className='my-2 mx-1 '
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                style={{
                    width: '37%'
                }}
            />
            <TextField
            className='my-2 mx-1 '
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                style={{
                    width: '37%'
                }}
            />
            </div>
            <TextField
            className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
            />
            <TextField
            className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
            />
            <button className="submit-btn my-5 w-50">SUBMIT</button>
        </div>
    
    );
};

export default SignUp;
