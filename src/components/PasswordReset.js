import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../assets/stylesheets/passwordReset.css';


class PasswordReset extends React.Component {
  render() {
    return (
      <div className="pwd-reset-body">
        <div className="pwd-reset-container">
          <h1 className="pwdres">Reset Password</h1>
          {/* <hr/> */}
          <form className="reset">
            <input className="pwd-restEmail" type="email" placeholder="your@email.com"/>
            <input className="resetp-btn" type="submit" value="RESET MY PASSWORD"/>
          </form>
          <p className="remPass">Remember Password? <Link to="login" className="login-rst"> log in </Link> </p>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), () => ({}))(PasswordReset);
