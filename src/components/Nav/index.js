import React from 'react';
import BurgerMenu from './BurgerMenu';


function Nav(){


    return(
        <header>
        <nav>
          <h1>
            <a href="/about"> <span className="logo">Web</span> evelopment</a>
          </h1>
          <div className="navbar-items">
          <BurgerMenu />

            
          </div>
        </nav>
      </header>
    )

    
}
export default Nav;

