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
import Subscribe from './pages/Subscribe'
import Contact from './pages/Contact'
import Wisata from './pages/Tag/Wisata'
import Sentani from './pages/Tag/Sentani'
import Trio from './pages/Tag/Triogili'
import Kete from './pages/Tag/Ketekesu'
import Kebudayaan from './pages/Tag/Kebudayaan'
import AlatMusik from './pages/Tag/AlatMusik'
import Epidemik from './pages/Tag/Epidemik'
import Taman from './pages/Tag/Taman'
import Gamelan from './pages/Tag/Gamelan'

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
            <Route exact path="/tagarchive">
              <TagArchive />
            </Route>
            <Route exact path="/tag/tempatwisata">
              <Wisata />
            </Route>
            <Route path="/tag/kebudayaan">
              <Kebudayaan />
            </Route>
            <Route path="/tag/alatmusik">
              <AlatMusik />
            </Route>
            <Route path="/tag/epidemik">
              <Epidemik />
            </Route>
            <Route path="/tag/taman">
              <Taman />
            </Route>
            <Route path="/sentani">
              <Sentani />
            </Route>
            <Route path="/trio">
              <Trio />
            </Route>
            <Route path="/kete">
              <Kete />
            </Route>
            <Route path="/gamelan">
              <Gamelan />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/subscribe">
              <Subscribe />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            
          </Switch>
          <Footer />
          </Router>      
        </div>
      </div>
  );
}

export default App;
