import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from '../src/pages/Home'
import ProductScreen from '../src/pages/Product';
import CartScreen from '../src/pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from '../src/pages/Signin';
import { signout } from './actions/userActions';
import RegisterScreen from '../src/pages/Register';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  

  return (
    <BrowserRouter>
    <div className='grid-container'>
            <header className='row'>
                <div>
                    <Link className='brand' to='/'>KDRF</Link>
                </div>
                <div>
                    <Link to="/cart">Carrinho
                    {cartItems.length > 0 && (
                      <span className='badge'>{cartItems.length}</span>
                    )}
                    </Link>
                    {
                      userInfo ?(
                        <div className='dropdown'>
                        <Link to='#'>{userInfo.name} <i className='fa fa-caret-down'></i>{' '}</Link>
                        <ul className='dropdown-content'>
                          <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                        </ul>
                        </div>

                      ) : 
                      (
                      <Link to="/signin">Sign In</Link>
                      )
                    }

                </div>

            </header>
            <main>
              <Route path='/cart/:id?' component={CartScreen}></Route>
              <Route path='/product/:id' component={ProductScreen}></Route>
              <Route path='/signin' component={SigninScreen}></Route>
              <Route path='/register' component={RegisterScreen}></Route>
              <Route path='/' exact component={HomeScreen}></Route>
                
            </main>
            <footer className='row center'>@2021 TODOS OS DIREITOS RESERVADOS</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
