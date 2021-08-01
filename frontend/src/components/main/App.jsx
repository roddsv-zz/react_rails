import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main title="Formulário de Cadastro de Usuários" subtitle="Desafio para vaga de Desenvolvedor da Incentiv.me" />
        <Footer />
    </div>