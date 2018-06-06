import {LOAD_ME_DETAILS, LOAD_ME_DETAILS_SUCCESS} from '../actions/actionTypes';

export default function meReducer(state = {firstName: 'A', lastName: 'B'}, action) {
    switch (action.type) {
        case LOAD_ME_DETAILS:
            return action.data;
        case LOAD_ME_DETAILS_SUCCESS:
            return action.value;
        default:
            return state;
    }
}