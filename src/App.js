import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'

function App() {
  
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      />
      <main>
        <div>
            {/* {contactSelected && (<ContactForm />) }  */}
            {aboutSelected && (<About/>)}
            {/* {portfolioSelected && (<Portfolio />)} */}

        </div>
     
      </main>
      
    </div>
  );
}

export default App;
