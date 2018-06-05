import {combineReducers} from 'redux';
import checkReducer from './checkerReducer';

const rootReducer = combineReducers({
    check: checkReducer // state.check
});

export default rootReducer
