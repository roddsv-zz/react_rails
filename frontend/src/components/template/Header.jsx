import './Header.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h3 className="mt-3">
            {props.title}
        </h3>
        <h6 className="lead text-muted">{props.subtitle}</h6>
    </header>