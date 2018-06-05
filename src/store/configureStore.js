import {createStore} from 'redux';
import rootReducer from '../reducers/index';

function configureStore(initialState) {
    console.log('configure store');
    const store = createStore(rootReducer); // root reducer

    store.subscribe(() => {
        console.log('store action dispacthed');
    });

    return store;
}

export default configureStore