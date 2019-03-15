import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScormProvider from 'react-scorm-provider';
import SCORM from './EnhancedScorm';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScormProvider version="2004" debug={process.env.NODE_ENV !== 'production'}>
        <SCORM/>
      </ScormProvider>
    );
  }
}

export default App;
