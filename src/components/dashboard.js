import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import './dashboard.css';

import { Link } from 'react-router-dom';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-layout">
        <div className="background-image" />
        {/* top part of dashboard */}
        <div className="dashboard-top">
          {/* top bar of dashboard */}
          <div className="dashboard-background">
            <div className="dashboard-banner">
              <div className="welcome-message-prompt">
                <div className="left-banner">👋 Welcome {this.props.name}!</div>
              </div>
            </div>
          </div>
          {/* End of top bar of dashboard */}
          <div className="dashboard-main">
            <div className="dashboard-box">
              <div className="title">
                <h1> 📗 SQL Beginner </h1>
              </div>
              <h3 className="level">10 questions | Lifetime Score: 75%</h3>
              <div className="about-cards">
                SQL Learning Labs is a platform made to test your knowledge of
                SQL Bash commands, and to help you accelerate your learning.
              </div>
              <Link to="/frontofcard">
                <button className="hero-button">📚 SQL Basics</button>
                {/* <button>SQL Basics</button> */}
              </Link>
            </div>
            <div className="dashboard-box">
              <div className="title">
                <h1> 🔖 SQL Intermediate </h1>
              </div>
              <h3 className="level">Coming Soon</h3>
              <div className="about-cards">
                SQL Learning Labs is a platform made to test your knowledge of
                SQL Bash commands, and to help you accelerate your learning.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.authReducer;
  return {
    username: state.authReducer.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

{
  /* <p>Questions or feedback? We'd love to
              hear from you:{' '}
              <a
                href="mailto:sqllearninglabs@gmail.com?Subject=SQL%20is%20Awesome"
                target="_top"
              >
                Email Us!
              </a>
            </p> */
}
