import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CodeEditor from './Components/CodeEditor.js'
// import ReactPlayer from 'react-player'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          Hello Worldd
        </Button>
        <CodeEditor />
      </div>
    );
  }
}

export default App;
