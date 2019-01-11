import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './form.css';

import SignupForm from './signup-form';

export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="form-box">
      <h2 className="form-title" align="center">
        Create an Account
      </h2>
      <SignupForm />
      <Link to="/login">
        <p className="form-login-link" align="center">
          {' '}
          or Login
        </p>
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
