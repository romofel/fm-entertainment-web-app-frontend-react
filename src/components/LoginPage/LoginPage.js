import React from 'react';
import './LoginPage.css';

import logo from '../../assets/logo.svg';

export default function LoginPage() {
  return (
    <div data-testid="login-page" className="login-page">
      <img className="logo" alt="logo" src={logo} />
      <div className="login-form">
        <form action="">
          <h1 className="login-header">Login</h1>

          <input className="login-email" type="email" name="email" id="email" placeholder="Email address" />
          <input className="login-password" type="password" name="password" id="password" placeholder="Password" />

          <button type="submit" className="login-submit">Login to your account</button>

          <p className="login-text">Don't have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}