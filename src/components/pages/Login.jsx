import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login_main">
      <img src="/images/login-background.jpg" alt="" />

      <div className="login_content">

        <div className="content_logo">
          <img src="/images/cta-logo-one.svg" alt="" />
        </div>
        <div className="login_signupButton">
          GET IT ALL THERE
        </div>
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
