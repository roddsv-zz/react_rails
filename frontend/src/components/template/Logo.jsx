import "./Logo.css";
import React from "react";
import logo from '../../assets/img/logo_incentiv-small.png'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
