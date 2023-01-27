import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Professores Disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars.githubusercontent.com/u/59943388?v=4"
              alt="Rodrigo Lucas"
            />
            <div>
              <strong>Rodrigo Lucas</strong>
              <span>História</span>
            </div>
          </header>
          <p>Historia antiga.</p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src="" alt="" />
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
