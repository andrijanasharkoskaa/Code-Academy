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

const login = document.getElementsById("login");
const signup = document.getElementById("signup");

login.addEventListener("click", () => {
  login.style.backgroundColor = "black";
});
