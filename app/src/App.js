import React, { Component } from 'react';
import './App.css';
import WizardForm from './N2/WizardForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WizardForm onSubmit={() => {console.log("Algo")}}/>
      </div>
    );
  }
}

export default App;
