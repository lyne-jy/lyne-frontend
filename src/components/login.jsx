import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {login} from "../services/authService";
import {toast} from "react-toastify";

class Login extends Component {
    state = {
        email: "" ,
        password:""
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    handleSubmit = async () => {
        try {
            const {email, password} = this.state;
            const {data: jwt} = await login(email, password);
            localStorage.setItem('token', jwt);
            window.location = "/manager";
        }
        catch (e) {
            if (e.response && e.response.status === 400) {
                toast.error("用户名或密码错误.")
            }
        }
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="container">
                <h1>登录</h1>
                <Form className="comment-input">
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email"
                               name="email"
                               id="email"
                               onChange={this.handleEmailChange}
                               value={email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>密码</Label>
                        <Input type="password"
                               name="password"
                               id="password"
                               onChange={this.handlePasswordChange}
                               value={password}
                        />
                    </FormGroup>
                    <button type="button"
                            className="tag button-detail"
                            onClick={this.handleSubmit}>登录
                    </button>
                </Form>
            </div>
        );
    }
}

export default Login;