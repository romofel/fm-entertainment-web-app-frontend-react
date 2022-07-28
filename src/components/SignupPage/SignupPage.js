import React from 'react';
import logo from '../../assets/logo.svg';
import './SignupPage.css';

export default function SignupPage () {
  return (
    <div className="signup-page">
      <img className="logo" src={logo} alt="logo" />

      <div className="signup-form">
        <form action="">
          <h1 className="signup-header">Sign Up</h1>

          <input className="signup-email" type="email" name="email" id="email" placeholder="Email address" />
          <input className="signup-password" type="password" name="password" id="password" placeholder="Password" />
          <input className="signup-repassword" type="password" name="repassword" id="repassword" placeholder="Repeat password" />

          <button type="submit" className="signup-submit">Create an account</button>

          <p className="signup-text">Already have an account? <a href="#">Login</a></p>
        </form>
      </div>
    </div>
  );
}