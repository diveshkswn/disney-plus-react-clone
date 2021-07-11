/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginComponent.css';

function LoginComponent() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="LoginComponent_main">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input ref={emailRef} type="email" className="form-control" />
        <label>Password</label>
        <input ref={passwordRef} type="password" className="form-control" />
        <button type="submit" disabled={loading} className="btn">Login</button>
      </form>
      {/* Error banner */}
      {error && (
      <div className="error_banner" role="alert">
        {error}
      </div>
      )}
    </div>

  );
}

export default LoginComponent;
