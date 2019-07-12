import React, { Component } from 'react'
import axios from 'axios'
import './Modal.css'

class modal extends Component {
    state = {
        hour: "",
        medic: "",
        patient: "",
        consults: []
    }


    componentDidMount(){
        this.updateTable()
    }

    updateTable = () => {
        let url = `http://localhost:3000/consults/${localStorage.user}`

        axios
            .get(url)
            .then(response => {
                this.setState({ consults: response.data })
            })
            .catch(err => console.error(err))
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleAdd = () => {
        let consultDate = this.props.date

        consultDate.setHours(parseInt(this.state.hour, 10))

        axios
            .get("http://localhost:3000/medic/" + this.state.medic)
            .then(medicResponse => {
                axios
                    .get("http://localhost:3000/patient/" + this.state.patient)
                    .then(patientResponse => {
                        let body = {
                            medic: medicResponse.data._id,
                            institution: localStorage.user,
                            Date: consultDate,
                            patient: patientResponse.data._id
                        }
                        axios
                            .post(
                                "http://localhost:3000/consult",
                                body
                            )
                            .then(response => {
                                this.updateTable()
                            })
                            .catch(consultErr => { })
                    })
                    .catch(patientErr => { })
            })
            .catch(medicErr => { })
    }

    renderRow = (row) => {
        return (<tr key={row._id}><td>{new Date(row.Date).getHours()}</td><td>{row.medic.name}</td><td>{row.patient.name}</td></tr>)
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
                                {this.state.consults.map(row => this.renderRow(row))}
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

module.exports = modal
