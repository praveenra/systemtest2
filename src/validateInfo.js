export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'name required';
  }

  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  //"^[A-Z]{4}0[A-Z0-9]{6}$"
  //^[A-Za-z]{4}[a-zA-Z0-9]{7}$

  if (!values.account_number) {
    errors.account_number = 'account_number required';
  }else if (!/^[0-9]+/.test(values.account_number)) { 
    errors.account_number = 'numbers only accepted';
  }else if (values.account_number.length < 16) {
    errors.account_number = 'account_number is invalid 2';
  }

  if (!values.ifsc_code) {
    errors.ifsc_code = 'ifsc_code is required';
  }else if (!/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/.test(values.ifsc_code)) {
    errors.ifsc_code = 'ifsc_code is invalid formate';
  }

  if (!values.amount) {
    errors.amount = 'amount is required';
  } else if (!/^[0-9]+/.test(values.amount)) {
    errors.amount = 'numbers only accepted';
  }
  return errors;
}
