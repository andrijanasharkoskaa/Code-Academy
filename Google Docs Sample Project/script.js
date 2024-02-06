function getUserInput() {
  console.log(document.getElementById("textarea").value);
}

function boldText() {
  var textarea = document.getElementById("textarea");

  textarea.value.style.fontWeight = "bold";
}
