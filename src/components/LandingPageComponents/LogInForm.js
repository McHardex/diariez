import React from 'react'
import { Link } from 'react-router';

const LogInForm = () => {
  return (
    <div className="logInForm">
      <p className="haveAccount">Already have an account?
        <Link to="login" className="login"> log in</Link>
       </p>
      <form>
          <input className="logInemail" placeholder="your@email.com" type="email"/>
          <input className="logInpassword" placeholder="enter password" type="password"/>
          <input type="submit" value="Log in" className="login-btn"/>
          <Link to="pw-forget" className="forgotPasswordLink">Forgot password?</Link>
      </form>
    </div>
  )
}


export default LogInForm