import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import { productDetailsReducer, productListReducer } from '../src/reducers/productReducers';
import { cartReducer } from '../src/reducers/cartReducers';
import { userRegisterReducer, userSigninReducer } from '../src/reducers/userReducer';

const initiaState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [], 
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer, 
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initiaState, composeEnhancer(applyMiddleware(thunk)));

export default store;