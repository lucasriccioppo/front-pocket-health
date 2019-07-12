import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login'
import InstitutionRegister from './components/institutionRegister'
import Home from './components/home'
import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const isAuthenticate = localStorage.auth && localStorage.user

const home = isAuthenticate ? <Route path="/home" component={Home} /> : <Redirect to='/' />

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/institutionRegister" component={InstitutionRegister} />
      {home}
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
)
