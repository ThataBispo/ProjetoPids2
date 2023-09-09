import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="OnTeacher" />
          <h2>Encontre seu professor aqui.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de busca e divulgação"
          className="hero-image"
        />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Aluno
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Professor" />
            Professor
          </a>
        </div>

        <span className="total">
          Sua plataforma online para estudos.
          <img src={purpleHeartIcon} alt="Coração" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
