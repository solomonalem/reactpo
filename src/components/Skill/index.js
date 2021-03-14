import React,{useState} from 'react';

function Skill(){
    const [skills]=useState([
        {
            name:'FRONTEND',
            skillSet:['HTML','CSS',"Javascript",'React',"jQuery"]

       },
        {
            name:'BACKEND',
            skillSet:['Node','Express',"Java",'Sequelize',"RESTful APIs"]

       },
        {
            name:'LIBRARY',
            skillSet:['Bootstrap',"Material-UI",'Sass',"GraphQL",'Handlebars']

       },
        {
            name:'DATABASE',
            skillSet:['SQL','MySQL',"SQLite",'MongoDB',"Postgres"]

       }
    ])





    return(
        <section className="skills"id="skills">
          <h2 >Skills</h2>
            <div className="tech">

            {skills.map( (skill)=>(
                <div className="tech-item" key={skill.name} data-aos="fade-up"  data-aos-once="true">
                <h4>{skill.name}</h4>
                {skill.skillSet.map(set=>(
                    <li key={set}>{set}</li>

                ))}
                <div className="skill-clip"></div>
                </div>

            ))}
                
            </div>
        </section>

    )
}
export default Skill;