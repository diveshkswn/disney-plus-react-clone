/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Login.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../LoginComponent';
import SignupComponent from '../SignupComponent';
import { useAuth } from '../../context/authContext';

function Login() {
  const { currentUser } = useAuth();
  const history = useHistory();
  if (currentUser) history.push('/');
  const loginFormState = useSelector((state) => state.loginForm.value);

  const [signupState, setSignupState] = useState(false);

  return (
    <div className="login_main">
      <img src="/images/login-background.jpg" alt="" />

      <div className="login_content">

        <div className="content_logo">
          <img src="/images/cta-logo-one.svg" alt="" />
        </div>
        {signupState && !loginFormState && <SignupComponent /> }
        {loginFormState && <LoginComponent />}

        { !signupState && !loginFormState && (<div onClick={() => { setSignupState(true); }} className="login_signupButton">GET IT ALL THERE</div>)}
        <div className="login_description">
          Subscribe to get more out of Disney+ Hotstar
        </div>
        <div className="content_logo">
          <img src="/images/cta-logo-two.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
