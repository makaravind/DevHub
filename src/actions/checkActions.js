import {CHECK} from './actionTypes';

export function checkNow(newName) {
    return {type: CHECK, value: newName};
}