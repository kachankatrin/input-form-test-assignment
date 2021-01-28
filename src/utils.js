export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export function validatePassword(password) {
  return (!password || password.length < 6) ? 'Invalid format: too short' : null;
}

export function validateEmail(email) {
  // took a regExp for email validation from stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(String(email).toLowerCase()) ? 'Invalid email' : null;
}