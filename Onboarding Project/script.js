// Get references to form elements
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const checkboxEl = document.getElementById("checkbox");
const submitBtn = document.getElementById("submitBtn");

firstName.addEventListener("input", checkForm);
lastName.addEventListener("input", checkForm);
email.addEventListener("input", checkForm);
checkboxEl.addEventListener("change", checkForm);

function checkForm() {
  if (firstName.value && lastName.value && email.value && checkboxEl.checked) {
    submitBtn.style.backgroundColor = "orange";
  } else {
    submitBtn.style.backgroundColor = "";
  }
}
