import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

import logoImg from "../../assets/logo.png";
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
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
    </div>
  );
}

export default TeacherList;
