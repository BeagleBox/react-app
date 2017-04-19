// Copyright @ http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
export function validateEmail(email) {
  let valid = true

  // Its not required
  if(email.length === 0) {
    valid = false
  }
  else {
    // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    valid = re.test(email)
  }

  return valid
}

export function validatePassword(password) {
  let valid = true;

  if(password.length !== 8) {
    valid = false;
  }

  return valid;
}
