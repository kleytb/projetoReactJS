import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from '../src/pages/Home'
import ProductScreen from '../src/pages/Product';
import CartScreen from '../src/pages/Cart';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
                    <Link to="/signin">Sign In</Link>
                </div>

            </header>
            <main>
              <Route path='/cart/:id?' component={CartScreen}></Route>
              <Route path='/product/:id' component={ProductScreen}></Route>
              <Route path='/' exact component={HomeScreen}></Route>
                
            </main>
            <footer className='row center'>@2021 TODOS OS DIREITOS RESERVADOS</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
