import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios';



const SignUp = () => {
    const [role, setRole] = useState('buyer');
    const [credentials, setCredentials] = useState({ name: '', contact: 91, email: '', password: '', address: '', description: '' });
    const [erroMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [samepass, setSamePass] = useState(true);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const handleChangeCredentials = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setErrors([]);
        try {
            const response = await axios.post('http://localhost:5000/auth/register', { ...credentials, role }, { withCredentials: true });
            const data = await response.data;
            if (data.result) {
                navigate("/account", { replace: true });
            }
        } catch (error) {
            // Handle error
            console.error('Error logging in', error);
            if (error.response.data.errors[0].message) {
                setErrorMessage(error.response.data.errors[0].message);
            } else {
                setErrors(error.response.data.errors);
            }
        }
        setCredentials({ name: '', contact: 91, email: '', password: '', address: '', description: '' });
        setRole('buyer');



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
                {erroMessage && <Alert severity="error" className='text-center w-75' style={{
                    marginLeft: '90px',
                }}>{erroMessage}</Alert>}
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
                        defaultValue={'buyer'}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={'buyer'}>Buyer</MenuItem>
                        <MenuItem value={'farmer'}>Farmer</MenuItem>
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
            {errors.map((error) => {
                return <Alert severity="error" className='text-center w-75' style={{
                    marginLeft: '90px',
                }}>{error.msg}</Alert>
            })}

            <button className="submit-btn my-5 w-50" onClick={(e) => handleClick(e)}>SUBMIT</button>
        </div>

    );
};

export default SignUp;
