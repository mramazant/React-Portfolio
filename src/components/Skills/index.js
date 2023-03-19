import "./index.css"
let skills = {
    technologies:[
      {skill:"CATIA V5", level:5},
      {skill:"AutoCAD", level:5},
      {skill:"MATLAB", level:5},
      {skill:"Visual Basic C", level:5},
      {skill:"Visual Studio C#", level:5},
      {skill:"Microsoft Office", level:5},
      {skill:"Solidworks", level:5},
      {skill:"HTML5", level:5},
      {skill:"CSS3", level:5},
      {skill:"JavaScript", level:5},
      {skill:"jQuery", level:5},
      {skill:"Express.js", level:5},
      {skill:"React.js", level:5},
      {skill:"Node.js", level:5},
    ],
    technical:[
      {skill:"Progressive web apps", level:5},
      {skill:"Agile methodology", level:5},
      {skill:"Computer science", level:5},
      {skill:"Database theory", level:5},
      {skill:"MongoDB", level:5},
      {skill:"MySQL", level:5},
      {skill:"Git", level:5},
    ],
    soft:[
      {skill:"Trilingual", level:5},
      {skill:"Turkish", level:5},
      {skill:"German", level:5},
      {skill:"English", level:5},
    ]
}
const Skill = ({skill, level})=>{
    return (
        <div className="skill">
        <div>{skill}</div>
        </div>
    )
}
const SkillsContainer=({skills, header})=>{
    return(

        <article className="skills-container">
            <h4>{header}</h4>
            <div className="skill-list">
                {skills.map((skill, index)=>(<Skill key={index} skill={skill.skill}/>))}
            </div>
        </article>
    )
}
const Skills = ()=>{
    return (
        <section className="skill-section">
            <h3>SKILLS</h3>
            <SkillsContainer skills={skills.technologies} header="Technologies"/>
            <div class="extra-skills">
                <SkillsContainer skills={skills.technical} header="Technical Skills"/>
                <SkillsContainer skills={skills.soft} header="Soft Skills"/>
            </div>
            {/* {skills.technical.map((skill)=>(<Skill skill={skill.skill}/>))}
            {skills.soft.map((skill)=>(<Skill skill={skill.skill}/>))} */}
        </section>
    )
}

export default Skills;