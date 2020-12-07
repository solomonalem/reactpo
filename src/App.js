import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'

function App() {
  
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      <main>
        <div>
            {contactSelected && (<Contact />) } 
            {aboutSelected && (<About />)}
            {portfolioSelected && (<Portfolio />)}

        </div>
     
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
