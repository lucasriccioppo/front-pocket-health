import React, { Component } from 'react'
require('../style/institutionRegister.css');
import Navbar from './navbar'
require('../style/home.css');
import Calendar from 'react-calendar';
import Modal from './Modal/Modal';

class InstitutionRegister extends Component {

    constructor() {
        super();

        this.state = {
            date: new Date(),
            isShowing: false
        }
    }

    onChange = date => this.setState({ date })

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
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
                        onClickDay={this.openModalHandler}
                        className="schedule"
                    />
                </div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </Modal>
            </div>
        );
    }
}

module.exports = InstitutionRegister;
