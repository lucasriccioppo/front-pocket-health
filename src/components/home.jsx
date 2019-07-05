import React, { Component } from 'react'
require('../style/institutionRegister.css');
import Navbar from './navbar'

class InstitutionRegister extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <h1>Home</h1>
            </div>
        );
    }
}

module.exports = InstitutionRegister;
