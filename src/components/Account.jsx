import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './styles.css';  // Make sure to style according to your requirements

const Account = () => {
    const [mode, setMode] = useState('login');

    let loginclass = mode === 'login' ? "switch-btn active" : "switch-btn";
    let signupclass = mode === 'signup' ? "switch-btn active" : "switch-btn";
    return (
        <div>
            <div className="main-container signuplogin-header">
                <button className={`${loginclass}`} onClick={() => setMode('login')}>Login</button>
                <button className={`${signupclass}`} onClick={() => setMode('signup')}>Sign Up</button>
            </div>
            <div>
                {mode === 'login' ? <Login /> : <SignUp />}
            </div>
        </div>
    );
};

export default Account;
