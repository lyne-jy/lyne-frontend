import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {getUser} from "../services/authService";

const ProtectedRoute = ({path, component: Component}) => {
    const user = getUser();
    return (
        <Route path={path}
               render={props => {
               if (!user) return <Redirect to="/not-found"/>;
               return <Component {...props}/>}
               } />
    );
};

export default ProtectedRoute;