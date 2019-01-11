import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import forget from '../assets/forgetting.png';
import mainImg from '../assets/landing-main-page.png';

import './landing-page.css';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <div className="hero-container">
        <div className="hero-row">
          <div className="hero-content">
            <h1 className="landing-title">Welcome to SQL Learning Labs!</h1>
            <p className="landing-subtitle">
              SQL Learning Labs is designed for students of all skill levels to
              practice and master SQL Bash Commands!{' '}
            </p>
            <Link to="/sign-up">
              <button className="hero-button">📚 Get Smart!</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <div className="hero-img-container">
          <div className="hero-img-content">
            <div className="hero-img-block">
              <div className="img-wrapper">
                <div className="spacer" />
                <img src={mainImg} className="main-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="support-section">
        <div className="support-section-container">
          <div className="support-section-row">
            <div className="support-section-content">
              <span className="support-section-header">
                Why Spaced Repetition?
              </span>
              <h3 className="support-section-copy">
                <strong>Repetition. Repetition. Repetition!</strong> <br/>Our goal is to help users feel more
                rewarded when they get an answer right, and to motivate them to
                try again when the get the answer wrong. By seeing the one's you
                know less often, we are able to try again at those that we
                haven't quite mastered. Space Repetition provides a dynamic
                user-by-user case for learning better, and faster.
              </h3>
              <div className="support-section-buttons" />
              <Link to="/sign-up">
                <button className="support-section-button">Register</button>
              </Link>
            </div>
            <div className="learning-img">
              <div className="curve">
                <img className="image" width="50%" src={forget} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-copyright">
              SQL Learning Labs Was Created by Mary and Brady
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
