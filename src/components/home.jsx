import React from 'react';
import {Link} from "react-router-dom";
import "react-typist/dist/Typist.css"


const Home = () => {
    return (
        <div id="home-main">
            <div className="home-header">
                <h1>
                    欢迎！<br/>这里是Lyne的个人网站， <br/>来发现有趣的东西吧。
                </h1>
                {/*<Typist className="p-4" cursor={cursor} avgTypingDelay={100} stdTypingDelay={60}>*/}
                {/*    This is Lyne's personal website, now let's find something interesting.*/}
                {/*</Typist>*/}
            </div>
            <div className="row justify-content-start">
                <Link to="./blog" className="col-sm-3 card" style={{ textDecoration: 'none', color: 'white'}}>
                    <div className="card-body">
                        <h5 className="card-title">Blog</h5>
                        <p className="card-text">看看我的Blog</p>
                    </div>
                </Link>
                <Link to="./tools" className="col-sm-3 card" style={{ textDecoration: 'none', color: 'white'}}>
                    <div className="card-body">
                        <h5 className="card-title">Tools</h5>
                        <p className="card-text">试一试好玩的东西</p>
                    </div>
                </Link>
                <Link to="./about-me" className="col-sm-3 card" style={{ textDecoration: 'none', color: 'white'}}>
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">关于我</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;