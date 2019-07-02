import React, { Component } from 'react'
import logo from '../../public/logo.png'
const axios = require('axios');
require('../style/login.css');

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cnpj: "",
            password: "",
            emptyCredentials: false,
            authDenied: false,
            redirect: false
        }
        this.validateForm = this.validateForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.routeChange = this.routeChange.bind(this)
    }

    validateForm() {
        return this.state.cnpj.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    routeChange(path) {
        this.props.history.push(path);
    }

    handleSubmit() {
        event.preventDefault();
        var url = "http://localhost:3000/institutionLogin"
        if (!this.validateForm()) {
            this.setState({ emptyCredentials: true })
            setTimeout(() => {
                this.setState({ emptyCredentials: false })
            }, 3000);
        } else {
            axios
                .post(
                    url,
                    {},
                    {
                        auth: {
                            username: this.state.cnpj,
                            password: this.state.password
                        }
                    }
                )
                .then(response => {
                    localStorage.auth = response.data.token;
                    localStorage.user = response.data.user;
                    this.routeChange('/home')
                })
                .catch(err => {
                    this.setState({ authDenied: true })
                    setTimeout(() => {
                        this.setState({ authDenied: false })
                    }, 3000);
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <div className="container">
                <div id="login-panel">
                    <div id="login">
                        <img id="logo" src={logo} alt="logo" />
                        <div id="title"><h3>Login</h3></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="cnpj" value={this.state.username} onChange={this.handleChange} type="text" className="form-control in-form" placeholder="CNPJ" />
                                <input id="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control in-form" placeholder="Password" />
                                <button type="submit" className="btn btn-dark btn-form">Sign in</button>
                            </div>
                            <h6 id="forgot" className="form-element">Forgot your password?</h6>
                        </form>
                        <div>
                            {this.state.emptyCredentials ? (
                                <div className="alert alert-warning" role="alert">
                                    Favor preencher os campos
                                </div>
                            ) : (
                                    <div></div>
                                )}
                            {this.state.authDenied ? (
                                <div className="alert alert-warning" role="alert">
                                    Usuário ou senha incorretos
                                </div>
                            ) : (
                                    <div></div>
                                )}
                        </div>
                        <p> OR  </p>
                        <div>
                            <button onClick={() => this.routeChange('/institutionRegister')} className="btn btn-dark signup-btn" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                        </div>
                        <div className="social-login">
                            <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i>   Sign in with Facebook</span> </button>
                            <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i>   Sign in with Google+</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Login;
