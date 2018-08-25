const loginRequest = (formData) => {
  return fetch('URL', {header: {}, method: 'POST', body: formData, credentials: 'include'} )
}

const signupRequest = (formData) => {
  return fetch('URL', {header: {}, method: 'POST', body: formData, credentials: 'include'} )
}

export { loginRequest, signupRequest}