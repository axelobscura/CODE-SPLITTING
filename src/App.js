import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
