import {LOAD_ME_DETAILS, LOAD_ME_DETAILS_SUCCESS} from './actionTypes';

// async action creator
export function loadMeDetails() {
    return function (dispatch, getState) {
        console.log('state in async action creator ', getState());
        window.API().then(data => {
            return dispatch({type: LOAD_ME_DETAILS_SUCCESS, value: data});
        })
    }
}