import React, {Component} from 'react';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';
import { signUpUser } from '../../actions/authActionCreators';

class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {formData: {}}

    this.signUp = this.signUp.bind(this)
    this.setInputValue = this.setInputValue.bind(this)
  }

  setInputValue(e) {
    let formData = this.state.formData
    formData[e.target.name] = e.target.value
    this.setState({formData})
  }

  signUp(e) {
    e.preventDefault()
    signUpUser(this.state.formData)
  }

  render() {
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
          <input className="firstName" placeholder="First name" type="text" name='firstName' onChange={this.setInputValue} />
          <input className="lastname" placeholder="Last name" type="text" name='lastname' onChange={this.setInputValue} />
          <input className="email" placeholder="your@email.com" type="email"  name='email'onChange={this.setInputValue} />
          <input className="password" placeholder="enter password" type="password" name='password' onChange={this.setInputValue} />
          <p className="bycreating">By creating an account, you agree to our
            <span className="termsAndCondition"> Terms and Conditions</span>
          </p>
          <button type="submit" className="signup-btn" onClick={this.signUp}> Sign Up </button>
        </form>
      </div>
    )
  }
}


export default SignUpForm