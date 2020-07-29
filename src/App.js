import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import AllProducts from './pages/AllProducts';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage';
import './App.scss';




function App() {

  return (
    <div className="App">
        
        <BrowserRouter>
            <Header/>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={ Homepage } />
                        <Route path="/products" component={Products}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/allproducts" component={AllProducts}/>
                    </Switch>
                </div>
            <Footer/>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
