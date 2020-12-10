import React from 'react';
import Skill from '../Skill';

function About (){
    
    return(
        <>
        <section className="about">
            <div className="hero">
                    <div className="hero-body">
                        <div className="hero-img"></div>
                    </div>
                    <div className="hero-subtitle">
                        <h3>Solomon Meresa</h3>
                        <p>Full-Stack Web developer</p>
                    </div>
                  
               </div>
            <div className="about-bio">
                   <h2>About Me</h2>
                   <p>
                        Lorem ipsum dolor tiae iusto autem quos ex saepe magni harum quis modi
                        accusantium neque fu sit amet consectetur adipisicing elit. Ea eum
                        tempore qui molestiae iusto autem quos ex saepe magni harum quis modi
                        accusantium neque fuga nisi, explicabo quasi velit repellat? Lorem
                        ipsum dolor tiae iusto autem quos ex saepe magni harum quis modi
                        accusantium neque fu sit amet consectetur adipisicing elit. Ea eum
                      
                    </p>
                </div>
             
        </section>
      <Skill/>
      </>
    )
}
export default About;