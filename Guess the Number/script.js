let questionMark = document.getElementById("question-mark");
let message = document.querySelector(".message");

let randomNumber = Math.floor(Math.random() * 11);

function checkNumber() {
  let guessNumber = Number(document.getElementById("guess").value);

  console.log(randomNumber, guessNumber);

  if (guessNumber < randomNumber) {
    message.innerHTML = "Too Low. Try again";
    message.style.color = "red";
  } else if (guessNumber > randomNumber) {
    message.innerHTML = "Too High. Try again";
    message.style.color = "red";
  } else if (guessNumber === randomNumber) {
    message.innerHTML = "Correct!";
    message.style.color = "green";
    message.questionMark.innerHTML = randomNumber;
  }
}
