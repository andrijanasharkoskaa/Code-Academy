let chatboxIcon = document.getElementById("chatbox-icon");
let chatbotContainer = document.getElementById("chatbot-container");
let exitBtn = document.getElementById("exit-header");
let sendBtn = document.getElementById("send-btn");
let userInput = document.getElementById("input-box");
let questions = document.getElementById("questions");

let answers = [
  "Javascript is the best programming language",
  "HTML is a markup language used for outlining the document's structure",
  "CSS is used for styling websites",
];

function askQuestion() {
  let newQuestion = document.createElement("li");
  newQuestion.innerHTML = `${userInput.value}<i class="fa-solid fa-user"></i>`;
  newQuestion.classList.add("new-question");
  questions.appendChild(newQuestion);

  let answerFound = false;

  answers.forEach((answer) => {
    if (answer.toLowerCase().includes(userInput.value.toLowerCase())) {
      let answerEl = document.createElement("li");
      answerEl.innerHTML = `<i class="fa-solid fa-robot"></i> ${answer}`;
      answerEl.classList.add("answer");
      questions.appendChild(answerEl);
      answerFound = true;
    }
  });

  if (!answerFound) {
    let noAnswerEl = document.createElement("li");
    noAnswerEl.innerHTML = `<i class="fa-solid fa-robot"></i>No matching answer found.`;
    noAnswerEl.classList.add("answer");
    questions.appendChild(noAnswerEl);
  }

  userInput.value = "";
}

// Function to display chat
function openChat() {
  chatbotContainer.classList.toggle("display-class-none");
  // chatboxIcon.classList.add("display-class-none");
}
// Function to close chat
function closeChat() {
  chatbotContainer.classList.add("display-class-none");
  // chatboxIcon.classList.add("display-class-block");
}
