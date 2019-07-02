import React, { Component } from 'react'
import logo from '../../public/logo.png'
require('../style/institutionRegister.css');

class InstitutionRegister extends Component {
    render() {
        return (
            <div className="container">
                <div id="form">
                    <img id="logo" src={logo} alt="logo" />
                    <h3>Cadastro de Instituição</h3>
                    <form>
                        
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = InstitutionRegister;
