import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import '../index.css';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import SignupPage from './signup-page';
import LoginPage from './login-page';
import FrontOfCard from './frontofcard';
import BackOfCard from './backofcard';

import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderBar />
        <div className="layout">
          <div className="layout-content">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/sign-up" component={SignupPage} />
            <Route exact path="/frontofcard" component={FrontOfCard} />
            <Route exact path="/backofcard" component={BackOfCard} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.authReducer.authToken !== null,
  loggedIn: state.authReducer.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
