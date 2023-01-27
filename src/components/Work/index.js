import "./index.css";
import Boozehound from "../../assets/img/BoozehoundScreenShot.png";
import DreamJournal from "../../assets/img/dreamJournal.png";
// import ProfilPic from "../../assets/img/ProfilPic.jpg";

const Project = ({ link, image, description, title }) => {
  return (
    <div>
      <a href={link} class="cal" target="_blank" title={title}>
        <img src={image} width="100%" alt={title} />
        {description}
      </a>
    </div>
  );
};

const Work = () => {
  return (
    <div className="workCard">
      <div>
        <h4>Boozehound</h4>
        <Project
          link="https://mg1919.github.io/boozeHound/"
          image={Boozehound}
          title="Boozehound"
          description="A web based application that will allow a user to search for a drink recipe based on the ingredients they have available. The application will provide a recipe from the bartender API and a tutorial video from the youtube API to help the user make their cocktail."
        />
        <h4>DreamJournal</h4>
        <Project
          link="https://dream-stream270.herokuapp.com/"
          image={DreamJournal}
          title="Dream Journal"
          description="The purpose of this project was to create a website that will allow a user to sign in and create a post detailing a dream that they had. They will also be able to see the posts of other users as well as all of their own posts. This will allow them to track their own dreams over time as well as the dreams of their friends and others."
        />
        <h4>Vinyl</h4>
        {/* project 3 will be here when its ready */}
        <Project
          link="https://github.com/mramazant/homework1"
          image=""
          title="Vinyl"
          description=""
        />
      </div>
    </div>
  );
};

export default Work;
