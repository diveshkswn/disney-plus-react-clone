/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupComponent.css';
import { useDispatch } from 'react-redux';
import { setLoginForm } from '../features/login/loginFormSlice';
import { signup, useAuth } from '../context/authContext';

function SignupComponent() {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  // route
  const history = useHistory();

  // Inputs
  const passwordRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  // state
  const [errorState, setErrorState] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    try {
      e.preventDefault();
      const userData = await signup(emailRef.current.value, passwordRef.current.value);
      userData.user.updateProfile({ displayName: String(nameRef.current.value) })
        .then(console.log('here'));
    } catch (er) {
      setErrorState(er.message);
    }
    setLoading(false);
  }

  return (
    <div className="SignupComponent_main">
      <h2>Sign Up</h2>
      <form className="singup_form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input ref={emailRef} type="email" className="form-control" />
        <label>Name</label>
        <input ref={nameRef} type="text" className="form-control" />
        <label>Password</label>
        <input ref={passwordRef} type="password" className="form-control" />
        <button type="submit" onSubmit={handleSubmit} disabled={loading} className="btn">SignUp</button>
      </form>

      {/* Error banner */}
      {errorState && (
      <div className="error_banner" role="alert">
        {errorState}
      </div>
      )}

      <div className="login_redirect" onClick={() => { dispatch(setLoginForm()); }}>
        Already have an account?
        Click here
      </div>

    </div>

  );
}

export default SignupComponent;
