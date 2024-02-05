let chatboxIcon = document.getElementById("chatbox-icon");
let chatbotContainer = document.getElementById("chatbot-container");
let exitBtn = document.getElementById("exit-header");
let sendBtn = document.getElementById("send-btn");
let userInput = document.getElementById("input-box");
let questions = document.getElementById("questions");

let answers = ["answer1", "answer2"];

function askQuestion() {
  let newQuestion = document.createElement("li");
  newQuestion.innerText = userInput.value;
  newQuestion.classList.add("new-question");
  questions.appendChild(newQuestion);

  answers.forEach((answer) => {
    let answer1 = document.createElement("li");
    answer1.innerText = userInput.value;
    answer1.classList.add("answer");
    questions.appendChild(answer1);
  });
}

// Function to display chat
function openChat() {
  chatbotContainer.classList.toggle("display-class-none");
}

function closeChat() {
  chatbotContainer.classList.add("display-class-none");
}
