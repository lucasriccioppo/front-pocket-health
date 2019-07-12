import React, { Component } from 'react'
import logo from '../../public/logo.png'
import '../style/navbar.css'

class InstitutionRegister extends Component {
    render() {
        return (
            <nav className="navbar navbar-static-top">
                <a className="navbar-brand" href="#">
                    <img id="logo" src={logo} alt="logo" />
                </a>
                <div className="right-navbar">
                    <i class="fas fa-user user"></i>Bem vindo
                </div>
            </nav>
        )
    }
}

export default InstitutionRegister