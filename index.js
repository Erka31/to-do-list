const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const submitbutton = document.getElementById("submitbutton");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const temdegt = ["!", "@"];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function isValidEmail() {
  const emailValue = email.value;
  if (emailValue.includes("@") === false) {
    alert("email aldatai bn");
    return false;
  }
  return true;
}

function isValidPhonenumber() {
  const phonenumberValue = phonenumber.value;
  if ((phonenumberValue.length == 8) == false) {
    alert("utsni dugara shalganu");
    return false;
  }

  if (isNaN(phonenumberValue)) {
    alert("useg orulsn bn");
    return false;
  }
  return true;
}

function isValidPassword() {
  const passwordValue = password.value;
  if (passwordValue.length < 8) {
    alert("passwordin urt 8s baga bn");
    return false;
  }
  if (isNaN(passwordValue) === false) {
    alert("useg oruul");
    return false;
  }
  return true;
}

submitbutton.addEventListener("click", function () {
  const isEmailValid = isValidEmail();
  const isPhonenumberValid = isValidPhonenumber();
  const isPasswordValid = isValidPassword();
  if (
    isEmailValid == true &&
    isPhonenumberValid == true &&
    isPasswordValid == true
  ) {
    window.location.href = "/todo.html";
    localStorage.setItem("email", email.value)
    localStorage.setItem("phone number", phonenumber.value)
    localStorage.setItem("password", password.value)
  }
});
function myFunction() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
