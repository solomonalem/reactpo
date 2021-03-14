import React,{useState  } from 'react';

function Project(){

    const [projects] = useState([
      {
        name: 'AdoptMe',
        description: 'AdoptMe  is a website for an dog shelter where user can  adopt  dogs. AdoptMe has to portals the admin and user portals .In the admin portal you have the abiliity to add adog element with its all properties ,check the adoption requests from user and approve it, admin can also see the list of all users or applicants from the portal, user have also the ability to donate were payment is proccessed by Stripe',
         githubLink:'https://github.com/hameed1239/adopt-me',
        liveLink:'https://adopt-me-hameed1239.herokuapp.com/'
      },
        {
          name: 'ConnectIn',
          description: 'ConnectIn is a network, designed to connect your professional identity with opportunities. Users can sign up safely to create a profile.User can search for a job using location and technologies or description, where by default it will render any already searched jobs . Users can login to profile, and demonstrate their information, skills ,exprience,interests and background. Users can post any post, and leave comments',
          githubLink:'https://github.com/rongbangye/JobedIn',
          liveLink:'https://fathomless-stream-49781.herokuapp.com/'
        },
        {
          name: 'Covid-Tracker',
          description: 'Is web-app built to help tracking covid-19 datas for every single nation.This application will give you a clear understanding of a countrys current state regarding new cases, recovered, death and total tests made so far.In addition to this it will present you covid related news from all media sources. User live -report section sorted from most to the least affected countries.',
          githubLink:'https://github.com/solomonmeresa/Corona-Tracker',
          liveLink:'https://solomonmeresa.github.io/Corona-Tracker/'
        },
        {
          name: 'Edaga',
          description: 'Ecommerce web-app built with react .Its an online Watch store called Edaga which means "Market" in Tigriyna. Customers can select watches and they have the ability to see each item with its detailed information before adding to cart.Customers can add and remove items from the cart.finally can checkout and pay using paypal in which confirmation notification is sent to his email. fully responsive in all screen sizes.',
          githubLink:'https://github.com/solomonmeresa/Edaga-watch-store',
          liveLink:'https://edaga-watch-online-store.netlify.app/'
        },
      
        {
          name: 'Tech-Blog',
          description: 'Its fullstack web application built using Sequelize as ORM and MySql as database in the backend and handlebars template engine in the frontend.This application follows the most popular software design pattern or paradigm (MVC). Its an app where developers will post their blog regarding any topic. Users can access all the posts made by other users but he has to signup and login to post a new post, comment on a post, delete and edit his post.',
           githubLink:'https://github.com/solomonmeresa/Tech-Blog',
          liveLink:'https://ancient-ridge-63478.herokuapp.com/',
        },
      
    ]);

    return(
        <div className="projects-container">
            {projects.map((project) => (
                <>
                <div className={`project project-${project.name}`} key={project.name}>
                    <div  className="project-img" data-aos="fade-right"   data-aos-once="true"  > </div>
                    <div className="project-info" data-aos-once="true" data-aos="fade-left">
                        <h4 data-aos-once="true" data-aos="slide-up">{project.name}</h4>
                        <p>{project.description}</p>
                        
                        
                        <div data-aos-once="true" data-aos="fade-down">
                            <a href={`${project.githubLink}`} target="_blank" rel="noreferrer">  GitHub</a>
                            <a href={`${project.liveLink}`} target="_blank" rel="noreferrer"> Live</a>                
                        </div>
                    </div>
                    
                </div>
                </>
            
                
            ))}
           
        </div>


       
        
          
        
         
    )
}

export default Project;