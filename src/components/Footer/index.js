import React from 'react';

function Footer(){

  // get current year
  const getDate = function(){
    return  new Date().getFullYear()
  }

    return(
        <footer className="footer">
      
      <div className="footer-container">  
         <div>
        <h3>
        Contact 
        Me
      </h3>
      <div>
      
      <ul>
        <li>
          <a href="https://github.com/solomonmeresa" 
          target="_blank" rel="noreferrer"> 
          
            <i className="fab fa-github"></i> GitHub</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/solomom-meresa-4b83251a3/"
            target="_blank" rel="noreferrer"
            > <i className="fab fa-linkedin-in"></i>LinkedIn</a
          >
        </li>
      
       
      </ul>
    </div>
         </div>
        

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Portfolio</a>
            </li>
          </ul>
        </div>
    </div>

   
     

      <div className="copyright">copyright &#169; {getDate()}</div>
    </footer>
    )
}
export default Footer;