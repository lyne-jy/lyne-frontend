import React, {Component} from 'react';
import Typist from "react-typist";
import {FaGithub, FaEnvelope, FaPencilAlt, FaInstagram, FaSteam} from 'react-icons/fa';
import {ReactComponent as NetEase} from "../icons/NetEase_Music_logo.svg";
import {Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input} from "reactstrap";
import {postMessage} from "../services/messageService";
import {toast} from "react-toastify";

class AboutMe extends Component {
    state = {
        showMessage: false,
        message: ""
    };

    handleClose = () => {
        this.setState({showMessage: !this.state.showMessage});
    };

    handleChange = (e) => {
        this.setState({message: e.target.value})
    };

    handleSubmit = async () => {
        this.handleClose();
        try{
            await postMessage(this.state.message);
            toast("感谢你的留言");
            this.setState({message: ""});
        }
        catch (e) {
            toast.error("留言时出现了错误。");
        }
    };

    render() {
        const cursor = {
            show: true,
            blink: true,
            element: '_',
            hideWhenDone: false,
        };
        const {showMessage} = this.state;
        return (
            <>
                <div>
                    <h1 className="about-me-text">
                        <Typist startDelay={1000}
                                cursor={cursor}
                                avgTypingDelay={150}
                                stdTypingDelay={50}>
                            <span>我，是一个CS准新生。</span>
                            <Typist.Backspace count={6} delay={500}/>
                            <span>精通Hello World的程序员</span>
                            <Typist.Backspace count={17} delay={500}/>
                            <span>刚开始学前端的鶸。</span>
                            <Typist.Backspace count={9} delay={500}/>
                            <span>臭打游戏的。</span>
                            <Typist.Backspace count={6} delay={500}/>
                            <span>终极音乐爱好者。</span>
                            <Typist.Backspace count={8} delay={500}/>
                            <span>从来不拍人的摄影爱好者。</span>
                            <Typist.Backspace count={12} delay={500}/>
                            <Typist.Delay ms={1000} />
                            <span>帅比。</span>
                            <Typist.Backspace count={12} delay={2000}/>
                            <span>嘻嘻</span>
                            <Typist.Backspace count={2} delay={500}/>
                        </Typist>
                    </h1>`
                    <div>
                        <div className="contact-info-area">
                            <p className="text-center">Contact Me:</p>
                            <div className="d-flex justify-content-center">
                                <a rel="noopener noreferrer"
                                   href='https://github.com/lyne-jy'
                                   target="_blank"
                                   className="btn">
                                    <FaGithub size={40}/>
                                </a>
                                <a rel="noopener noreferrer"
                                   href="Mailto:lyne8278@gmail.com"
                                   className="btn">
                                    <FaEnvelope size={40}/>
                                </a>
                                <button onClick={this.handleClose}
                                        className="btn">
                                    <FaPencilAlt size={36}/>
                                </button>
                            </div>
                        </div>

                        <Modal isOpen={showMessage} toggle={this.handleClose} className="about-me-modal">
                            <ModalHeader toggle={this.handleClose}>留言</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Input type="textarea"
                                           onChange={this.handleChange}
                                           value={this.state.message}
                                           placeholder="写下你的建议。"/>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <button className="tag" onClick={this.handleSubmit}>提交</button>{' '}
                                <button className="tag" onClick={this.handleClose}>取消</button>
                            </ModalFooter>
                        </Modal>


                        <div className="socialmedia-info-area">
                            <p className="text-center">Where to find me:</p>

                            <div className="d-flex justify-content-center">
                                <div className="d-inline-flex flex-column">
                                    <div className="socialmedia">
                                        <div className="d-flex"><FaSteam size={40}/>
                                            <p className="socialmedia-text">lyne_</p>
                                        </div>
                                    </div>
                                    <div className='socialmedia'>
                                        <div className="d-flex">
                                            <FaInstagram size={40}/>
                                            <p className="socialmedia-text"> lyne_play</p>
                                        </div>
                                    </div>
                                    <div className='socialmedia'>
                                        <div className="d-flex">
                                            <NetEase className="netease"/>
                                            <p className="socialmedia-text">Lyne_</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMe;