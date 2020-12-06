import React from 'react';

function Nav(props){

  const {aboutSelected,setAboutSelected} = props;

    return(
        <header>
        <nav>
          <h1>
            <a href="./"><span>S</span> -Webdev</a>
          </h1>
          <div className="navbar-items">
           
            <ul>
             
              <li>
                
                <a href="#about" onClick={()=>setAboutSelected(true)}>About Me</a>
              </li>
              {/* <li>
                <a href="#skills">Skills</a>
              </li> */}
              <li>
                <a href="#work">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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