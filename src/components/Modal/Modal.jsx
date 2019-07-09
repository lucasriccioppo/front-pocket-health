import React, { Component } from 'react'
import axios from 'axios'
import './Modal.css';

class modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hour: "",
            medic: "",
            patient: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.renderRow = this.renderRow.bind(this)

    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleAdd() {
        let consultDate = this.props.date;

        consultDate.setHours(parseInt(this.state.hour, 10))

        axios
            .get("http://localhost:3000/medic/"+this.state.medic)
            .then(medicResponse => {
                axios
                    .get("http://localhost:3000/patient/"+this.state.medic)
                    .then(patientResponse => {
                        axios
                            .post(
                                "http://localhost:3000/consult", 
                                {
                                    medic: medicResponse.data._id,
                                    institution: localStorage.user,
                                    Date: consultDate,
                                    patient: patientResponse.data._id
                                })
                                .catch(consultErr => {})
                    })
                    .catch(patientErr => {})
            })
            .catch(medicErr => {})
    }

    renderRow(row) {
        return (<tr><td>{typeof row.Date}</td><td>{row.medic}</td><td>{row.pacient}</td></tr>)
    }

    render() {
        return (
            <div className="container-modal">
                <div className="modal-wrapper"
                    style={{
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Dia {this.props.date.getDate()}</h3>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        Horário
                                    </th>
                                    <th>
                                        Médico
                                    </th>
                                    <th>
                                        Paciente
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.consults.map(row => this.renderRow(row))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <form>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="hour">Horário:</label>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control" id="hour" value={this.state.hour} onChange={this.handleChange} placeholder="Horário" />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="medic">Médico:</label>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control" id="medic" value={this.state.medic} onChange={this.handleChange} placeholder="Médico" />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="patient">Paciente:</label>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control" id="patient" value={this.state.patient} onChange={this.handleChange} placeholder="Paciente" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-btn">
                        <div className="add-btn">
                            <button onClick={this.handleAdd} className="btn btn-success modal-add-button">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = modal;
