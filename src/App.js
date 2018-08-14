import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Diariez...</h1>
        <div className="navigation">
          <p>remainder</p>
          <p>profile</p>
          <p>events</p>
          <p>about</p>
        </div>
        </header>
        <main>
        <LandingPage/>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
