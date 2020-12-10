import React from 'react';

function Nav(props){

  const {aboutSelected,contactSelected,portfolioSelected,setAboutSelected,setContactSelected,setPortfolioSelected,setResumeSelected,resumeSelected} = props;

    return(
        <header>
        <nav>
          <h1>
            <a href="./"> <span className="logo">Web</span> evelopment</a>
          </h1>
          <div className="navbar-items">
           
            <ul>
             
              <li>
                <a href="#about"  className={`${ aboutSelected && `navActive`}`}
                  onClick={() => {
                    setContactSelected(false);
                    setAboutSelected(true);
                    setPortfolioSelected(false);
                    setResumeSelected(false)
                  }}
                >About Me</a>
              </li>
              

              <li>
                <a href="#work" className={`${ portfolioSelected && `navActive`}`}
                   onClick={() => {
                      setContactSelected(false);
                      setAboutSelected(false);
                      setPortfolioSelected(true);
                      setResumeSelected(false)

                    }}
                  > Portfolio</a>
              </li>
              
              <li>
                <a href="#contact" className={`${ contactSelected && `navActive`}`}
                  onClick={() => {
                    setContactSelected(true);
                    setAboutSelected(false);
                    setPortfolioSelected(false);
                    setResumeSelected(false)
                   

                  }}
                >Contact</a>
              </li>

              <li>
              <a href="#resume" id="resume" className={`${ resumeSelected && `navActive`}`}
                  onClick={() => {
                    setContactSelected(false);
                    setAboutSelected(false);
                    setPortfolioSelected(false);
                    setResumeSelected(true)
                   

                  }} download>Resume <i class="fas fa-download"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )

    
}
export default Nav;