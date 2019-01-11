'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requiresLogin from './requires-login';
import { userGuess, fetchUserQuestions } from '../actions/frontofcardactions';
import { guessDismount } from '../actions/backofcardactions';

import TitleBanner from './titlebanner';

import './frontofcard.css';

export class FrontOfCard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserQuestions());
  }
  guessSubmit() {
    const guess = this.refs.userguess.value;
    this.props.dispatch(guessDismount());
    return this.props.dispatch(
      userGuess(guess.replace(/\s{2,}/g, ' '), this.props.history)
    );
  }
  createFrontCard() {
    const currentQuestion = this.props.currentQuestion;

    return (
      <div className="dashboard-layout">
        <div className="background-image" />
        {/* top part of dashboard */}
        <div className="dashboard-top">
          {/* top bar of dashboard */}
          <div className="dashboard-background">
            <div className="dashboard-banner">
              <div className="welcome-message-prompt">
                <TitleBanner title="SQL Learning Labs: Basics" />
              </div>
            </div>
          </div>
          {/* End of top bar of dashboard */}

          <div className="dashboard-main">
            <div className="question-card-size">
              <div className="question-card">
                <div className="card-image">
                  {/* <div className="card-img-overlay">
                    <span className="question-num">Question #1</span>
                  </div> */}
                </div>
                <div className="card-question">
                  <h3 className="question-number-text">Question</h3>
                  <p className="question-text">
                    {currentQuestion.userQuestion
                      ? currentQuestion.userQuestion
                      : 'Loading.......'}
                  </p>
                  <hr />
                </div>
                <div className="card-input">
                  <p className="your-answer">Answer Your Best Guess</p>
                  <input
                    type="text"
                    className="question-input-field"
                    ref="userguess"
                    required
                  />
                  <div className="position-button">
                    <button
                      className="guess-button"
                      onClick={() => this.guessSubmit()}
                      type="input"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  rerender() {
    return <div className="x">{this.createFrontCard()}</div>;
  }

  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    } else {
      return this.rerender();
    }
  }
}


const mapStateToProps = state => {
  return {
    currentQuestion: state.frontofcardReducer,
    questionID: state.frontofcardReducer.userQuestionID
  };
};

export default withRouter(
  requiresLogin()(connect(mapStateToProps)(FrontOfCard))
);

