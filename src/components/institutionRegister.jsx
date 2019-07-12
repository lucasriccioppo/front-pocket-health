import React, { Component } from 'react'
import logo from '../../public/logo.png'
import axios from 'axios'

import '../style/institutionRegister.css'

class InstitutionRegister extends Component {
    state = {
        cep: "",
        city: "",
        state: "",
        street: "",
        number: "",
        complement: "",
        name: "",
        cnpj: "",
        password: "",
        type: "",
        phone: ""
    }

    onlynumber = (evt) => {
        var theEvent = evt || window.event
        var key = theEvent.keyCode || theEvent.which
        key = String.fromCharCode(key)
        var regex = /^[0-9.]+$/
        if (!regex.test(key)) {
            theEvent.returnValue = false
            if (theEvent.preventDefault) theEvent.preventDefault()
        }
    }

    validateForm = () => {
        return this.state.cep > 0 && this.state.city.length > 0 && this.state.state.length > 0 &&
            this.state.street.length > 0 && this.state.number.length > 0 && this.state.complement.length > 0 &&
            this.state.name.length > 0 && this.state.cnpj.length > 0 && this.state.password.length > 0 &&
            this.state.phone.length > 0
    }

    handleChange = (event) => {
        var id = event.target.id
        this.setState({ [id]: event.target.value }, () => {
            if (id === "cep") {
                this.findCep(this.state.cep)
            }
        })
    }

    findCep = (cep) => {
        if (cep.length >= 8) {
            var preparedCep = cep.slice(0, 5) + '-' + cep.slice(5, 8)
            var url = `http://localhost:3000/cep/${preparedCep}`

            axios
                .get(url)
                .then(response => {
                    this.setState({
                        street: response.data.logradouro,
                        state: response.data.uf,
                        city: response.data.localidade
                    })
                })
                .catch(err => { })
        }
    }

    registerInstitution = () => {
        event.preventDefault()
        var institution = {
            cep: this.state.cep,
            city: this.state.city,
            state: this.state.state,
            street: this.state.street,
            number: this.state.number,
            complement: this.state.complement,
            name: this.state.name,
            cnpj: this.state.cnpj,
            password: this.state.password,
            type: this.state.type,
            phone: this.state.phone
        }
        var url = "http://localhost:3000/institution/"

        axios
            .post(url, institution)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <div id="register-form">
                    <div id="register">
                        <img id="logo" src={logo} alt="logo" />
                        <div className="divide"><hr /></div>
                        <div id="title"><h2>Cadastro de Instituição</h2></div>
                        <form>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="cep">CEP:</label>
                                </div>
                                <div className="col-md-4">
                                    <input id="cep" className="form-control" value={this.state.cep} onChange={this.handleChange} onKeyPress={this.onlynumber} placeholder="CEP" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="city">Cidade:</label>
                                </div>
                                <div className="col-md-5">
                                    <input id="city" className="form-control" value={this.state.city} onChange={this.handleChange} placeholder="Cidade" />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="state">Estado:</label>
                                </div>
                                <div className="col-md-3">
                                    <input id="state" type="select" className="form-control" value={this.state.state} onChange={this.handleChange} placeholder="Estado" />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="street">Rua:</label>
                                </div>
                                <div className="col-md-7">
                                    <input id="street" className="form-control" value={this.state.street} onChange={this.handleChange} placeholder="Rua" />
                                </div>

                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="number">Número:</label>
                                </div>
                                <div className="col-md-4">
                                    <input id="number" className="form-control" value={this.state.number} onChange={this.handleChange} onKeyPress={this.onlynumber} placeholder="Número" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="complement">Complemento:</label>
                                </div>
                                <div className="col-md-5">
                                    <input id="complement" className="form-control" value={this.state.complement} onChange={this.handleChange} placeholder="Complemento" />
                                </div>

                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="name">Nome:</label>
                                </div>
                                <div className="col-md-5">
                                    <input id="name" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="Nome" />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="cnpj">CNPJ:</label>
                                </div>
                                <div className="col-md-5">
                                    <input id="cnpj" className="form-control" value={this.state.cnpj} onChange={this.handleChange} placeholder="CNPJ" />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-1">
                                    <label htmlFor="password">Senha:</label>
                                </div>
                                <div className="col-md-2">
                                    <input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Senha" />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="type">Tipo:</label>
                                </div>
                                <div className="col-md-3">
                                    <select id="type" className="form-control" value={this.state.type} onChange={this.handleChange}>
                                        <option value="" selected disabled>Tipo</option>
                                        <option value="hospital">Hospital</option>
                                        <option value="clinica">Clínica</option>
                                        <option value="laboratorio">Laboratório</option>
                                        <option value="convenio">Convênio</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="phone">Telefone:</label>
                                </div>
                                <div className="col-md-3">
                                    <input id="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} onKeyPress={this.onlynumber} placeholder="Telefone" />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-8"></div>
                                <div className="col-md-4">
                                    <button onClick={ this.registerInstitution} className="btn btn-dark btn-block">Confirmar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default InstitutionRegister
