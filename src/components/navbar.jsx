import React, { Component } from 'react'
import logo from '../../public/logo.png'
import '../style/navbar.css'

class InstitutionRegister extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img id="logo" src={logo} alt="logo" />
                    </a>
                </nav>
            </div>
        )
    }
}

export default InstitutionRegister