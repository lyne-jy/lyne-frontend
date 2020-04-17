import React, {Component} from 'react';
import {ToastContainer} from "react-toastify";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import BlogDetail from "./components/blogDetail";
import Blog from "./components/blog";
import Home from "./components/home";
import NotFound from "./components/notFound";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToastContainer/>
                <div className="wrapper">
                    <NavBar/>
                    <Switch>
                        <Route path='/blog/:id' component={BlogDetail}/>
                        <Route path='/blog' component={Blog}/>
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