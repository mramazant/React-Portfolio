// import { Link } from "react-router-dom";
import "./index.css";
import ProfilPic from "../../assets/img/profilPic.jpg";
import resume from "../../assets/Muhammet_Ramazan_Toklu_Resume.pdf";
// import Skills from "../Skills";
/* update list of skills */


const education = [
  {
    course_name:"FULL STACK CODING BOOTCAMP",
    school:"UNIVERSITY OF DENVER",
    start:"October 2022",
    end:"January 2023",
    details:[]
  },
  {
    course_name:"B. ENG IN MECHANICAL ENGINEERING",
    school:"Jade Hochschule University in Wilhelmshaven, Germany",
    start:"March 2016",
    end:"July 2022",
    details:[
      "Focus: energy and environmental technology",
      "Final thesis: Efficiency of solar and wind energy using the example of energy production in Colorado (USA) - comparison and potential analysis"
    ]
  }
]
const ProfileImage = ({ link, image, description, title, width }) => {
  return (
    <div>
      <a href={link} className="cal" target="_blank" title={title}>
        <img src={image} className="profile-pic" alt={title} />
        {description}
      </a>
    </div>
  );
};
const About =()=>{
  return (
  <section className="about-me" id="about-me">
    <ProfileImage image={ProfilPic} />
    <div className="about-details">
      <h3>About Me</h3>
      <p>
        I graduated from the mechanical engineering in 2022. At university, I
        had the opportunity to work with the programming languages "c" and
        "c#". Since I enjoyed programming lessons very much, I wanted to
        improve myself in this direction after my graduation. That's why I
        started the University of Denver's full stack coding program. I
        improved myself a lot during 3 months program and now I feel ready for
        a job.
      </p>
    </div>
  </section>
  )
}
const Education =()=>{
  return (
    <section className="education" id="education">
      <h4>EDUCATION</h4>
      <div className="courses">
        {education.map((course, index)=>(
          <article key={`course-${index}`} className="course-container">
            <h4 className="course-name">{course.course_name}</h4>
            <p><span>{course.start}</span>-<span>{course.end}</span></p>
            <p className="course-name">{course.school}</p>
            <div className="course-details">{course.details.map((detail,index)=><p key={index}>{detail}</p>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
} 

const Resume=()=>{
  return (
    <section className="resume">
      <form method="get" action={resume}>
        <button type="submit" className="btn">Download Resume!</button>
      </form>
    </section>
)
}
const Details = () => {
  return (
    <div className="details" id="details">
        <About />
        <Education/>
        {/* resume will be here when its ready */}
        <Resume />
    </div>
  );
};

export default Details;
