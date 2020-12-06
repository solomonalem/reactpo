import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        <div>
            {contactSelected && (<Contact />) } 
            {aboutSelected && (<About aboutSelected={aboutSelected} contactSelected={contactSelected} />)}
            {/* {portfolioSelected && (<Portfolio />)} */}

        </div>
     
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
