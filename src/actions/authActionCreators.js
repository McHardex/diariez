import * as actionTypes from '../constants/authConstants';
import * as authRequest from '../requests/authRequest'

const loginSuccess = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: response
  }
}

const loginFailure = (response) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error: response
  }
}

const signupSuccess = (response) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    user: response
  }
}

const signupFailure = (response) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    error: response
  }
}

const loginUser = (formData) => {
  return(dispatch) => {
    return(
      authRequest
        .loginRequest(formData)
        .then(response => response.json())
        .then(response => {
          if (response.status === 200) {
            dispatch(loginSuccess(response))
          } else {
            dispatch(loginFailure(response))
          }
        })
    )  
  }
}

const logoutUser = () => {

}

const signUpUser = (formData) => {
  console.log(formData)
  return(dispatch) => {
    return(
      authRequest
        .signupRequest(formData)
        .then(response => response.json())
        .then(response => {
          if (response.status === 200) {
            dispatch(signupSuccess(response))
          } else {
            dispatch(signupFailure(response))
          }
        })
    )  
  }
}

export {
  loginUser,
  logoutUser,
  signUpUser
}