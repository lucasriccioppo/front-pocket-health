import React, { Component } from 'react'
import logo from '../../public/logo.png'
import '../style/navbar.css'

class InstitutionRegister extends Component {
    logout = () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        this.props.logout()
    }

    render() {
        return (
            <nav className="navbar navbar-static-top">
                <a className="navbar-brand" href="#">
                    <img id="logo" src={logo} alt="logo" />
                </a>
                <div onClick={this.logout} className="right-navbar" style={{ cursor: 'pointer', fontSize: '24px', marginRight: '40px' }}>
                    <i style={{ marginRight: '10px' }} className="fas fa-user"></i>Sair
                </div>
            </nav>
        )
    }
}

export default InstitutionRegister