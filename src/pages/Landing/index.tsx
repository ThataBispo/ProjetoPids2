import { Link } from "react-router-dom";

// import landingImg from "../../assets/landing.png";
// import logoImg from "../../assets/logo.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import landingImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Aluno" />
            Aluno
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Professor" />
            Professor
          </Link>
        </div>

        <span className="total">
          Estude conosco. <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
export default Landing;
