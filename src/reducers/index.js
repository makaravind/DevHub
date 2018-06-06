import {combineReducers} from 'redux';
import checkReducer from './checkerReducer';
import meReducer from './meReducer';

const rootReducer = combineReducers({
    check: checkReducer, // state.check
    userDetails: meReducer // state.userDetails
});

export default rootReducer
