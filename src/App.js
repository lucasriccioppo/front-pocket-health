import React, { Component } from 'react';
require('./App.css');
const Login = require('./components/login');

class App extends Component {
  render() {
    return (
      <div className="container">
        <Login />
      </div>
    );
  }
}

module.exports = App;
