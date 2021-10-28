import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutAction } from '../../redux/action/authAction';
import { useHistory } from 'react-router';
import './Navbar.css';

const Navbar = () => {
    const email = useSelector((state) => state.auth.userdetails.email);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch((logOutAction()))
        history.replace('/')
    }

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Creative Blog</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link nav-fix" to="/home">Home</Link>
                            <Link class="nav-link nav-fix" to="/dashboard">Dashboard</Link>
                            <Link class="nav-link nav-fix" onClick={handleLogout}>{email && "Logout"}</Link>
                            <Link class="nav-link nav-fix" to="/login">{!email && "Login"}</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;