import React,{useState} from 'react';

function Skill(){
    const [skills]=useState([
        {
            name:'FRONTEND',
            skillSet:['HTML','CSS',"Javascript",'React']

       },
        {
            name:'BACKEND',
            skillSet:['Node','Express',"Java",'Sequelize']

       },
        {
            name:'LIBRARY',
            skillSet:['Bootstrap','Sass',"jQuery",'Handlebars']

       },
        {
            name:'DATABASE',
            skillSet:['SQL','MySQL',"SQLite",'MongoDB']

       }
    ])





    return(
        <section className="skills"id="skills">
        <h2 >Skills</h2>
            <div className="tech">

            {skills.map( (skill)=>(
                <div className="tech-item" key={skill.name}>
                <h4>{skill.name}</h4>
                {skill.skillSet.map(set=>(
                    <li key={set}>{set}</li>

                ))}
                
                </div>

            ))}
                
            </div>
        </section>

    )
}
export default Skill;