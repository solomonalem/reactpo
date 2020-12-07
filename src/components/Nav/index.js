import React from 'react';

function Nav(props){

  const {setAboutSelected,setContactSelected,setPortfolioSelected} = props;

    return(
        <header>
        <nav>
          <h1>
            <a href="./"><span>S</span> -Webdev</a>
          </h1>
          <div className="navbar-items">
           
            <ul>
             
              <li>
                <a href="#about" 
                  onClick={() => {
                    setContactSelected(false);
                    setAboutSelected(true);
                    setPortfolioSelected(false);
                  }}
                >About Me</a>
              </li>
              {/* <li>
                <a href="#skills">Skills</a>
              </li> */}

              <li>
                <a href="#work" 
                   onClick={() => {
                      setContactSelected(false);
                      setAboutSelected(false);
                      setPortfolioSelected(true);
                    }}
                  > Portfolio</a>
              </li>
              
              <li>
                <a href="#contact"
                  onClick={() => {
                    setContactSelected(true);
                    setAboutSelected(false);
                    setPortfolioSelected(false);
                  }}
                >Contact</a>
              </li>

              <li>
                <a href="#your-trainers">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )

    
}
export default Nav;