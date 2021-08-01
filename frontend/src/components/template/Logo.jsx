import "./Logo.css";
import React from "react";
import logo from '../../assets/img/logo_incentiv-small.png'
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>
