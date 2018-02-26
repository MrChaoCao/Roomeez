import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const { logger } = require('redux-logger');
const middlewares = [thunk, logger];

const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);

export default configureStore;
