import { useState } from 'react';
import './LoginPage.css';

import logo from '../../assets/logo.svg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div data-testid="login-page" className="login-page">
      <img className="logo" alt="logo" src={logo} />
      <div className="login-form">
        <form action="">
          <h1 className="login-header">Login</h1>

          <input
            data-testid="login-email-input"
            className="login-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <input
            data-testid="login-password-input"
            className="login-password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button type="submit" className="login-submit">
            Login to your account
          </button>

          <p className="login-text">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
