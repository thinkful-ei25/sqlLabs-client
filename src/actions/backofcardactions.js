
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { bindActionCreators } from 'redux';

export const MAKE_GUESS_SUCCESS = 'MAKE_GUESS_SUCCESS';
export const makeGuessSuccess = (guess) => ({
    type: MAKE_GUESS_SUCCESS,
    guess
})

export const makeGuess = (guess, questionId) => {
    
    return (dispatch, getState) => {
        dispatch({
            type: GUESS_DISMOUNT
        })
        const authToken = getState().authReducer.authToken;
        return fetch(`${API_BASE_URL}/question`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userAnswer: guess,
                questionId
            })
        })
            .then(res => res.json())
            .then(json => 
                {
                dispatch(makeGuessSuccess(json))})
            .catch(error => console.log(error))
    }
}
export const GUESS_DISMOUNT = 'GUESS_DISMOUNT';
export const guessDismount = () => {
    return {
        type: GUESS_DISMOUNT,
    }
}

