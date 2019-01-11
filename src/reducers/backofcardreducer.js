import {
  MAKE_GUESS_SUCCESS,
  GUESS_DISMOUNT
} from '../actions/backofcardactions';

const initialState = {
  response: null
};

export default function reducer(state = initialState, action) {
  if (action.type === MAKE_GUESS_SUCCESS) {
    return Object.assign({}, state, {
      response: action.guess,
      error: null
    });
  } else if (action.type === GUESS_DISMOUNT) {
    return Object.assign({}, state, {
      response: null
    });
  }
  return state;
}
