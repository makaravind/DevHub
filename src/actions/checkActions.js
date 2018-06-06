import {CHECK} from './actionTypes';

export function checkNow(dispatch, newName) {
    return dispatch({type: CHECK, value: newName});
}