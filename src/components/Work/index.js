import Boozehound from "../../assets/img/BoozehoundScreenShot.png";
import DreamJournal from "../../assets/img/dreamJournal.png";
import "./index.css";
// import ProfilPic from "../../assets/img/ProfilPic.jpg";
const projects = [
  {
    link:"https://mg1919.github.io/boozeHound/",
    image:Boozehound,
    title:"Boozehound",
    description:"A web based application that will allow a user to search for a drink recipe based on the ingredients they have available. The application will provide a recipe from the bartender API and a tutorial video from the youtube API to help the user make their cocktail."
  },
  {
    link:"https://dream-stream270.herokuapp.com/",
    image:DreamJournal,
    title:"Dream Journal",
    description:"The purpose of this project was to create a website that will allow a user to sign in and create a post detailing a dream that they had. They will also be able to see the posts of other users as well as all of their own posts. This will allow them to track their own dreams over time as well as the dreams of their friends and others."
  },
  {
    /* project 3 will be here when its ready */
    link:"https://github.com/mramazant/homework1",
    image:null,
    title:"Vinyl",
    description:""
  }
]
const Project = ({ link, image, description, title }) => {
  return (
    <div className="work-container">
        <h4 className="project-title">{title}</h4>
      <a href={link} className="project-link" target="_blank" rel="noreferrer" title={title}>
        <img src={image} width="100%" alt={title} />
      </a>
      <p className="project-description">
        {description}
      </p>
    </div>
  );
};

const Work = () => {
  return (
      <section className="work-section">
        {projects.map((project, index)=>(
          <Project
            key={index}
            link={project.link}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </section>
  );
};

export default Work;
