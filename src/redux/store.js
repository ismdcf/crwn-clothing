import logger from 'redux-logger';
import {applyMiddleware, createStore} from "redux";
import rootReducer from './root-reducer'

const middleWares = [logger];
const store = createStore(rootReducer,applyMiddleware(...middleWares));

export default store;