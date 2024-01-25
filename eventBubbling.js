const body = document.getElementsByClassName("body")[0];
const div = document.getElementsByClassName("div")[0];
const span = document.getElementsByClassName("span")[0];
const button = document.getElementsByClassName("button")[0];

body.addEventListener("click", function () {
  console.log("body was clicked");
});

div.addEventListener("click", function () {
  console.log("div was clicked");
});

span.addEventListener("click", function () {
  console.log("span was clicked");
});

button.addEventListener("click", function () {
  console.log("button was clicked");
});
