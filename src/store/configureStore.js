import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function configureStore(initialState) {
    console.log('configure store');
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
    )); // root reducer

    store.subscribe(() => {
        console.log('store action dispacthed');
    });

    return store;
}

export default configureStore