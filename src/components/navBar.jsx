import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light d-flex justify-content-between">
            <NavLink className="navbar-brand" to="/" style={{color: "white"}}>L</NavLink>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/tools">Tools</NavLink>
                <NavLink className="nav-link" to="/about-me">Abount Me</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;