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
    $("#ultimate").css("border", "3px solid purple");
    $("#ultimate").toggleClass("showing");
    $("#basic").css("border", "none");
    $("#basic").removeClass("showing");
    $("#premium").css("border", "none");
    $("#premium").removeClass("showing");
    $("#premium").removeClass("showing");
  });
});
