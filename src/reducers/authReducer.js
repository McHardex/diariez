import * as authConstants from '../constants/authConstants'

const defaultState = {
  appName: 'Diariez...',
  user: null,
  error: null
};

export const appStates = (state = defaultState, action) => {
switch (action.type) {
  case authConstants.LOGIN_SUCCESS:
    return {...state, user: action.user}
  case authConstants.LOGIN_FAILURE:
    return {...state, error: action.error}
  default:
    return state;
  }
};