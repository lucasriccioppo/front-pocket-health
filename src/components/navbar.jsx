import React, { Component } from 'react'
import logo from '../../public/logo.png'
require('../style/navbar.css');

class InstitutionRegister extends Component {
    render() {
        return (
            <div className="container">
                

                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img id="logo" src={logo} alt="logo" />
                    </a>
                </nav>

            </div>
        );
    }
}

module.exports = InstitutionRegister;