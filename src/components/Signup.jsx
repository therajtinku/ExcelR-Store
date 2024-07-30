import React from 'react';
import './Signup.css';
import {Link} from "react-router-dom";
const Signup = () => {
  return (
    <>
    <div className="signup-container">
      <h2>Create an account</h2>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Create a password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        <Link to="/"><button type="submit">Create Account</button></Link>
      </form>
      <p>
        By creating an account you agree to the <a href="terms.html">Terms of Use</a> and <a href="privacy.html">Privacy Policy</a>.
      </p>
    </div>
    </>
  );
}

export default Signup;
