import React from 'react';
import '../assets/stylesheets/signupPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class SignupPage extends React.Component {
  render() {
    return (
      <div className="signupPageBody">
        <div className="SignupPageContent">
          <h1 className="signupTo">Sign in to Diariez...</h1>
          <form className="signupPage">
            <input className="signupFirstname" type="text" placeholder="First name"/>
            <input className="signupLastname" type="text" placeholder="Last name"/>
            <input className="signupEmail" type="email" placeholder="your@email.com"/>
            <input className="signupPassword" type="password" placeholder="Password"/>
            <input className="signup-submit" type="submit" value="Create account"/>
          </form>
          <div className="sign-hav-acc">
            <p>Already have an account? <Link to="login">
              log in
           </Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), () => ({}))(SignupPage);
