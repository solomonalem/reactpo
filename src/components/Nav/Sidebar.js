import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Sidebar = ({ open, onClick }) => {


    return (
        
      <UlContainer open={open}  onClick={onClick}>
      
      <li>
                <Link to="/" >About Me</Link>
              </li>
              

              <li>
                <Link to="/work" 
              
                  > Portfolio</Link>
              </li>
              
              <li>
                <Link to="/contact"
               
                >Contact</Link>
              </li>

              <li>
              <Link to="/resume" id="resume"
            download>Resume <i class="fas fa-download"></i></Link>
              </li>
       

       
            
    </UlContainer>

    )
}

export default Sidebar

const UlContainer = styled.ul`

    display:flex;
    flex-flow:row nowrap;
 

  @media only screen and (max-width: 768px) {
   
      flex-flow:column nowrap;
      background:white;
      position:fixed;
      border:none;
      top:0;
      right:0;
      height:90vh;
      width:300px !important;
      padding:4rem 2rem;
      transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;

    

    li {
      padding:1rem;
      margin:.2rem;
    }
  
  }

`
