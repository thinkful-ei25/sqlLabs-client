import {
  FETCH_USERQUESTIONS_SUCCESS,
  FETCH_USERQUESTIONS_ERROR,
  SUBMIT_USERANSWER_SUCCESS,
  FETCH_USERQUESTION_ID_SUCCESS
} from '../actions/frontofcardactions';

const initialState = {
  userQuestion: null,
  error: null,
  userAnswer: null,
  userQuestionID: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_USERQUESTIONS_SUCCESS) {
    return Object.assign({}, state, {
      userQuestion: action.question,
      error: null
    });
  } else if (action.type === FETCH_USERQUESTION_ID_SUCCESS) {
    return Object.assign({}, state, {
      userQuestionID: action.questionId
    });
  } else if (action.type === FETCH_USERQUESTIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === SUBMIT_USERANSWER_SUCCESS) {
    return Object.assign({}, state, {
      userAnswer: action.guess,
      error: null
    });
  }
  return state;
}
