import React from 'react';
import './App.css';
 // import Nav from './components/Nav'
 import Contact from './components/Contact'
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import Web from './components/Web'
import Gallery from './components/Gallery'
import Content from './components/Content'; 
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div>
        <Home />
       <Switch>
       <Route path="/Gallery" exact>
                <Gallery />
            </Route>  
       <Route path="/Web" exact>
                <Web />
            </Route>
            <Route path="/Content" exact>
                <Content />
            </Route>  
       <Route path="/Contact" exact>
                <Contact />
            </Route>
            </Switch>
      </div>
      </Router>
  );
}

export default App;
