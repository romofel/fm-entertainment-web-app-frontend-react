import React from 'react';
import './LoginPage.css';

import logo from '../assets/logo.svg';

export default function LoginPage() {
  return (
    <>
      <img alt="logo" src={logo} />
      <div className="login-form">
        <form action="">
          <h1 className="login-header">Login</h1>

          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />

          <button type="submit" className="login-submit">Login to your account</button>

          <p className="login">Don't have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </>
  );
}