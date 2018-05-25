import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio';
import Jill from './Jill';
import Matthew from './Matthew';


class App extends Component {
  render() {
    return (
      <div>
        <Jill/>
        <Matthew/>
      </div>
    )
  }
};

export default App;
