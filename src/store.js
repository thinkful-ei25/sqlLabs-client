import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import frontofcardReducer from './reducers/frontofcardreducer';
import backofcardReducer from './reducers/backofcardreducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    form: formReducer,
    authReducer: authReducer,
    frontofcardReducer: frontofcardReducer,
    backofcardReducer: backofcardReducer,
    protectedData: protectedDataReducer
  }),
  applyMiddleware(thunk, logger)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
