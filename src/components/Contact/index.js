import React from 'react';

function Contact(){
    return(
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
            <div className="contact">
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
                    <a href="https://github.com/solomonmeresa" target="_blank">
                        <i class="fab fa-github"></i></a
                    >
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/solomom-meresa-4b83251a3/"
                        target="_blank"
                        ><i class="fab fa-linkedin-in"></i></a
                    >
                    </li>
                    
                
                </ul>
                </div>
            </div>
       </section>
       
    )
}
export default Contact;