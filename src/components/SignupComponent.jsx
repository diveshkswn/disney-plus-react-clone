/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupComponent.css';
import { useDispatch } from 'react-redux';
import { setLoginForm } from '../features/login/loginFormSlice';

function SignupComponent() {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      setError('Passwords not match');
    } else {
      console.log('From here');
    }
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
        <label>Password Confirm</label>
        <input ref={passwordConfirmRef} type="password" className="form-control" />
        <button type="submit" disabled={loading} className="btn">SignUp</button>
      </form>
      <div className="login_redirect" onClick={() => { dispatch(setLoginForm()); }}>
        Already have an account?
        Click here
      </div>
    </div>

  );
}

export default SignupComponent;
