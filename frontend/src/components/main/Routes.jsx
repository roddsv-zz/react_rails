import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../home/Home'
import UsuarioForm from '../usuario/UsuarioForm'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/usuarios" component={UsuarioForm} />
        <Redirect from='*' to="/" />
    </Switch>