import React, {Component} from 'react';
import {ToastContainer, Slide} from "react-toastify";
import {Redirect, Route, Switch} from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import BlogDetail from "./components/blogDetail";
import Blog from "./components/blog";
import Home from "./components/home";
import NotFound from "./components/notFound";
import AboutMe from "./components/aboutMe";
import Tools from "./components/tools";
import Login from "./components/login";
import Post from "./components/post";
import Manager from "./components/manager";
import Logout from "./components/logout";
import ProtectedRoute from "./components/protectedRoute";
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToastContainer toastClassName="toastify"
                                transition={Slide}
                                position={"top-center"}
                                autoClose={3000}/>
                <div className="wrapper">
                    <NavBar />
                    <Switch>
                        <Route path='/blog/:id' component={BlogDetail}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/about-me' component={AboutMe}/>
                        <Route path='/tools' component={Tools}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/manager/logout' component={Logout}/>
                        <ProtectedRoute path='/manager/post' component={Post}/>
                        <ProtectedRoute path='/manager' component={Manager}/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/not-found' component={NotFound}/>
                        <Redirect to='/not-found'/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;