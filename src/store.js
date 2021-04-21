import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { roadTripReducer } from './reducers';

const store = createStore(roadTripReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;