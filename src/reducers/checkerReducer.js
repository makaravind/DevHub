import {CHECK} from '../actions/actionTypes';

const checkReducer = (state = 'workgin', action) => {
    console.log('initializing state');
    switch (action.type) {
        case CHECK:
            return action.value;
        default:
            return state;
    }
};

export default checkReducer