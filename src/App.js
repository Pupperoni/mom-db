import React, { Component } from 'react';
import './App.css';
import PatientRecord from './components/PatientRecord.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PatientRecord />
        </header>
      </div>
    );
  }
}

export default App;
