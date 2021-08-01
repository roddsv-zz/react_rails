import './Footer.css'
import React from 'react'
import linkedin from '../../assets/img/linkedin.png'
import github from '../../assets/img/github.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <footer className="footer">
        <span>
            Aplicação desenvolvida pelo candidato Rodrigo Soares para a <strong>Incentiv.me. </strong>
        
            Clique nos botões e veja mais do trabalho do Rodrigo Soares no LinkedIn e no GitHub.
            <a target="blank" href="//www.linkedin.com/in/roddsv" className="logo">
                <img src={linkedin} alt="linkedin-logo" width="40" height="40"/>
            </a>
            <a target="blank" href="//www.github.com/roddsv" className="logo">
                <img src={github} alt="linkedin-logo" width="40" height="40"/>
            </a>
        </span>     
    </footer>