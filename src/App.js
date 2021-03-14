import React, {useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import NoMatch from './components/NoMatch'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({duration:1500})
  },[])
  
  return (
    <Router>
    <div>
      <Nav/>
      <main>
        <div>
        <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/work" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
              <Route component={NoMatch} />
            </Switch>
        </div>
     
      </main>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
