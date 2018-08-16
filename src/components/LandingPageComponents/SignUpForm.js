import React from 'react';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';

const SignUpForm = () => {
  return (
    <div className="signUpForm">
      <div className="facebookOrTwitter">
        <div className="facebook">
        <img src={ facebookIcon } alt="facebook follow icon"/>
        <p> Connect with Facebook</p>
        </div>
        <div className="twitter">
        <img src={ twitterIcon } alt="twitter follow icon"/>
        <p> Connect with Twitter</p>
        </div>
      </div>
      <p className="orSignUpWith"> Or sign up with</p>
      <form>
          <input className="firstName" placeholder="First name" type="text"/>
          <input className="lastname" placeholder="Last name" type="text"/>
          <input className="email" placeholder="your@email.com" type="email"/>
          <input className="password" placeholder="enter password" type="password"/>

          <p className="bycreating">By creating an account, you agree to our
          <span className="termsAndCondition"> Terms and Conditions</span>
          </p>

          <input type="submit" value="Create account" className="signup-btn"/>
      </form>
    </div>
  )
}


export default SignUpForm