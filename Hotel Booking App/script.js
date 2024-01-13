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
  addBlurEffect();
  document.getElementById("loginPopup").style.display = "block";
  document.body.classList.add("blur-background");
}

function closeLoginPopup() {
  removeBlurEffect();
  document.getElementById("loginPopup").style.display = "none";
}

function login() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  var savedEmail = "andrijana.sh@gmail.com";
  var savedPassword = "password123";

  if (loginEmail === savedEmail && loginPassword === savedPassword) {
    window.location.href = "profile.html";
    closePopups();
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Signup

function showSignupPopup() {
  addBlurEffect();

  document.getElementById("signupPopup").style.display = "block";
}

function closeSignupPopup() {
  removeBlurEffect();
  document.getElementById("signupPopup").style.display = "none";
}

function signup() {
  var signupEmail = document.getElementById("signupEmail").value;
  var signupPassword = document.getElementById("signupPassword").value;

  var savedEmail = "andrijana.sh@gmail.com";
  var savedPassword = "password123";

  if (signupEmail === savedEmail && signupPassword === savedPassword) {
    window.location.href = "profile.html";
    closePopups();
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Experimenting
function addBlurEffect() {
  document.querySelector(".add-blur").classList.add("blur-bg");
}

function removeBlurEffect() {
  document.querySelector(".add-blur").classList.remove("blur-bg");
}
