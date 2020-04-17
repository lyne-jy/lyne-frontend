import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark">
            <NavLink className="navbar-brand" to="/">Lyne</NavLink>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/tools">Tools</NavLink>
                <NavLink className="nav-link" to="/random">Abount Me</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;