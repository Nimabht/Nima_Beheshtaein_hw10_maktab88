function containsOnlySpaceOrIsEmpty(value) {
  return !value.replace(/\s/g, "").length ? true : false;
}

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
}

function validator(value, method) {
  switch (method) {
    case "firstname":
      if (value.length > 30) return "maximum lenght is 30 characters";
      if (!!containsOnlySpaceOrIsEmpty(value)) return "Fill the input";
      break;
    case "lastname":
      if (value.length > 30) return "maximum lenght is 30 characters";
      if (!!containsOnlySpaceOrIsEmpty(value)) return "Fill the input";
      break;
    case "email":
      if (!!containsOnlySpaceOrIsEmpty(value)) return "Fill the input";
      if (!isValidEmail(value)) return "Invalid Email";
      break;
    case "password":
      if (!!containsOnlySpaceOrIsEmpty(value)) return "Fill the input";
      if (!isValidPassword(value))
        return "Password must contains at least one number,one letter,one symbol and 8 length";
      break;
  }
  return "<br>";
}
