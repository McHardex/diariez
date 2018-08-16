import React from 'react'
import '../../assets/stylesheets/landingPage.css'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import LandingPageTimeline from './LandingPageTimeLine'

const LandingPage = () => {
  return (
    <div className='landingPageBody'>
      <LandingPageTimeline/>
      <div className="loginSignIn">
        <LogInForm/>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default LandingPage;