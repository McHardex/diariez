import React from 'react'

const LogInForm = () => {
  return (
    <div className="logInForm">
      <p className="haveAccount">Already have an account?
        <span className="login"> log in</span>
       </p>
      <form>
          <input className="logInemail" placeholder="your@email.com" type="email"/>
          <input className="logInpassword" placeholder="enter password" type="password"/>
          <input type="submit" value="log in" className="login-btn"/>
          <a href="" className="forgotPasswordLink">Forgot password?</a>
      </form>
    </div>
  )
}


export default LogInForm