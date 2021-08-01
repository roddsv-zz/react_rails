import React, { Component } from "react"
import Main from "../template/Main"
import axios from "axios"

const headerProps = {
    icon: 'usuarios',
    title: 'Usuários',
    subtitle: 'Formulário de cadastro de usuários.'
}

const baseUrl = 'http://localhost:3001/usuarios'

const initialState = {
    usuario: {nome: '', email: '', senha: '', ativo: false},
    list: []
}
export default class UsuarioForm extends Component {
    
    state = { ...initialState }

    clear() {
        this.setState({usuario: initialState.usuario})
    }

    save() {
        const usuario = this.state.usuario
        const method = usuario.id ? 'put' : 'post'
        const url = usuario.id ? `${baseUrl}/${usuario.id}` : baseUrl
        
        axios[method](url, usuario)
            .then(response => {
                const list = this.getUpdatedList(response.data)
                this.setState({usuario: initialState.usuario, list })
            })
    }

    getUpdatedList(usuario) {
        const list = this.state.list.filter(u => u.id !== usuario.id)
        list.unshift(usuario)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Usuários cadastrados
            </Main>
        )
    }

}