import { useState } from 'react'
import './App.css'
import penIcon from "./assets/lapis_azul.svg"
import trashIcon from "./assets/lixeira_vermelha.svg"


function App() {

  const [tasklist, setTasklist] = useState([
    { id: 1, description: "Revisar HTML" },
    { id: 2, description: "Revisar CSS" },
    { id: 3, description: "Revisar ReactJS" },
    { id: 4, description: "Revisar React Native" }
  ])

  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        <form className="cad-task">
          <input className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa" />
          <button className="card-task__btn-confirm">Adicionar</button>
        </form>

        <section className="cardlist">

          {
            tasklist.map((t) => {
              return (
                <article className="cardtask" key={tasklist.id}>
            <p className="cardtask__tasc-text">{t.description}</p>

            <div className="cardtask__icon-box">
              <div className="cardlist__icon">
               <img src={penIcon} className="cardlist__edit-icon" alt="" />
              </div>
              <div className="cardlist__icon">
               <img src={trashIcon} className="cardlist__delete-icon" alt="" />
             </div>
            </div>
          </article>
           )})
          }



        </section>
      </main>

      <footer className="footer-list">
        <p className="footer-list__right-text">2026, React List - Todos os direitos reservados</p>
      </footer>

    </>
  )
}

export default App
