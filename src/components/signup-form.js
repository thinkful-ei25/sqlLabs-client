import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import './form.css';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="sign-up"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label className="form-label" htmlFor="firstName">
          First name
        </label>
        <Field
          component={Input}
          type="text"
          name="firstName"
          className="input-field"
        />
        <label className="form-label" htmlFor="lastName">
          Last name
        </label>
        <Field
          component={Input}
          type="text"
          name="lastName"
          className="input-field"
        />
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <Field
          component={Input}
          className="input-field"
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <Field
          component={Input}
          type="password"
          name="password"
          className="input-field"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label className="form-label" htmlFor="passwordConfirm">
          Confirm password
        </label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          className="input-field"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          className="form-button"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Sign Up
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
