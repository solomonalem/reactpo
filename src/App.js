import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [skillSelected, setSkillSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Nav
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      portfolioSelected={portfolioSelected}
      aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        setSkillSelected={setSkillSelected}

      />
      <main>
        <div>
            {contactSelected && (<Contact />) } 
            {aboutSelected && (<About />)}
            {portfolioSelected && (<Portfolio />)}
            {resumeSelected && (<Resume />)}

        </div>
     
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
