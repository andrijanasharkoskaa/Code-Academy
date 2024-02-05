let chatboxIcon = document.getElementById("chatbox-icon");
let chatbotContainer = document.getElementById("chatbot-container");
let exitBtn = document.getElementById("exit-header");
let sendBtn = document.getElementById("send-btn");
let userInput = document.getElementById("input-box");
let questions = document.getElementById("questions");

let answers = [
  "Javascript is the best programming language",
  "I am good, thank you for the question",
];

function askQuestion() {
  let newQuestion = document.createElement("li");
  newQuestion.innerText = userInput.value;
  newQuestion.classList.add("new-question");
  questions.appendChild(newQuestion);

  let answerFound = false;

  answers.forEach((answer) => {
    if (answer.toLowerCase().includes(userInput.value.toLowerCase())) {
      let answerEl = document.createElement("li");
      answerEl.innerText = answer;
      answerEl.classList.add("answer");
      questions.appendChild(answerEl);
      answerFound = true;
    }
  });

  if (!answerFound) {
    let noAnswerEl = document.createElement("li");
    noAnswerEl.innerText = "No matching answer found.";
    noAnswerEl.classList.add("answer");
    questions.appendChild(noAnswerEl);
  }

  userInput.value = "";
}

// Function to display chat
function openChat() {
  chatbotContainer.classList.toggle("display-class-none");
}
// Function to close chat
function closeChat() {
  chatbotContainer.classList.add("display-class-none");
}
