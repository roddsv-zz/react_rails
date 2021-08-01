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
    usuario: {nome: '', email: '', senha: '', ativo: false, contato: {telefone: '', ativo: false, endereco: {cep: '', endereco: '', numero: '', bairro: '', cidade: '', uf: '', ativo: false}}},
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

    updateField(event) {
        const usuario = {...this.state.usuario }
        usuario[event.target.nome] = event.target.value
        usuario[event.target.email] = event.target.value
        usuario[event.target.senha] = event.target.value
        usuario[event.target.ativo] = event.target.value
        this.setState({ usuario })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome"
                            defaultValue={this.state.usuario.nome} onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email"
                            defaultValue={this.state.usuario.email} onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="text" className="form-control" name="senha"
                            defaultValue={this.state.usuario.senha} onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-11 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                    </div>
                    <div className="col-1 d-flex justify-content-end">
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }

}