import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import AllProducts from './pages/AllProducts';

import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.scss';




function App() {

  return (
    <div className="App">
        <Provider store={store}>
        <BrowserRouter>
            <Header/>
            
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={ Homepage } />
                        <Route path="/products" component={Products}/>
                        <Route path="/allproducts" component={AllProducts}/>
                        <Route path="/product-detail/:id" component={ProductDetail}/>
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
