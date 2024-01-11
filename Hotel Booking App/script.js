const days = document.querySelectorAll(".day");

// Add click event listener to each day
days.forEach((day) => {
  day.addEventListener("click", () => {
    // Remove the 'selected' class from all days
    days.forEach((d) => d.classList.remove("selected"));

    // Add the 'selected' class to the clicked day
    day.classList.add("selected");
  });
});

function validateForm() {
  var cardNumber = document.getElementById("cardNumber").value.trim();

  document.getElementById("cardNumberError").innerHTML = "";

  if (cardNumber === "" || cardNumber.length < 16) {
    document.getElementById("cardNumberError").innerHTML =
      "Credit card number not valid";
    setTimeout(() => {
      window.location.href = "payment-failure.html";
    }, 2000);
  } else {
    document.getElementById("paymentForm").submit();
  }
}
// Login Button
function showLoginPopup() {
  document.getElementById("loginPopup").style.display = "block";
  document.body.classList.add("blur-background");
}

function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
  document.body.classList.remove("blur-background");
}

function login() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  alert("Login logic goes here.");

  s;
  closeLoginPopup();
}
