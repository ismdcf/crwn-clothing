import logger from 'redux-logger';
import {applyMiddleware, createStore} from "redux";
import rootReducer from './root-reducer'
import {persistStore} from "redux-persist";

const middleWares = [logger];

export const store = createStore(rootReducer,applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default {store,persistor};