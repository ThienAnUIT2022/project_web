export function signupValidation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.firstName === "") {
    error.firstName = "First Name should not be empty ";
  } else {
    error.firstName = "";
  }

  if (values.lastName === "") {
    error.lastName = "Last Name should not be empty ";
  } else {
    error.lastName = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty ";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.email = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}
