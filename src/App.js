import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPageComponents/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Diariez...</h1>
        <div className="navigation">
          <img src="https://cdn0.iconfinder.com/data/icons/flat-online-2/64/reminder_bell_alarm_sound_listen-512.png" title="remainder" alt="remainder"/>
          <img src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png" title="profile" alt="profile"/>
          <img src="https://www.reporterlive.it/wordpress/wp-content/uploads/2014/04/Icon_Calendar_eventi_reporter-live.png" title="events" alt="events"/>
          <img src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/info_512pxGREY.png" title="about" alt="about"/>
        </div>
        </header>
        <main>
        <LandingPage/>
        </main>
        <footer className="App-footer">
          <a href="">About</a>
          <a href="">reviews</a>
          <a href="">contacts</a>
          <a href="">privacy</a>
          <p>&copy;2018 Diariez</p>
        </footer>
      </div>
    );
  }
}

export default App;
