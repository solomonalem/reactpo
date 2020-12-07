import React,{useState} from 'react';

function Project(){

    const [projects] = useState([
        {
          name: 'ConnectIn',
          description: 'ConnectIn is a network, designed to connect your professional identity with opportunities. Users can sign up safely to create a profile.User can search for a job using location and technologies or description, where by default it will render any already searched jobs . Users can login to profile, and demonstrate their information, skills ,exprience,interests and background. Users can post any post, and leave comments',
          githubLink:'https://github.com/rongbangye/JobedIn',
          liveLink:'https://fathomless-stream-49781.herokuapp.com/'
        },
        {
          name: 'Edaga',
          description: 'Ecommerce web-app built with react .Its an online Watch store called Edaga which means "Market" in Tigriyna. Customers can select watches and they have the ability to see each item with its detailed information before adding to cart.Customers can add and remove items from the cart.finally can checkout and pay using paypal in which confirmation notification is sent to his email. fully responsive in all screen sizes.',
          githubLink:'https://github.com/solomonmeresa/Edaga-watch-store',
          liveLink:'https://edaga-watch-online-store.netlify.app/'
        },
        {
          name: 'Covid-Tracker',
          description: 'Is web-app built to help tracking covid-19 datas for every single nation.This application will give you a clear understanding of a countrys current state regarding new cases, recovered, death and total tests made so far.In addition to this it will present you covid related news from all media sources. User live -report section sorted from most to the least affected countries.',
          githubLink:'https://github.com/solomonmeresa/Corona-Tracker',
          liveLink:'https://solomonmeresa.github.io/Corona-Tracker/'
        },
        {
          name: 'Tech-Blog',
          description: 'Its fullstack web application built using Sequelize as ORM and MySql as database in the backend and handlebars template engine in the frontend.This application follows the most popular software design pattern or paradigm (MVC). Its an app where developers will post their blog regarding any topic. Users can access all the posts made by other users but he has to signup and login to post a new post, comment on a post, delete and edit his post.',
           githubLink:'https://github.com/solomonmeresa/Tech-Blog',
          liveLink:'https://ancient-ridge-63478.herokuapp.com/'
        },
    ]);

    return(
        <div className="projects-container">
            {projects.map((project) => (
                <>
                <div className={`project project-${project.name}`} key={project.name}>
                    <div className="project-img"> </div>
                    <div className="project-info">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <div>
                          <h6><span>HTML</span> <span>CSS</span><span>BOOTSTRAP</span>  <span> JAVASCRIPT</span></h6>
                        </div>
                        <div>
                            <a href={`${project.githubLink}`} target="_blank" rel="noreferrer">  GitHub</a>
                            <a href={`${project.liveLink}`} target="_blank" rel="noreferrer"> Live</a>                
                        </div>
                    </div>
                    
                </div>
                <hr></hr>
                </>
            
                
            ))}
           
        </div>


       
        
          
        
         
    )
}

export default Project;