import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { useDispatch } from "react-redux";
import { customAuthAction } from '../../redux/action/authAction';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await ({
                email: email,
                password: password
            });
            dispatch(customAuthAction(res))
            if (res) {
                history.replace("/dashboard")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    className="loginInput"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;