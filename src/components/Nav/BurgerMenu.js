import React,{useState} from 'react';

import styled from 'styled-components';
import Sidebar from './Sidebar';

const BurgerMenu = () => {

    const [open , setOpen] = useState(false);

    return (
        <>
            <Burger open={open}  onClick={() => setOpen(!open)} >

                <div></div>
                <div></div>
                <div></div>
                    
            </Burger>
            <Sidebar open={open} onClick={() => setOpen(!open)}/>
        </>
    )
}

export default BurgerMenu


const Burger = styled.div`
  display:none;
    width:2.3rem;
    height:1.6rem;
    position:absolute;
    top:0rem;
    right:1rem;
    z-index:20;
    @media only screen and (max-width: 768px) { 
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;
    
    div{
        width:1.7rem;
        height:.2rem; 
        background-color: ${({open}) => open ? '#ccc' :  'rgba(61, 160, 182, 0.871)'};
        border-radius:2px;
        transform-origin:1px;
        transition:all .3s linear;

        &:nth-child(1) {
         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    } 
` 


