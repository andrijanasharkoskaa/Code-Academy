let role = document.getElementById("primary-role");
let submitBtn = document.getElementById("search-btn");

role.addEventListener("input", checkForm);

function checkForm() {
  if (role.value) {
    submitBtn.style.backgroundColor = "orange";
  } else {
    submitBtn.style.backgroundColor = "";
  }
}
