import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/62815993?s=460&u=6c927289266cd2d670111c68263647baf2eef7bc&v=4" alt="Zacarias Becker" />
                <div>
                    <strong>Zacarias Becker</strong>
                    <span>Programação</span>
                </div>

            </header>
            <p>
                Entusiasta das melhores tecnologias.
            <br /><br />
            Python, JavaScript, Java
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem