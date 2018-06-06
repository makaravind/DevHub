import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools, devToolsEnhancer  } from 'redux-devtools-extension';

function configureStore(initialState) {
    console.log('configure store');
    const store = createStore(rootReducer, devToolsEnhancer(
      // other store enhancers if any
    )); // root reducer

    store.subscribe(() => {
        console.log('store action dispacthed');
    });

    return store;
}

export default configureStore