import landingImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img className="img" src={logoImg} alt="EstudeAqui" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={landingImg} alt="" className="hero-image" />
      </div>
    </div>
  );
}
export default Landing;
