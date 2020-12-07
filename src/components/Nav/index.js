import React from 'react';

function Nav(props){

  const {aboutSelected,contactSelected,portfolioSelected,setAboutSelected,setContactSelected,setPortfolioSelected,setSkillSelected} = props;

    return(
        <header>
        <nav>
          <h1>
            <a href="./"><span>S</span> -Webdev</a>
          </h1>
          <div className="navbar-items">
           
            <ul>
             
              <li>
                <a href="#about"  className={`${ aboutSelected && `navActive`}`}
                  onClick={() => {
                    setContactSelected(false);
                    setAboutSelected(true);
                    setPortfolioSelected(false);
                    setSkillSelected(false);
                  }}
                >About Me</a>
              </li>
              

              <li>
                <a href="#work" className={`${ portfolioSelected && `navActive`}`}
                   onClick={() => {
                      setContactSelected(false);
                      setAboutSelected(false);
                      setPortfolioSelected(true);
                    setSkillSelected(false);

                    }}
                  > Portfolio</a>
              </li>
              
              <li>
                <a href="#contact" className={`${ contactSelected && `navActive`}`}
                  onClick={() => {
                    setContactSelected(true);
                    setAboutSelected(false);
                    setPortfolioSelected(false);
                    setSkillSelected(false);

                  }}
                >Contact</a>
              </li>

              <li>
                <a href="../../../public/files/Resume.pdf" download>Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )

    
}
export default Nav;