let questionMark = document.getElementById("question-mark");

let randomNumber = Math.floor(Math.random() * 11);

function checkNumber() {
  let guessNumber = Number(document.getElementById("guess").value);

  console.log(randomNumber, guessNumber);

  if (guessNumber < randomNumber) {
    console.log("Too low. Try again");
  } else if (guessNumber > randomNumber) {
    console.log("Too High. Try again");
  } else if (guessNumber === randomNumber) {
    console.log("Correct!");
  }
}
