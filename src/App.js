import React from 'react';
import './App.css';
import NavBar from '../src/components/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <div className="container" />
      </div>
    );
  }
}

export default App;
