import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import UserRegister from './components/userRegister'
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/userRegister" component={UserRegister} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);
