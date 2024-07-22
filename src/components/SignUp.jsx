import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';



const SignUp = () => {
    const [role, setRole] = useState(10);
    const [credentials, setCredentials] = useState({ name: '', contact: 91, email: '', password: '', address: '', description: '' });
    const [samepass, setSamePass] = useState(true);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const handleChangeCredentials = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleClick = async (e) => {
        console.log({
            ...credentials,
            role: (role === 10) ? 'buyer' : 'farmer'
        })
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...credentials,
                    role: (role === 10) ? 'buyer' : 'farmer'
                }),
            });

            if (!response.ok) {
                console.log('User Already exists')
            }

            const data = await response.json();
            console.log(data);
            navigate("/account", { replace: true })

        } catch (error) {
            // Handle error
            console.error('Error logging in', error);
        }
        setCredentials({ name: '', contact: 91, email: '', password: '', address: '', description: '' });
        setRole(10);


    }

    const checkpass = (e) => {
        if (e.target.value === credentials.password) {
            setSamePass(true);
        } else {
            setSamePass(false);
        }
    }





    return (

        <div className="container w-50 text-center my-5">

            <h1 className='text-center my-5'>Sign Up</h1>
            <div className='my-2 w-100'>

                <TextField
                    className='my-2 mx-1 '
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    style={{
                        width: '48%'
                    }}
                    value={credentials.name}
                    name='name'
                    onInput={(e) => handleChangeCredentials(e)}
                />
                <FormControl className='my-2 mx-1 ' style={{
                    width: '26%'
                }} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={role}
                        defaultValue={10}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Buyer</MenuItem>
                        <MenuItem value={20}>Farmer</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Contact"
                multiline
                maxRows={4}
                value={credentials.contact}
                name='contact'
                onInput={(e) => handleChangeCredentials(e)}
            />
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                value={credentials.email}
                name='email'
                onInput={(e) => handleChangeCredentials(e)}
            />
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
                value={credentials.password}
                name='password'
                onInput={(e) => handleChangeCredentials(e)}
            />
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Confirm Password"
                multiline
                maxRows={4}
                onInput={(e) => checkpass(e)}
            />
            {!samepass && <Alert severity="warning" className='text-center w-75' style={{
                marginLeft: '90px',
            }}>Passwords do not match</Alert>}
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                value={credentials.address}
                name='address'
                onInput={(e) => handleChangeCredentials(e)}
            />
            <TextField
                className='my-2 w-75'
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={credentials.description}
                name='description'
                onInput={(e) => handleChangeCredentials(e)}
            />

            <button className="submit-btn my-5 w-50" onClick={(e) => handleClick(e)}>SUBMIT</button>
        </div>

    );
};

export default SignUp;
