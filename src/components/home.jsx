import React, { Component } from 'react'
import Navbar from './navbar'
import Calendar from 'react-calendar'
import Modal from './Modal/Modal'

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
            <div className="container-fluid fill-height">
                <Navbar />
                    <div className="header-schedule">
                        <h2>
                            Agenda
                        </h2>
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
