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

/*
* pure methods
*
* 1. add new object to an array of objects
* let a = [{name: 'A'}, {name: 'B'}, {name: 'C'}]
* let newObject = {name: 'D'}
*
* a.push(newObject) --> mutating [wrong]
* [...a, newObject]
*
* 2. Add a modified object to an array of objects with idnex as identifier
*
*
* let a = [{name: 'A'}, {name: 'B'}, {name: 'C'}]
* let modifiedObj = {name: 'V'}  index: 1
*
* let b = a.filter((e,i) => i !== 1)
* [...b, modifiedObj]
*
*
*
* */