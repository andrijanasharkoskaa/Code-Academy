$(document).ready(function () {
  $("#login-btn").click(function () {
    $("#login-form").toggleClass("hidden");
    $("#wrapper").toggleClass("hidden");
  });
});

$(document).ready(function () {
  $("#basic").click(function (e) {
    $("#basic").css("border", "3px solid blue");
  });
});

$(document).ready(function () {
  $("#basic").click(function (e) {
    $("#basic").css("border", "3px solid green");
    $("#basic").toggleClass("showing");
    $("#premium").css("border", "1px solid #dedede");
    $("#premium").removeClass("showing");
    $("#ultimate").css("border", "1px solid #dedede");
    $("#ultimate").removeClass("showing");
  });
});

$(document).ready(function () {
  $("#premium").click(function (e) {
    $("#premium").css("border", "3px solid red");
    $("#premium").toggleClass("showing");
    $("#basic").css("border", "1px solid #dedede");
    $("#basic").removeClass("showing");
    $("#ultimate").css("border", "1px solid #dedede");
    $("#ultimate").removeClass("showing");
  });
});
$(document).ready(function () {
  $("#ultimate").click(function (e) {
    $("#ultimate").css("border", "3px solid purple");
    $("#ultimate").toggleClass("showing");
    $("#basic").css("border", "1px solid #dedede");
    $("#basic").removeClass("showing");
    $("#premium").css("border", "1px solid #dedede");
    $("#premium").removeClass("showing");
    $("#premium").removeClass("showing");
  });
});
