import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import InstitutionRegister from './components/institutionRegister'
import Home from './components/home'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/institutionRegister" component={InstitutionRegister} />
      <Route path="/home" component={Home} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);
