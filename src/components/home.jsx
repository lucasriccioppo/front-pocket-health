import React, { Component } from 'react'
require('../style/institutionRegister.css');
import Navbar from './navbar'
require('../style/home.css');
import Calendar from 'react-calendar';
import Modal from './Modal/Modal';
import axios from 'axios';

class InstitutionRegister extends Component {

    constructor() {
        super();

        this.state = {
            date: new Date(),
            isShowing: false,
            consults: []
        }
    }

    onChange = date => this.setState({ date: date })

    openModalHandler = () => {
        let institution = "5d24cfae56083f33640b549d"
        let url = `http://localhost:3000/consults/${institution}`

        axios
            .get(url)
            .then(response => {
                this.setState({
                    consults: response.data,
                    isShowing: true
                })
            })
            .catch(err => { })
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="header-schedule">
                    Agenda
                </div>
                <div className="content-schedule">
                    <Calendar 
                        onChange={ this.onChange } 
                        value={ this.state.date }
                        onClickDay={ this.openModalHandler }
                        className="schedule"
                    />
                </div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    date={this.state.date}
                    consults={this.state.consults}
                    >
                </Modal>
            </div>
        );
    }
}

module.exports = InstitutionRegister;
