export const loginValidate = (values) => {
  const errors = {};

  //   email

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password

  if (!values.password) {
    errors.password = "required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be greater tha 8 and less then 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
};

export const registerValidate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.email = "Required";
  }
  if (!values.lastName) {
    errors.email = "Required";
  }

  //email

  if (!values.email) {
    errors.emailRegister = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.emailRegister = "Invalid email address";
  }

  // password
  if (!values.password) {
    errors.password = "required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be greater tha 8 and less then 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  //confirm pasword
  if (!values.confirmPassword) {
    errors.confirmPassword = "required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password not Match!";
  }

  return errors;
};
