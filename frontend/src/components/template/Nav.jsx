import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="top-menu">
        <nav className="menu">
            <Link to="/">Cadastrar Novo Usuário</Link><br/>
            <Link to="/usuarios">Listar Usuários</Link>
        </nav>
    </aside>