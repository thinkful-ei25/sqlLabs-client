import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './form.css';

import LoginForm from './login-form';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form-box">
      <h2 className="form-title" align="center">
        Welcome Back!
      </h2>
      <LoginForm />
      <Link to="/sign-up">
        <p className="form-login-link" align="center">
          or Sign-up
        </p>
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
