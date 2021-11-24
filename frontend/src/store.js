import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import { productDetailsReducer, productListReducer } from '../src/reducers/productReducers';

const initiaState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initiaState, composeEnhancer(applyMiddleware(thunk)));

export default store;