import React from 'react';
import Skill from '../Skill';

function About (){
    
    return(
        <>
        <section className="about">
            <div className="hero">
                    <div className="cards" data-aos="fade" data-aos-once="true">
                        <div className="card card-1">
                        <h4>Project-management</h4>
                            <li>Jira</li>
                            <li>Confluence</li>
                            <li>Slack</li>
                            <li>Github</li>
                        </div>
                        <div className="card card-2">
                        <h4>DevOps</h4>
                            <li>Continuous I</li>
                            <li>Continuous D</li>
                            <li>Jenkins</li>
                            <li>Looper</li>
                        </div>
                        <div className="card card-3">
                        
                            <h4>Working-on</h4>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>TypeScript</li>
                            <li>Dino</li>
                        </div>
                        <div className="card card-4">
                            <h4>Software Development Life-Cycle</h4>
                            <li>Agile / Scrum</li>
                            <li>Water-fall</li>
                            <li>Test-Driven-D</li>
                            <li>Behavior-Driven-D</li>
                        </div>
                    </div>
                    <div className="hero-subtitle">
                        <h1 data-aos="fade-right" data-aos-once="true">Solomon Meresa</h1>
                        <h3 data-aos="fade-left" data-aos-once="true">Full-Stack Web developer</h3>
                    </div>
                  
               </div>
            <div className="about-bio" data-aos="fade-up" data-aos-once="true">
                   <h2>About Me</h2>
                   <p>
                       
Highly motivated front-end developer dedicated to writing clear, concise and robust code.Striving to never stop learning <br></br>




                    </p>
                    <p>
5 + years of object-oriented programming knowledge and experience in developing Professional Web applications and Enterprise solutions with complete Software Development Life-Cycle from requirement gathering, analysis, designing, developing, testing, and deployment.

                    </p>
                </div>
             
        </section>
      <Skill/>
      </>
    )
}
export default About;