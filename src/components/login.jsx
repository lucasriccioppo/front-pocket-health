import React, { Component } from 'react'
import logo from '../../public/logo.png'
require('../style/login.css');

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div id="login-panel">
                    <div id="login">
                        <img id="logo" src={logo} alt="logo" />
                        <div id="title"><h3>Login</h3></div>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control in-form" placeholder="Username" />
                                <input type="password" className="form-control in-form" placeholder="Password" />
                                <button type="submit" className="btn btn-dark btn-form">Sign in</button>
                            </div>
                            <h6 id="forgot" className="form-element">Forgot your password?</h6>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Login;
