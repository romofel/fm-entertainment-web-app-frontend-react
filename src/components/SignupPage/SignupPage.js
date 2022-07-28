import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './SignupPage.css';

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div data-testid="signup-page" className="signup-page">
      <img className="logo" src={logo} alt="logo" />

      <div className="signup-form">
        <form action="">
          <h1 className="signup-header">Sign Up</h1>

          <input
            className="signup-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            className="signup-password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="signup-repassword"
            type="password"
            name="repassword"
            id="repassword"
            placeholder="Repeat password"
          />

          <button type="submit" className="signup-submit">
            Create an account
          </button>

          <p className="signup-text">
            Already have an account?{' '}
            {/* TODO: Turn this into a button */}
            <a
              data-testid="login-redirect"
              href=""
              onClick={() => navigate('/login', { replace: true })}
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
