import React from 'react'

const SignUpForm = () => {
  return (
    <div className="signUpForm">
      <div className="facebookOrTwitter">
        <div className="facebook">
        <img src="https://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/facebook-512.png" alt="facebook follow icon"/>
        <p> Connect with Facebook</p>
        </div>
        <div className="twitter">
        <img src="http://profitquery-a.akamaihd.net/website_2.0/img/blog/follow_buttons/twitter_follow_icon.png" alt="twitter follow icon"/>
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