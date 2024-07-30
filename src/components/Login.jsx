import React from 'react';
import './Login.css';
import Navbar from "./Navbar"

const Login = () => {
    return (
        <>
        <main className="login-page">
            <div className="login-container">
                <h2>Log in to your account</h2>
                <form>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <a href="#" className="forgot-password">Forget your password</a>
                    <button type="submit" className="login-button">Log in</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <a href="#">Sign up</a>
                </div>
            </div>
        </main>
        </>
    );
};

export default Login;
