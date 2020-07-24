import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
                    </Switch>
                </div>
            {/* <Footer/> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
