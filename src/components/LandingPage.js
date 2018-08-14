import React from 'react'
import Slideshow from './Slide';
import '../Assets/stylesheets/landingPage.css'
import SignUpForm from './SignUpForm'
import Timeline from './LandingPageTimeLine'

const LandingPage = () => {
  return (
    <div className='landingPageBody'>
    <Slideshow/>
    <div className="form_timeline">
    <SignUpForm/>
    <Timeline/>
    </div>
    </div>
  )
}

export default LandingPage;