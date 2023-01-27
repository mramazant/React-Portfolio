import { Link } from "react-router-dom";
import "./index.css";
import ProfilPic from "../../assets/img/profilPic.jpg";
import resume from "../../assets/Muhammet_Ramazan_Toklu_Resume.pdf";

const Project = ({ link, image, description, title, width }) => {
  return (
    <div>
      <a href={link} class="cal" target="_blank" title={title}>
        <img src={image} width="100%" alt={title} />
        {description}
      </a>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <div className="aboutMe">
        <Link class="about-me" to={{ pathname: `/` }}>
          {/* <h1 className="">About Me</h1> */}
        </Link>
        <div className="profilPic"></div>
        <div class="aside">
          <Project image={ProfilPic} />
          <ul>
            <h3>SKILLS</h3>
            <li>CATIA V5</li>
            <li>AutoCAD</li>
            <li>MATLAB</li>
            <li>Visual Basic C</li>
            <li>Visual Studio C#</li>
            <li>Microsoft Office</li>
            <li>Solidworks</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Progressive web apps</li>
            <li>Agile methodology</li>
            <li>Computer science</li>
            <li>Database theory</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Git</li>
            <h3>Trilingual</h3>
            <li>Turkish</li>
            <li>German</li>
            <li>English</li>
          </ul>
        </div>
        <div className="main">
          <h3>About Me</h3>

          <p>
            I graduated from the mechanical engineering in 2022. At university,
            I had the opportunity to work with the programming languages "c" and
            "c#". Since I enjoyed programming lessons very much, I wanted to
            improve myself in this direction after my graduation. That's why I
            started the University of Denver's full stack coding program. I
            improved myself a lot during 3 months program and now I feel ready
            for a job.
          </p>

          <h4>EDUCATION</h4>
          <p>
            FULL STACK CODING BOOTCAMP <br></br> 10.2022-01.2023<br></br>
            UNIVERSITY OF DENVER<br></br>
            <br></br>
            B. ENG IN MECHANICAL ENGINEERING
            <br></br>
            03.2016 - 07.2022 Jade Hochschule University in Wilhelmshaven,
            Germany<br></br>
            Focus: energy and environmental technology<br></br>
            Final thesis: Efficiency of solar and wind energy using the example
            of energy production in Colorado (USA) - comparison and potential
            analysis
          </p>
          {/* resume will be here when its ready */}
          <form method="get" action={resume}>
            <button type="submit">Download Resume!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
