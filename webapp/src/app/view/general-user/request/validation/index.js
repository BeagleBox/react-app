// Copyright @ http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
export function isEmpty(field) {
  let itIs = false;

  if(field === '' || field.length === 0) {
    itIs = true
  }

  return itIs
}

export function isEqual(field1, field2) {
  let itIs = false;

  if(field1 === field2) {
    itIs = true;
  }

  return itIs;
}
