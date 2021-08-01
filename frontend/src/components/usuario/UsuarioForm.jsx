import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'usuarios',
    title: 'Usuários',
    subtitle: 'Formulário de cadastro de usuários.'
}

export default class UsuarioForm extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Usuários cadastrados
            </Main>
        )
    }

}