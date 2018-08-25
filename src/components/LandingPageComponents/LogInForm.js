import React from 'react'
import { Link } from 'react-router';

const LogInForm = () => {
  return (
    <div className="logInForm">
      <p className="haveAccount">Already have an account?
        <Link to="login" className="login"> log in</Link>
       </p>
    </div>
  )
}


export default LogInForm