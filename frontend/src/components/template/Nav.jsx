import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="top-menu">
        <nav className="menu">
            <Link to="/">Listar Usuários</Link>
            <Link to="/usuarios">Cadastrar Novo Usuário</Link><br/>
        </nav>
    </aside>