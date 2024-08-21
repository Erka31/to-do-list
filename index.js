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
    alert("@ bhq bn");
  }
}

function isValidPhonenumber() {
  const phonenumberValue = phonenumber.value;
  if (isNaN(phonenumberValue)) {
    alert("useg orultsn bn");
  }
}

function isValidPassword() {
  const passwordValue = password.value;
  if (passwordValue.length < 8) {
    alert("8s baga bn");
  }
  if (isNaN(passwordValue) === false) {
    alert("useg oruul");
  }
  // let number1 = 0;
  // for (let i = 0; i < passwordValue.length; i++) {
  //   if (temdegt.includes(passwordValue[i]) === false) {
  //     alert("tusgai temdgt hergl");
  //     number1++;
  //     break;
  //   }
  // }
  // let number2 = 0;
  // for (let j = 0; j < passwordValue.length; j++)
  // if (number.includes(passwordValue[j]) === false) {
  //   alert("too oruul");
  //   number2++;
  //   break;
  // }
}

submitbutton.addEventListener("click", function () {
  isValidEmail();
  isValidPhonenumber();
  isValidPassword();
});

const donebutton = document.getElementById("donebutton");

donebutton.addEventListener("click", function () {
  localStorage.setItem("email", email.value);
  localStorage.setItem("phone number", phonenumber.value);
  localStorage.setItem("password", password.value);
  window.location.href = "/todo.html";
});
