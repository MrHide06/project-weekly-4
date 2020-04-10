import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Second from './pages/Second'
import SignIn from './pages/SignIn'
import TagArchive from './pages/TagArchive'

function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page/2">
              <Second />
            </Route>
            <Route path="/tagarchive">
              <TagArchive />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
          <Footer />
          </Router>      
        </div>
      </div>
  );
}

export default App;
