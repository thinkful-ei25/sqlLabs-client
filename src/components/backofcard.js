'use strict';

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import {
  makeGuess
  // guessDismount
} from '../actions/backofcardactions';

export class BackOfCard extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      makeGuess(this.props.userGuess, this.props.userQuestionID)
    );
  }

  createBackOfCard() {
    const trueorfalse = this.props.trueorfalse;
    const questionText = this.props.questionText;
    const userGuess = this.props.userGuess;
    const correctAnswer = this.props.correctAnswer;
    const numCorrect = this.props.numCorrect;
    const numIncorrect = this.props.numIncorrect;
    const total = numCorrect + numIncorrect;
    const percentage = (numCorrect / total) * 100;

    if (trueorfalse) {
      return (
        <Fragment>
          <div className="correct-card-image" />
          <div className="card-question">
            <h3 className="question-number-text">🙌 Well Done! 🎉 </h3>
            <p className="question-text">
              Question's Lifetime Score: {percentage.toFixed(0)}%
            </p>
            <hr />
          </div>
          <div className="card-input">
            <p className="your-answer">Keep up the great work my friend!</p>
            <div className="position-button">
              <Link to="/frontofcard">
                <button className="guess-button">Next Question 👍</button>
              </Link>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="wrong-card-image" />
          <div className="card-question">
            <h3 className="question-text">🙁 Not Quite 📖 </h3>
            <p className="question-number-text">
              Your Guess:{' '}
              <span className="user-guess">
                <code>{userGuess}</code>
              </span>
            </p>
            <p className="question-number-text">
              Correct Answer:
              <br /> <code>{correctAnswer}</code>
            </p>
            <p className="question-number-text">
              Question's Score: {percentage.toFixed(0)}%
            </p>
            <hr />
          </div>
          <div className="next-question-box">
            <p className="your-answer">
              Success is like bamboo 🌱 🎍
              <br /> Growth comes through patience, perseverance, growth and
              development.
            </p>
            <div className="position-button">
              <Link to="/frontofcard">
                <button className="guess-button">Next Question 👍</button>
              </Link>
            </div>
          </div>
        </Fragment>
      );

      // return (
      //   <div className="card with_shadow card_incorrect">
      //     <div className="arrow_box">
      //       <h1>{questionText}</h1>
      //       <h2>Wrong....</h2>
      //       <p>Correct Answer: {correctAnswer}</p>
      //       <p>Your guess: {userGuess}</p>
      //       <p>Your lifetime score on this question is:</p>
      //       <p>Number of times Correct: {numCorrect}</p>
      //       <p>Number of times Incorrect: {numIncorrect}</p>
      //     </div>
      //     <div>
      //       <p>Keep up the great work!</p>
      //       <Link to="/frontofcard">
      //         <button>Next Question</button>
      //       </Link>
      //     </div>
      //   </div>
      // );
    }
  }

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
                <div className="left-banner">📗 SQL Beginner!</div>
              </div>
            </div>
          </div>
          {/* End of top bar of dashboard */}

          <div className="dashboard-main">
            <div className="question-card-size">
              <div className="question-card">
                <div className="x">{this.createBackOfCard()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    questionText: state.backofcardReducer.response
      ? state.backofcardReducer.response.questionText
      : '',
    userQuestionID: state.frontofcardReducer.userQuestionID,
    userGuess: state.frontofcardReducer.userAnswer,
    correctAnswer: state.backofcardReducer.response
      ? state.backofcardReducer.response.questionAnswer
      : '',
    trueorfalse: state.backofcardReducer.response
      ? state.backofcardReducer.response.correct
      : null,
    numCorrect: state.backofcardReducer.response
      ? state.backofcardReducer.response.numCorrect
      : '',
    numIncorrect: state.backofcardReducer.response
      ? state.backofcardReducer.response.numIncorrect
      : ''
  };
};

export default requiresLogin()(connect(mapStateToProps)(BackOfCard));
