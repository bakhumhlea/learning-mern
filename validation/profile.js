const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.titles = !isEmpty(data.titles) ? data.titles : '';
  console.log(data.handle);

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle is required';
  }

  if (Validator.isEmpty(data.titles)) {
    errors.titles = "Titles field is required";
  }

  if (!isEmpty(data.website)) {
    if(!Validator.isURL(data.website)) {
      errors.website = "Invalid website URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook)) {
      errors.facebook = "Invalid website URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)) {
      errors.twitter = "Invalid website URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if(!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Invalid website URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)) {
      errors.instagram = "Invalid website URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};