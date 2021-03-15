import React from 'react';

function Contact(){
    return(
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
            <div className="contact" data-aos="fade-up" data-aos-once="true">
                <h2>Contact Me</h2>
                <div className="contact-form">
                    <input placeholder="First-Name" type="text"/>
                    <input placeholder="Last-Name" type="text"/>
                    <input placeholder="Email" type="text"/>
                    <input placeholder="Phone-Number" type="phone"/>
                    <textarea rows="3"></textarea>
                    <div><button>Send</button></div>
                </div>
                

                <div>
      
                     <ul>
                    <li>
                    <a href="https://github.com/solomonmeresa" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i></a
                    >
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/solomom-meresa-4b83251a3/"
                        target="_blank" rel="noreferrer"
                        ><i className="fab fa-linkedin-in"></i></a
                    >
                    </li>
                    
                
                </ul>
                </div>
            </div>
       </section>
       
    )
}
export default Contact;