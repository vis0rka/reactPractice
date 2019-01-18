
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './combineRed';


const Store = createStore(rootReducer, composeWithDevTools());

export default Store;