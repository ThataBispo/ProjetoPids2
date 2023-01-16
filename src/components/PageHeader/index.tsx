import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/logo.png";

import "./styles.css";


function PageHeader() {


  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="OnTeacher" />
        </div>

        <div className="header-content">
          <strong>Professores Disponíveis</strong>
        </div>
      </header>
  );

}

export default PageHeader;