import React, { Component } from 'react'
import Navbar from './navbar'
import Calendar from 'react-calendar'
import Modal from './Modal/Modal'

import '../style/institutionRegister.css'
import '../style/home.css'

class InstitutionRegister extends Component {
    state = {
        date: new Date(),
        isShowing: false
    }

    onClickDay = (day) => this.setState({ date: day, isShowing: true })

    closeModalHandler = () => this.setState({ isShowing: false })

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="header-schedule">
                    Agenda
                </div>
                <div className="content-schedule">
                    <Calendar
                        value={this.state.date}
                        onClickDay={this.onClickDay}
                        className="schedule"
                    />
                </div>
                {this.state.isShowing && (
                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}
                        date={this.state.date}
                    />
                )}
            </div>
        )
    }
}

export default InstitutionRegister
