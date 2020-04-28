import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../icons/logo.jpg"
import {getUser} from "../services/authService";

const NavBar = (props) => {
    const user = getUser();
    return (
        <nav className="navbar navbar-expand navbar-light d-flex justify-content-between">
            <NavLink className="navbar-brand" to="/" style={{color: "white"}}><img src={logo} className="logo"
                                                                                   alt="logo"/></NavLink>
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/tools">Tools</NavLink>
                <NavLink className="nav-link" to="/about-me">Abount Me</NavLink>
                {user &&
                <React.Fragment>
                    <NavLink className="nav-link" to="/manager/post">Post</NavLink>
                    <NavLink className="nav-link" to="/manager/logout">Logout</NavLink>
                </React.Fragment>}
            </div>
        </nav>
    );
};

export default NavBar;