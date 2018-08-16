import React from 'react';
import remainder from '../assets/images/remainder.png';
import profile from '../assets/images/profile-nav.png';
import events from '../assets/images/events-nav.png';
import about from '../assets/images/about-nav.png';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="title"><Link to="/">{this.props.appName}</Link></h1>
        <div className="navigation">
          <img src={remainder} title="remainder" alt="remainder"/>
          <img src={profile} title="profile" alt="profile"/>
          <img src={events} title="events" alt="events"/>
          <img src={about} title="about" alt="about"/>
        </div>
      </header>
    );
  }
}

export default Header;
