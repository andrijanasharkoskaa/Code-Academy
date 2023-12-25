$(document).ready(function () {
  $("#login-btn").click(function () {
    $("#login-form").toggleClass("hidden");
    $("#wrapper").toggleClass("hidden");
  });
});
$(document).ready(function () {
  $("#login-btn").click(function () {
    $("#basic").toggleClass("hidden");
    $("#premium").toggleClass("hidden");
    $("#ultimate").toggleClass("hidden");
  });
});

$(document).ready(function () {
  $("#basic").click(function (e) {
    $("#selected_plan").val("Basic");
    $("#basic").css("border", "3px solid green");
    $("#basic").toggleClass("showing");
    $("#premium").css("border", "none");
    $("#premium").removeClass("showing");
    $("#ultimate").css("border", "none");
    $("#ultimate").removeClass("showing");
  });
});

$(document).ready(function () {
  $("#premium").click(function (e) {
    $("#selected_plan").val("Premium");
    $("#premium").css("border", "3px solid red");
    $("#premium").toggleClass("showing");
    $("#basic").css("border", "none");
    $("#basic").removeClass("showing");
    $("#ultimate").css("border", "none");
    $("#ultimate").removeClass("showing");
  });
});
$(document).ready(function () {
  $("#ultimate").click(function (e) {
    $("#selected_plan").val("Ultimate");
    $("#ultimate").css("border", "3px solid purple");
    $("#ultimate").toggleClass("showing");
    $("#basic").css("border", "none");
    $("#basic").removeClass("showing");
    $("#premium").css("border", "none");
    $("#premium").removeClass("showing");
    $("#premium").removeClass("showing");
  });
});

function checkEnter(e) {
  if (e.key === "Enter") {
    checkAge();
  }

  function checkAge() {
    const ageInput = document.getElementById("age").value;
    const okMessage = document.getElementById("okmessage");
    const noMessage = document.getElementById("nomessage");
    console.log(ageInput);
    if (ageInput >= 18) {
      setTimeout(() => {
        noMessage.style.display = "none";
        okMessage.style.display = "block";
      }, 500);
    } else {
      setTimeout(() => {
        noMessage.style.display = "block";
        okMessage.style.display = "none";
      }, 500);
    }
  }
}
