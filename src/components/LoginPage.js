import React from 'react';
import '../assets/stylesheets/loginPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class LoginPage extends React.Component {
  render() {
    return (
      <div className="LoginPageBody">
        <div className="loginPageContent">
          <h1 className="loginTo">Log in to Diariez...</h1>
          <form className="loginPage">
            <input className="loginEmail" type="email" placeholder="your@email.com"/>
            <input className="loginPassword" type="password" placeholder="Password"/>
            <input className="login-submit" type="submit" value="Log in"/>
            <Link to="pw-forget" className="pass-forget">Forgot password?</Link>
          </form>
          <div className="newToDiariez">
            <p>New to Diariez...? <Link to="signup">
               create account
           </Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), () => ({}))(LoginPage);
