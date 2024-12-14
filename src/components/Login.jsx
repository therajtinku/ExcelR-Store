import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";

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
                    <Link to="/"><button type="submit" className="login-button">Log in</button></Link>
                </form>
                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </main>
        </>
    );
};

export default Login;
