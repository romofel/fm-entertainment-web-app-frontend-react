import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './SignupPage.css';
import registerService from '../../services/registerService';

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const res = await registerService.registerUser();
    console.log(res);
  };

  return (
    <div data-testid="signup-page" className="signup-page">
      <img className="logo" src={logo} alt="logo" />

      <div className="signup-form">
        <form action="">
          <h1 className="signup-header">Sign Up</h1>

          <input
            data-testid="signup-email-input"
            className="signup-email"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
            value={email}
          />
          <input
            data-testid="signup-password-input"
            className="signup-password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);
            }}
            value={password}
          />
          <input
            data-testid="signup-repassword-input"
            className="signup-repassword"
            type="password"
            name="repassword"
            id="repassword"
            placeholder="Repeat password"
            onChange={(event) => {
              event.preventDefault();
              setRePassword(event.target.value);
            }}
            value={repassword}
          />

          <button
            data-testid="signup-button"
            onClick={handleRegister}
            type="submit"
            className="signup-submit"
            disabled={!(email && password && repassword && password === repassword)}
          >
            Create an account
          </button>

          <p className="signup-text">
            Already have an account? {/* TODO: Turn this into a button */}
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
