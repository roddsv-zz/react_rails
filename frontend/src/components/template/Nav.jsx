import './Nav.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="top-menu">
        <nav className="menu">
            <a href="#/">Cadastrar Novo Usuário</a><br/>
            <a href="#/usuarios">Listar Usuários</a>
        </nav>
    </aside>